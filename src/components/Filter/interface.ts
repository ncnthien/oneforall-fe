import { laptopFilter, pcFilter, accessoryFilter } from './Filter.data'

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

export interface filterState {
  currentFilter: typeof laptopFilter | typeof pcFilter | typeof accessoryFilter
  approvedFilter: string[]
}
