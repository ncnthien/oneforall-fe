export interface ISectorSort {
  sort?: 'ascend' | 'descend'
  handleSortClick: (sort: 'ascend' | 'descend') => void
}
