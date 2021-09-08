import { useCallback, useEffect, useMemo, useState } from 'react'
import Dropdown from './Dropdown/Dropdown'
import './Filter.scss'
import {
  accessoryFilter,
  IFilter,
  IFilterState,
  initialApprovedFilter,
  laptopFilter,
  pcFilter,
} from './interface'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const approvedFilterObjectToArray = (approvedFilter: any): string[] => {
  console.log('convert to array')
  const approvedFilterArray: string[] = []
  for (const dropdownKey in approvedFilter) {
    for (const item of approvedFilter[dropdownKey]) {
      approvedFilterArray.push(item)
    }
  }
  return approvedFilterArray
}

const generateDropdownList = (
  filterType: 'laptop' | 'pc' | 'accessory'
): IFilterState['filter'] => {
  switch (filterType) {
    case 'laptop':
      return laptopFilter
    case 'pc':
      return pcFilter
    case 'accessory':
      return accessoryFilter
  }
}

const Filter: React.FC<IFilter> = ({ filterType }) => {
  const [approvedFilter, setApprovedFilter] = useState<
    IFilterState['approvedFilter']
  >(initialApprovedFilter)

  const [showSaleOnly, setShowSaleOnly] =
    useState<IFilterState['showSaleOnly']>(false)

  const approvedFilterList = useMemo<string[]>(() => {
    return approvedFilterObjectToArray(approvedFilter)
  }, [approvedFilter])

  const dropdownList = useMemo<IFilterState['filter']>(
    () => generateDropdownList(filterType),
    [filterType]
  )

  const handleFilterItemClick = (
    dropdownId: string,
    item: string,
    checked: boolean
  ): void => {
    if (checked) {
      const newApprovedFilter = JSON.parse(JSON.stringify(approvedFilter))
      newApprovedFilter[dropdownId].push(item)
      setApprovedFilter(newApprovedFilter)
      return
    }

    const newApprovedFilter = JSON.parse(JSON.stringify(approvedFilter))
    newApprovedFilter[dropdownId] = newApprovedFilter[dropdownId].filter(
      (approvedFilterItem: string) => approvedFilterItem != item
    )
    setApprovedFilter(newApprovedFilter)
  }

  const renderDropdown = useCallback((): JSX.Element[] => {
    console.log(dropdownList)
    return dropdownList.map(dropdown => (
      <Dropdown
        key={dropdown.id}
        dropdown={dropdown}
        handleFilterItemClick={handleFilterItemClick}
      />
    ))
  }, [dropdownList, handleFilterItemClick])

  const renderApprovedFilter = (): JSX.Element[] => {
    return approvedFilterList.map((item, index) => (
      <div key={index} className='approved__item px-2 py-1 me-1 mb-1 size-12'>
        {item}
      </div>
    ))
  }

  return (
    <div className='filter'>
      <div className='filter__approved'>
        <div className='approved'>
          <div className='approved__header d-flex align-items-center justify-content-between py-2'>
            <div className='approved__text font-16 font-bold'>
              Bộ lọc được áp dụng
            </div>
            <button className='approved__clear text-decoration-underline p-0 pe-2 size-14'>
              Bỏ lọc
            </button>
          </div>
          <div
            className={
              'approved__list d-flex flex-wrap' +
              (approvedFilterList.length > 0 && ' pb-2')
            }
          >
            {renderApprovedFilter()}
          </div>
        </div>
      </div>
      <div className='filter__saleonly'></div>
      {renderDropdown()}
    </div>
  )
}

export default Filter
