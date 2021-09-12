import { IItem } from 'components/Item/interface'
import { ISectorItemExtent } from 'features/Sector/components/SectorItemExtent/interface'
import { IBrand } from 'features/Sector/interface'

export interface ISectorMain {
  sectorType: 'laptop' | 'pc' | 'accessory'
  brand?: IBrand
}

export interface ISectorItem extends IItem {
  id: string
}

export interface IGetSectorListApi {
  sectorList: ISectorItem[]
  sectorItemExtent: ISectorItemExtent
}
