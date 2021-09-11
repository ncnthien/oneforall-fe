import { Breadcrumb, Filter, Item, Pagination } from 'components'
import { EPagination } from 'components/enum'
import { ESort } from 'features/Sector/enum'
import { ISector } from 'features/Sector/interface'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import {
  IGetLaptopListApi,
  ISectorItem,
  IShowedSectorItemExtent,
} from './interface'
import './Main.scss'
import { sectorMockData } from './mockData'

const Main: React.FC<ISector> = ({ sectorType }) => {
  const [sectorList, setSectorList] = useState<ISectorItem[]>([])
  const [page, setPage] = useState<number>(1)
  const [showedSectorItemExtent, setShowedSectorItemExtent] =
    useState<IShowedSectorItemExtent>()
  const [sort, setSort] = useState<ESort.DESCEND | ESort.ASCEND>()

  const match = useRouteMatch()

  useEffect(() => {
    // fake api is here to get the filtered lapLopList and showedLaptopExtent  by page
    const getLaptopListApi = (
      page = 1,
      perPage = 24,
      sort?: string
    ): IGetLaptopListApi => {
      const total: number = sectorMockData.length
      const start: number = (page - 1) * perPage
      const end: number = page * perPage > total ? total : page * perPage

      // sort and compare between price and reducedPrice of sector item
      if (sort) {
        if (sort === 'ASCEND') {
          const laptopList = sectorMockData.sort(
            (sectorItem, nextSectorItem) => {
              if (sectorItem.isSale) {
                if (nextSectorItem.isSale) {
                  return sectorItem.reducedPrice - nextSectorItem.reducedPrice
                } else {
                  return sectorItem.reducedPrice - nextSectorItem.price
                }
              } else {
                if (nextSectorItem.isSale) {
                  return sectorItem.price - nextSectorItem.reducedPrice
                } else {
                  return sectorItem.price - nextSectorItem.price
                }
              }
            }
          )

          return {
            sectorList: laptopList.slice(start, end),
            showedSectorItemExtent: { start, end, total },
          }
        }

        if (sort === 'DESCEND') {
          const laptopList = sectorMockData.sort(
            (sectorItem, nextSectorItem) => {
              if (sectorItem.isSale) {
                if (nextSectorItem.isSale) {
                  return nextSectorItem.reducedPrice - sectorItem.reducedPrice
                } else {
                  return nextSectorItem.price - sectorItem.reducedPrice
                }
              } else {
                if (nextSectorItem.isSale) {
                  return nextSectorItem.reducedPrice - sectorItem.price
                } else {
                  return nextSectorItem.price - sectorItem.price
                }
              }
            }
          )

          return {
            sectorList: laptopList.slice(start, end),
            showedSectorItemExtent: { start, end, total },
          }
        }
      }

      return {
        sectorList: sectorMockData.slice(start, end),
        showedSectorItemExtent: { start, end, total },
      }
    }

    const { sectorList, showedSectorItemExtent } = getLaptopListApi(
      page,
      EPagination.PER_PAGE,
      sort
    )

    setShowedSectorItemExtent(showedSectorItemExtent)
    setSectorList(sectorList)
  }, [page, sort])

  const renderLaptopList = (LaptopList: ISectorItem[]): JSX.Element[] => {
    return LaptopList.map((laptop: ISectorItem) => (
      <Item
        key={laptop.id}
        url={laptop.url}
        img={laptop.img}
        name={laptop.name}
        isSale={laptop.isSale}
        price={laptop.price}
        reducedPrice={laptop.reducedPrice}
      />
    ))
  }

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

  const handleSortClick = (sort: ESort.DESCEND | ESort.ASCEND): void => {
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
            {showedSectorItemExtent && (
              <div className='filter__count size-14'>
                <span className='font-bold'>
                  {`${showedSectorItemExtent.start + 1} - ${
                    showedSectorItemExtent.end
                  }`}
                </span>{' '}
                <span>{`trên ${showedSectorItemExtent?.total} sản phẩm`}</span>
              </div>
            )}
            <div className='filter__container position-sticky'>
              <Filter filterType={`${sectorType}`} />
            </div>
          </div>
          <div className='main__sector-content'>
            <div className='sector-content__sort size-14'>
              <span className='font-bold'>Sắp xếp theo:</span>
              <span
                className={sort === ESort.ASCEND ? 'active' : ''}
                onClick={() => handleSortClick(ESort.ASCEND)}
              >
                Giá tăng dần
              </span>
              <span
                className={sort === ESort.DESCEND ? 'active' : ''}
                onClick={() => handleSortClick(ESort.DESCEND)}
              >
                Giá giảm dần
              </span>
            </div>
            <div className='sector-content__list d-flex flex-wrap'>
              {renderLaptopList(sectorList)}
            </div>
            <div className='sector-content__pagination d-flex justify-content-center'>
              <Pagination
                total={showedSectorItemExtent?.total || 0}
                page={page}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
