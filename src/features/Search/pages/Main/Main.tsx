import {
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
import { getSectorListApi } from 'features/Sector/pages/Main/mockData'
import queryString from 'query-string'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Main.scss'

const Main: React.FC = () => {
  const [sectorList, setSectorList] = useState<IItem[]>([])
  const [page, setPage] = useState<number>(1)
  const [sectorItemExtent, setSectorItemExtent] = useState<ISectorItemExtent>()
  const [sort, setSort] = useState<ISectorSort['sort']>()

  const location = useLocation()
  // get query string from url
  const { q: query } = queryString.parse(location.search)

  useEffect(() => {
    // Get sector list from api here
    const { sectorList, sectorItemExtent } = getSectorListApi(
      page,
      EPagination.PER_PAGE,
      sort
    )

    setSectorItemExtent(sectorItemExtent)
    setSectorList(sectorList)
  }, [page, sort, query])

  const handleSortClick: ISectorSort['handleSortClick'] = sort => {
    setSort(sort)
    window.scrollTo({ top: 72 })
  }

  return (
    <div className='search'>
      <div className='container'>
        <div className='search__header'>
          <div className='font-bold'>
            <span>
              {sectorItemExtent?.total} kết quả tìm thấy cho: {query}
            </span>
          </div>
        </div>
        <div className='search__main d-flex'>
          <div className='main__filter'>
            {sectorItemExtent && (
              <SectorItemExtent
                start={sectorItemExtent.start}
                end={sectorItemExtent.end}
                total={sectorItemExtent.total}
              />
            )}
            <div className='filter__container position-sticky'>
              <Filter filterType='laptop' />
            </div>
          </div>
          <div className='main__search-content'>
            <div className='search-content__sort'>
              <SectorSort sort={sort} handleSortClick={handleSortClick} />
            </div>
            {<SectorList sectorList={sectorList} />}
            {sectorList.length > 0 && (
              <div className='search-content__pagination d-flex justify-content-center'>
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
