interface DeliveryAddress {
  address: string
  ward: string
  district: string
  city: string
}

export interface FetchedProfile {
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
