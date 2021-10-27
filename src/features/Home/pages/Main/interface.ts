import { IItem } from 'components/Item/interface'
import { Event } from 'features/Home/components/SlideBanner/interface'
export interface HomeBrand {
  _id: string
  logo: string
  value: string
}

export interface Home {
  eventList: Event[]
  saleLaptopList: IItem[]
  laptopList: IItem[]
  pcList: IItem[]
  accessoryList: IItem[]
  laptopBrandList: HomeBrand[]
  pcBrandList: HomeBrand[]
}
