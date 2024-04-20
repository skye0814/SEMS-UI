export interface PagedRequest {
    pageNumber: number,
    pageSize: number,
    sortBy: string,
    search: string | null
}