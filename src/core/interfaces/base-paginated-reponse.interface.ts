export interface IBasicPaginatedResponse<T> {
  success: boolean;
  message: string;
  data: IPaginatedData<T>;
}

export interface IPaginatedData<T> {
  items: T[];
  total: number;
}
