import { createSlice } from "@reduxjs/toolkit"
import { FeedbackStateSlice } from "./types"

const feedbackInitialState: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
}
export const feedbackSlice = createSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    like: create.reducer((state: FeedbackStateSlice) => {
      state.likes = state.likes + 1
    }),
    dislikes: create.reducer((state: FeedbackStateSlice) => {
      state.dislikes = state.dislikes + 1
    }),
    reset: create.reducer(() => feedbackInitialState),
  }),
  selectors: {
    countLikes: (state: FeedbackStateSlice) => state.likes,
    countDislikes: (state: FeedbackStateSlice) => state.dislikes,
  },
})

export const feedbackActions = feedbackSlice.actions
export const feedbackSelectors = feedbackSlice.selectors
