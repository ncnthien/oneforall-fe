import { IItem } from 'components/Item/interface'

export interface Item extends IItem {
  id: string
}

export interface IItemList {
  itemList: Item[]
}
