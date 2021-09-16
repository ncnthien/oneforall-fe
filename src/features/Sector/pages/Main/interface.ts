import { IItem } from 'components/Item/interface'
import { ISectorItemExtent } from 'components/SectorItemExtent/interface'

export interface ISector {
  sectorType: 'laptop' | 'pc' | 'accessory'
}

export interface IGetSectorListApi {
  sectorList: IItem[]
  sectorItemExtent: ISectorItemExtent
}
