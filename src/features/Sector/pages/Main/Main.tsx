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
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import { ISector } from './interface'
import './Main.scss'
import { getSectorListApi } from './mockData'

const Main: React.FC<ISector> = ({ sectorType }) => {
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

  const getInfoSector = (
    sectorType: ISector['sectorType']
  ): { title: string; breadcrumb: string } => {
    if (sectorType === 'laptop') {
      return { title: 'Máy tính xách tay', breadcrumb: 'Laptop' }
    }

    if (sectorType === 'pc') {
      return { title: 'PC', breadcrumb: 'PC' }
    }

    return { title: 'Phụ kiện', breadcrumb: 'Phụ kiện' }
  }

  const handleSortClick: ISectorSort['handleSortClick'] = sort => {
    setSort(sort)
    window.scrollTo({ top: 72 })
  }

  return (
    <div className='sector'>
      <div className='container'>
        <div className='sector__breadcrumb'>
          <Breadcrumb
            url={match.url}
            name={`${getInfoSector(sectorType).breadcrumb}`}
          />
        </div>
        <div className='sector__title font-bold size-32'>
          {getInfoSector(sectorType).title}
        </div>
        <div className='sector__main d-flex'>
          <div className='main__filter'>
            {sectorItemExtent && (
              <SectorItemExtent
                start={sectorList.length ? sectorItemExtent.start + 1 : 0}
                end={sectorItemExtent.end}
                total={sectorItemExtent.total}
              />
            )}
            <div className='filter__container position-sticky'>
              <Filter filterType={`${sectorType}`} />
            </div>
          </div>
          <div className='main__sector-content'>
            <div className='sector-content__sort'>
              <SectorSort sort={sort} handleSortClick={handleSortClick} />
            </div>
            {<SectorList sectorList={sectorList} />}
            {sectorList.length > 0 && (
              <div className='sector-content__pagination d-flex justify-content-center'>
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
