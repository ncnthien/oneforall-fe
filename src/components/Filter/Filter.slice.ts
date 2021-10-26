import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { accessoryFilter, laptopFilter, pcFilter } from './Filter.data'
import { Dropdown, FilterState, ApprovedFilter } from './interface'

const initialState: FilterState = {
  currentFilter: laptopFilter,
  approvedFilter: {},
}

const toggleCheckedItem = (
  filter: Dropdown[],
  dropdownName: string,
  itemName: string
): void => {
  for (const dropdown of filter) {
    const index = dropdown.items.findIndex(
      item =>
        item.name.toLowerCase() === itemName.toLowerCase() &&
        dropdownName === dropdown.name
    )
    if (index > -1) {
      for (let i = 0; i < dropdown.items.length; i++) {
        if (i === index) {
          dropdown.items[i].checked = !dropdown.items[i].checked
          continue
        }
        dropdown.items[i].checked = false
      }
    }
  }
}

const updateApprovedFilter = (
  currentFilter: Dropdown[],
  approvedFilter: ApprovedFilter
) => {
  for (const dropdown of currentFilter) {
    for (const item of dropdown.items) {
      if (item.checked) {
        approvedFilter[dropdown.id] = item.value
      }
    }
  }
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    loadFilter: (
      state,
      action: PayloadAction<'laptop' | 'pc' | 'accessory'>
    ) => {
      switch (action.payload) {
        case 'laptop':
          state.currentFilter = laptopFilter
          break
        case 'pc':
          state.currentFilter = pcFilter
          break
        case 'accessory':
          state.currentFilter = accessoryFilter
          break
        default:
          break
      }
    },
    toggleItem: (
      state,
      {
        payload: { dropdownName, itemName },
      }: PayloadAction<{ dropdownName: string; itemName: string }>
    ) => {
      toggleCheckedItem(state.currentFilter, dropdownName, itemName)
      state.approvedFilter = {}
      updateApprovedFilter(state.currentFilter, state.approvedFilter)
    },
    clearFilter: state => {
      state.approvedFilter = {}
    },
  },
})

export const { loadFilter, toggleItem, clearFilter } = filterSlice.actions

export default filterSlice.reducer
