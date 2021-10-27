export interface Item {
  name: string
  value: string | { min: number; max?: number }
  checked: boolean
}
export interface Dropdown {
  id: string
  name: string
  items: Item[]
}

export interface IFilter {
  filterType: 'laptop' | 'pc' | 'accessory'
}

export interface ApprovedFilter {
  [key: string]:
    | string
    | {
        min: number
        max?: number
      }
    | number
}

export interface FilterState {
  currentFilter: Dropdown[]
  approvedFilter: ApprovedFilter
  isSale: boolean
}
