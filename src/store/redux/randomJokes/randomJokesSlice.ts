import { create } from "domain"
import { RandomJokesStateSlice } from "./types"
import { createAppSlice } from "store/createAppSlice"
import axios from "axios"

const randomJokesInitialState: RandomJokesStateSlice = {
  data: [],
  error: undefined,
  status: "default",
}

export const randomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  // 1. middleware создаем в объекте reducers, но с использованием asynkThunk
  reducers: create => ({
    getJoke: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          return result.data
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: RandomJokesStateSlice) => {
          ;(state.status = "loading"), (state.error = undefined)
        },
        fulfilled: (state: RandomJokesStateSlice, action: any) => {
          ;(state.data = [
            ...state.data,
            `${action.payload.setup}-${action.payload.punchline}`,
          ]),
            (state.status = "success")
        },
        rejected: (state: RandomJokesStateSlice, action: any) => {
          ;(state.error = action.payload.message), (state.status = "error")
        },
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesStateSlice) => state,
  },
})

export const randomJokeActions = randomJokesSlice.actions
export const randomJokeSelectors = randomJokesSlice.selectors
