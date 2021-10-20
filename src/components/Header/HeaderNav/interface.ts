export interface IContent {
  id: string
  subBrand: string
  queryUrl: string
}

export interface IDropdownItem {
  id: string
  brand: string
  brandUrl: string
  subBrandList: IContent[]
}

export interface IHeaderNav {
  laptopDropdownList: IDropdownItem[]
  pcDropdownList: IDropdownItem[]
}
