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
import { getSectorListApi } from 'features/Sector/pages/Main/mockData'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { IBrandMain } from './interface'
import './Main.scss'

const Main: React.FC<IBrandMain> = ({ brand, brandType }) => {
  const [brandFilter, setBrandFilter] =
    useState<IBrandMain['brandType']>('laptop')
  const [sectorList, setSectorList] = useState<IItem[]>([])
  const [page, setPage] = useState<number>(1)
  const [sectorItemExtent, setSectorItemExtent] = useState<ISectorItemExtent>()
  const [sort, setSort] = useState<ISectorSort['sort']>()

  const match = useRouteMatch()

  useEffect(() => {
    // Get sector list from api here
    const { sectorList, sectorItemExtent } = getSectorListApi(
      page,
      EPagination.PER_PAGE,
      sort
    )

    setSectorItemExtent(sectorItemExtent)
    setSectorList(sectorList)
  }, [page, sort])

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
