export interface IModelResponse<T> {
  data: T | null;
  error: boolean;
}