import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { accessoryFilter, laptopFilter, pcFilter } from './Filter.data'
import { Dropdown, filterState } from './interface'

const initialState: filterState = {
  currentFilter: laptopFilter,
  approvedFilter: [],
}

const toggleCheckedItem = (filter: Dropdown[], checkedItem: string): void => {
  for (const dropdown of filter) {
    const index = dropdown.items.findIndex(item => item.name === checkedItem)
    if (index > -1) {
      dropdown.items[index].checked = !dropdown.items[index].checked
      return
    }
  }
}

const toggleApprovedFilter = (
  approvedFilter: string[],
  filter: string
): void => {
  for (let i = 0; i < approvedFilter.length; i++) {
    if (approvedFilter[i] === filter) {
      approvedFilter.splice(i, 1)
      return
    }
  }

  approvedFilter.push(filter)
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
    toggleItem: (state, action: PayloadAction<string>) => {
      toggleCheckedItem(state.currentFilter, action.payload)
    },
    toggleFilter: (state, action: PayloadAction<string>) => {
      toggleApprovedFilter(state.approvedFilter, action.payload)
    },
    clearFilter: state => {
      state.approvedFilter = []
    },
  },
})

export const { loadFilter, toggleItem, toggleFilter, clearFilter } =
  filterSlice.actions

export default filterSlice.reducer
