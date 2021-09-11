import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useEffect, useState } from 'react'
import Dropdown from './Dropdown/Dropdown'
import './Filter.scss'
import { clearFilter, loadFilter } from './Filter.slice'
import { IFilter, IFilterState } from './interface'

const Filter: React.FC<IFilter> = ({ filterType }) => {
  const [showSaleOnly, setShowSaleOnly] =
    useState<IFilterState['showSaleOnly']>(false)
  const dispatch = useAppDispatch()
  const { currentFilter, approvedFilter } = useAppSelector(
    state => state.filter
  )

  useEffect(() => {
    dispatch(loadFilter(filterType))
  }, [filterType])

  const renderDropdown = (): JSX.Element[] =>
    currentFilter.map(dropdown => (
      <Dropdown key={dropdown.id} dropdown={dropdown} />
    ))

  const renderApprovedFilter = (): JSX.Element[] =>
    approvedFilter.map((item, index) => (
      <div key={index} className='approved__item py-1 px-2 me-1 mt-1 size-12'>
        {item}
      </div>
    ))

  const handleSaleonlyBtnClick = (): void => {
    setShowSaleOnly(!showSaleOnly)
  }

  const handleRemoveApprovedFilterClick = () => {
    dispatch(loadFilter(filterType))
    dispatch(clearFilter())
  }

  return (
    <div className='filter'>
      <div className='filter__approved'>
        <div className='approved'>
          <div className='approved__header d-flex align-items-center justify-content-between'>
            <div className='approved__text font-16 font-bold'>
              Bộ lọc được áp dụng
            </div>
            <button
              className='approved__clear text-decoration-underline p-0 pe-2 size-14'
              onClick={handleRemoveApprovedFilterClick}
            >
              Bỏ lọc
            </button>
          </div>
          <div
            className={
              'approved__list d-flex flex-wrap' +
              (approvedFilter.length > 0 ? ' pb-2' : '')
            }
          >
            {renderApprovedFilter()}
          </div>
        </div>
      </div>
      <div className='filter__saleonly'>
        <div className='saleonly d-flex align-items-center justify-content-between'>
          <div className='saleonly__text font-bold'>Khuyến mãi</div>
          <button
            className={
              'saleonly__btn position-relative' +
              (showSaleOnly ? ' saleonly__btn--active' : '')
            }
            onClick={handleSaleonlyBtnClick}
          ></button>
        </div>
      </div>
      {renderDropdown()}
    </div>
  )
}

export default Filter
