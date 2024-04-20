export interface PagedResponse<T>{
    pageNumber: number,
    pageSize: number,
    data: T,
    totalCountPerPage: number,
    totalCount: number,
    totalPages: number
}