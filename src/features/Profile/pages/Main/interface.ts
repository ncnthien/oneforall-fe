export interface IProfileNav {
  title: string
  url: string
  icon: React.ElementType
  active?: boolean
}

export interface IUserForm {
  username?: string
  email?: string
  avatar?: string | ArrayBuffer | null
}
