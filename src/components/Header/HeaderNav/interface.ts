export interface IContent {
  _id: string
  subBrand: string
  queryUrl: string
}

export interface IDropdownItem {
  _id: string
  brand: string
  brandUrl: string
  subBrandList: IContent[]
}

export interface IHeaderNav {
  laptopDropdownList: IDropdownItem[]
  pcDropdownList: IDropdownItem[]
}
