export interface APIResponse<T> {
  code: number;
  data?: T | null;
  message: string;
  metadata: {
    currentPageSize: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    limit: string;
    page: string;
    total: number;
    totalCurrentPage: number;
  };
}
