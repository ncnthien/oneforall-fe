import { Dropdown } from '../interface'

export type HandleFilterItemClick = (
  dropdownId: string,
  item: string,
  checked: boolean
) => void

export interface IDropdown {
  dropdown: Dropdown
  handleFilterItemClick: HandleFilterItemClick
}

export interface IDropdownState {
  listExpansion: boolean
}
