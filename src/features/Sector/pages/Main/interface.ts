import { IItem } from 'components/Item/interface'

export interface ISectorItem extends IItem {
  id: string
}

export interface IShowedSectorItemExtent {
  start: number
  end: number
  total: number
}

export interface IGetSectorListApi {
  sectorList: ISectorItem[]
  showedSectorItemExtent: IShowedSectorItemExtent
}
