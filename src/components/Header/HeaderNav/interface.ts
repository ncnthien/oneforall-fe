export interface IContent {
  id: string
  data: string
  url: string
}

export interface IDropdownItem {
  id: string
  title: string
  url: string
  contentList: IContent[]
}
