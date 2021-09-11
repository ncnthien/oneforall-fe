import notFoundSectorItem from 'assets/images/notFoundSectorItem.png'
import { Breadcrumb, Filter, Item, Pagination } from 'components'
import { EPagination } from 'components/enum'
import { ESort } from 'features/Sector/enum'
import { ISector } from 'features/Sector/interface'
import { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import {
  IGetSectorListApi,
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
    // fake api is here to get the filtered lapLopList and showedSectorItemExtent  by page
    const getSectorListApi = (
      page = 1,
      perPage = 24,
      sort?: string
    ): IGetSectorListApi => {
      const total: number = sectorMockData.length
      const start: number = (page - 1) * perPage
      const end: number = page * perPage > total ? total : page * perPage

      // sort and compare between price and reducedPrice of sector item
      if (sort) {
        if (sort === 'ASCEND') {
          const sectorList = sectorMockData.sort(
            (sectorItem, nextSectorItem) => {
              if (sectorItem.isSale && sectorItem.reducedPrice) {
                if (nextSectorItem.isSale && nextSectorItem.reducedPrice) {
                  return sectorItem.reducedPrice - nextSectorItem.reducedPrice
                } else {
                  return sectorItem.reducedPrice - nextSectorItem.price
                }
              } else {
                if (nextSectorItem.isSale && nextSectorItem.reducedPrice) {
                  return sectorItem.price - nextSectorItem.reducedPrice
                } else {
                  return sectorItem.price - nextSectorItem.price
                }
              }
            }
          )

          return {
            sectorList: sectorList.slice(start, end),
            showedSectorItemExtent: { start, end, total },
          }
        }

        if (sort === 'DESCEND') {
          const sectorList = sectorMockData.sort(
            (sectorItem, nextSectorItem) => {
              if (sectorItem.isSale && sectorItem.reducedPrice) {
                if (nextSectorItem.isSale && nextSectorItem.reducedPrice) {
                  return nextSectorItem.reducedPrice - sectorItem.reducedPrice
                } else {
                  return nextSectorItem.price - sectorItem.reducedPrice
                }
              } else {
                if (nextSectorItem.isSale && nextSectorItem.reducedPrice) {
                  return nextSectorItem.reducedPrice - sectorItem.price
                } else {
                  return nextSectorItem.price - sectorItem.price
                }
              }
            }
          )

          return {
            sectorList: sectorList.slice(start, end),
            showedSectorItemExtent: { start, end, total },
          }
        }
      }

      return {
        sectorList: sectorMockData.slice(start, end),
        showedSectorItemExtent: { start, end, total },
      }
    }

    const { sectorList, showedSectorItemExtent } = getSectorListApi(
      page,
      EPagination.PER_PAGE,
      sort
    )

    setShowedSectorItemExtent(showedSectorItemExtent)
    setSectorList(sectorList)
  }, [page, sort])

  const renderSectorList = (sectorList: ISectorItem[]): JSX.Element[] => {
    return sectorList.map((sectorItem: ISectorItem) => (
      <Item
        key={sectorItem.id}
        url={sectorItem.url}
        img={sectorItem.img}
        name={sectorItem.name}
        isSale={sectorItem.isSale}
        price={sectorItem.price}
        reducedPrice={sectorItem.reducedPrice}
      />
    ))
  }

  const renderNotFoundItem = (
    <div className='d-flex flex-column align-items-center w-100 p-4'>
      <div>
        <img src={notFoundSectorItem} alt='' />
      </div>
      <h4 className='font-bold size-20'>Không tìm thấy sản phẩm</h4>
    </div>
  )

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
                  {`${
                    sectorList.length ? showedSectorItemExtent.start + 1 : 0
                  } - ${showedSectorItemExtent.end}`}
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
              {renderSectorList(sectorList).length > 0
                ? renderSectorList(sectorList)
                : renderNotFoundItem}
            </div>
            {renderSectorList(sectorList).length > 0 ? (
              <div className='sector-content__pagination d-flex justify-content-center'>
                <Pagination
                  total={showedSectorItemExtent?.total || 0}
                  page={page}
                  setPage={setPage}
                />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
