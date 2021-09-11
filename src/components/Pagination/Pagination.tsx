import { EPagination } from 'components/enum'
import { IPagination } from './interface'
import './Pagination.scss'

const Pagination: React.FC<IPagination> = ({
  total,
  page,
  length = 3,
  setPage,
}) => {
  const totalPages: number = Math.ceil(total / EPagination.PER_PAGE)

  const handleClick = (page: number): void => {
    setPage(page)
    window.scrollTo({ top: 72 })
  }

  const renderPaginationItemList = (): JSX.Element[] => {
    // if page equal 1 then set beforePages to 1, so pagination item has no value 0
    let beforePages: number = page - length
    let afterPages: number = page + length
    const paginationItemList: JSX.Element[] = []

    // if beforePages less than 1 or page equal 1 then set beforePage to 1, so pagination item has no value less than 1
    if (beforePages < 1 || page === 1) {
      beforePages = 1
    }

    // if afterPage greater than totalPages or page equal totalPages then set beforePage to totalPages, so pagination item has no value greater than totalPages
    if (afterPages > totalPages || page === totalPages) {
      afterPages = totalPages
    }

    // if page value greater than 1 then add pagination item with 1 value
    if (page > length + 1) {
      paginationItemList.push(
        <div
          key={`${1}`}
          className='pagination__item position-relative d-flex justify-content-center align-items-center'
          onClick={() => handleClick(1)}
        >
          1
        </div>
      )

      // if page value greater than 3 then add pagination item with ... value
      if (page > length + 2) {
        paginationItemList.push(
          <div
            key='dots'
            className='pagination__item dots position-relative d-flex justify-content-center align-items-center'
          >
            ...
          </div>
        )
      }
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
      paginationItemList.push(
        <div
          key={`${pageLength}`}
          className={`pagination__item ${
            page === pageLength ? 'active' : ''
          } position-relative d-flex justify-content-center align-items-center`}
          onClick={() => handleClick(pageLength)}
        >
          {pageLength}
        </div>
      )
    }

    if (page < totalPages - length) {
      if (page < totalPages - length - 1) {
        // if page value is less than totalPages by -2 then show the last pagination item ...
        paginationItemList.push(
          <div
            key='dots'
            className='pagination__item dots position-relative d-flex justify-content-center align-items-center'
          >
            ...
          </div>
        )
      }

      // if page value is less than totalPages by -1 then show the last pagination item
      paginationItemList.push(
        <div
          key={`${totalPages}`}
          className='pagination__item position-relative d-flex justify-content-center align-items-center'
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </div>
      )
    }

    return paginationItemList
  }

  return (
    <div className='pagination font-bold'>
      {/*if page value equal 1 then disable prev*/}
      <div
        className={`pagination__item prev ${
          page === 1 ? 'disable' : ''
        } position-relative d-flex justify-content-center align-items-center`}
        onClick={() => handleClick(page - 1)}
      />
      {renderPaginationItemList()}

      {/*if page value equal totalPages then disable next*/}
      <div
        className={`pagination__item next ${
          page === totalPages ? 'disable' : ''
        } position-relative d-flex justify-content-center align-items-center`}
        onClick={() => handleClick(page + 1)}
      />
    </div>
  )
}

export default Pagination
