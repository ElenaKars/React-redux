export interface RandomJokesStateSlice {
  data: string[]
  error: any
  status: "default" | "loading" | "success" | "error"
}
