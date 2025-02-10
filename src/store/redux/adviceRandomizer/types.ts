export interface AdviceRandomizerStateSlice {
  data: string[]
  status: "loading" | "success" | "default" | "error"
  error: any
}
