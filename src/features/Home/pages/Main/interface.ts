import { IItem } from 'components/Item/interface'
import { Event } from 'features/Home/components/SlideBanner/interface'

export interface Home {
  eventList: Event[]
  saleLaptopList: IItem[]
  laptopList: IItem[]
  pcList: IItem[]
  accessoryList: IItem[]
}
