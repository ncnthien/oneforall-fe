export type Items = {
  name: string
  checked: boolean
}[]
export type Dropdown = {
  id: string
  name: string
  items: Items
}

export interface IFilter {
  filterType: 'laptop' | 'pc' | 'accessory'
}

export interface IFilterState {
  showSaleOnly: boolean
}
