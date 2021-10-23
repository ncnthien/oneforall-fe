export interface DeliveryAddress {
  address: string
  ward: string
  district: string
  city: string
}

export interface FetchedProfile {
  _id: string
  email: string
  username: string
  avatar: string
  phone?: string
  deliveryAddress?: DeliveryAddress
  disable: boolean
}

export interface ProfileState {
  profile: FetchedProfile | null
}

export interface ChangePasswordBody {
  oldPassword: string
  newPassword: string
}

export interface ChangePasswordForm extends ChangePasswordBody {
  reNewPassword: string
}
