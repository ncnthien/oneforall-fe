import { brandApi, BrandProductData } from 'api/brandApi'
import {
  Breadcrumb,
  Filter,
  Pagination,
  SectorItemExtent,
  SectorList,
  SectorSort,
} from 'components'
import { EPagination } from 'components/enum'
import { IItem } from 'components/Item/interface'
import { ISectorItemExtent } from 'components/SectorItemExtent/interface'
import { ISectorSort } from 'components/SectorSort/interface'
import { BrandBanner } from 'features/Brand/components'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'
import { IBrandMain } from './interface'
import './Main.scss'

const Main: React.FC<IBrandMain> = ({ brand, brandType }) => {
  const [brandFilter, setBrandFilter] =
    useState<IBrandMain['brandType']>('laptop')
  const [sectorList, setSectorList] = useState<IItem[]>([])
  const [page, setPage] = useState<number>(1)
  const [sectorItemExtent, setSectorItemExtent] = useState<ISectorItemExtent>()
  const [sort, setSort] = useState<ISectorSort['sort']>()
  const [total, setTotal] = useState<BrandProductData['total']>({
    laptop: 0,
    pc: 0,
    accessory: 0,
  })

  const match = useRouteMatch()
  const location = useLocation()

  useEffect(() => {
    const fetchProductApi = async () => {
      try {
        if (brand.value) {
          const {
            data: { productList, productDisplay, total },
          } = await brandApi.getProductListOfBrand(
            {
              brand: brand.value,
              type: brandFilter,
              sort,
              ...queryString.parse(location.search),
              limit: EPagination.PER_PAGE,
            },
            brand._id
          )

          setSectorList(productList)
          setSectorItemExtent(productDisplay)
          setTotal(total)
        }
      } catch (err) {
        return
      }
    }

    fetchProductApi()
  }, [brandFilter, page, sort, location.search])

  const handleSortClick: ISectorSort['handleSortClick'] = sort => {
    setSort(sort)
    window.scrollTo({ top: 72 })
  }

  return (
    <div className='brand'>
      <div className='container'>
        <div className='brand__breadcrumb'>
          <Breadcrumb url={match.url} name={`${brand.name}`} />
        </div>
        <BrandBanner
          brand={brand}
          brandFilter={brandFilter}
          total={total}
          setBrandFilter={setBrandFilter}
        />
        <div className='brand__main d-flex'>
          <div className='main__filter'>
            {sectorItemExtent && (
              <SectorItemExtent
                start={sectorItemExtent.start}
                end={sectorItemExtent.end}
                total={sectorItemExtent.total}
              />
            )}
            <div className='filter__container position-sticky'>
              <Filter filterType={`${brandType}`} />
            </div>
          </div>
          <div className='main__brand-content'>
            <div className='brand-content__sort'>
              <SectorSort sort={sort} handleSortClick={handleSortClick} />
            </div>
            {<SectorList sectorList={sectorList} />}
            {sectorList.length > 0 && (
              <div className='brand-content__pagination d-flex justify-content-center'>
                <Pagination
                  total={sectorItemExtent?.total || 0}
                  page={page}
                  setPage={setPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
