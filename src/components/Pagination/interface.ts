export interface IPagination {
  total: number
  page: number
  length?: number // if length value equal 3 and current page is 6 then pagination show [3 4 5] [6] [7 8 9]
  setPage: React.Dispatch<React.SetStateAction<number>>
}
