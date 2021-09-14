export interface IManageNav {
  navList: {
    title: string
    url: string
    icon?: React.ElementType
    active?: boolean
  }[]
}
