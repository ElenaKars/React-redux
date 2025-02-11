import { AdviceRandomizerStateSlice } from "./types"
import axios from "axios"
import { createAppSlice } from "store/createAppSlice"

const adviceRandomizerState: AdviceRandomizerStateSlice = {
  data: [],
  status: "default",
  error: undefined,
}
const ADVICE_URL = "https://api.adviceslip.com/advice"

export const adviceRandomizerSlice = createAppSlice({
  name: "ADVICE_RANDOMIZER",
  initialState: adviceRandomizerState,
  reducers: create => ({
    getAdvice: create.asyncThunk(
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(ADVICE_URL)

          return result.data.slip.advice
        } catch (error) {
          return thunkApi.rejectWithValue(error)
        }
      },
      {
        pending: (state: AdviceRandomizerStateSlice) => {
          ;(state.status = "loading"), (state.error = undefined)
        },
        fulfilled: (state: AdviceRandomizerStateSlice, action: any) => {
          console.log(action.payload)
          ;(state.data = [...state.data, action.payload]),
            (state.status = "success")
        },
        rejected: (state: AdviceRandomizerStateSlice, action: any) => {
          ;(state.status = "error"), (state.error = action.payload.message)
        },
      },
    ),
    reset: create.reducer(state => {
      state.data = []
      state.status = "default"
      state.error = undefined
    }),
  }),
  selectors: {
    adviceData: (state: AdviceRandomizerStateSlice) => state,
  },
})

export const AdviceRandomazerActions = adviceRandomizerSlice.actions
export const AdviceRandomazerSelectors = adviceRandomizerSlice.selectors
