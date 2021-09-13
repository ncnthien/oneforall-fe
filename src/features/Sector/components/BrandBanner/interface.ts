import { IBrand, ISector } from 'features/Sector/interface'

export interface IBrandBanner {
  brand: IBrand
  brandFilter: ISector['sectorType']
  setBrandFilter: React.Dispatch<React.SetStateAction<ISector['sectorType']>>
}
