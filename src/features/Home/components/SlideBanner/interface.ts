export type Event = {
  _id: string
  title: string
  banner: string
  url: string
  isActive: boolean
}

export interface ISlideBanner {
  eventList: Event[]
}
