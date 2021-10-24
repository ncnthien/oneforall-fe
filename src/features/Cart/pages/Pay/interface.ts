export interface Pay {
  username: string
  phone?: string
  deliveryAddress?: {
    city?: string
    district?: string
    ward?: string
    address?: string
  }
}
