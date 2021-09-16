import { IBrandMain } from 'features/Brand/pages/Main/interface'

export interface IBrandBanner {
  brand: IBrandMain['brand']
  brandFilter: IBrandMain['brandType']
  setBrandFilter: React.Dispatch<React.SetStateAction<IBrandMain['brandType']>>
}
