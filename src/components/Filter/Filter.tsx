import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useEffect } from 'react'
import Dropdown from './Dropdown/Dropdown'
import './Filter.scss'
import { clearFilter, loadFilter, toggleIsSale } from './Filter.slice'
import { IFilter } from './interface'

const Filter: React.FC<IFilter> = ({ filterType }) => {
  const dispatch = useAppDispatch()
  const { currentFilter, approvedFilter, isSale } = useAppSelector(
    state => state.filter
  )

  useEffect(() => {
    dispatch(loadFilter(filterType))
  }, [filterType])

  const renderDropdown = (): JSX.Element[] =>
    currentFilter.map(dropdown => (
      <Dropdown key={dropdown.id} dropdown={dropdown} />
    ))

  const renderApprovedFilter = (): JSX.Element[] => {
    const approvedItems = currentFilter.map(dropdown => {
      for (const item of dropdown.items) {
        if (item.checked) {
          return item.name
        }
      }
    })

    const approvedItemStrings = approvedItems.filter(item => item)

    return approvedItemStrings.map((item, index) => (
      <div key={index} className='approved__item py-1 px-2 me-1 mt-1 size-12'>
        {item}
      </div>
    ))
  }

  const handleSaleonlyBtnClick = (): void => {
    dispatch(toggleIsSale())
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
              (Object.keys(approvedFilter).length > 0 ? ' pb-2' : '')
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
              (isSale ? ' saleonly__btn--active' : '')
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
