import { BrandProductData } from 'api/brandApi'
import { IBrandMain } from 'features/Brand/pages/Main/interface'

export interface IBrandBanner {
  brand: IBrandMain['brand']
  brandFilter: IBrandMain['brandType']
  total: BrandProductData['total']
  setBrandFilter: React.Dispatch<React.SetStateAction<IBrandMain['brandType']>>
}
