import { useState } from 'react'
import './Dropdown.scss'
import { IDropdown, IDropdownState } from './interface'
import FilterItem from './FilterItem/FilterItem'

const Dropdown: React.FC<IDropdown> = ({
  dropdown: { id, name, items },
  handleFilterItemClick,
}) => {
  const [isExpanded, setIsExpanded] =
    useState<IDropdownState['listExpansion']>(false)

  const handleDropdownHeaderClick = (): void => {
    setIsExpanded(!isExpanded)
  }

  const renderList = (): JSX.Element[] => {
    return items.map((item: string, index) => (
      <FilterItem
        key={index}
        item={item}
        dropdownId={id}
        handleFilterItemClick={handleFilterItemClick}
      />
    ))
  }

  return (
    <div className='dropdown'>
      <div className='dropdown__container'>
        <div
          className='dropdown__header d-flex align-items-center justify-content-between py-2'
          onClick={handleDropdownHeaderClick}
        >
          <div className='header__text font-bold size-16'>{name}</div>
          <div className='header__icon font-bold size-16 pe-2'>
            {isExpanded ? '-' : '+'}
          </div>
        </div>
        <ul
          className={`dropdown__list overflow-hidden mb-0 ps-0${
            isExpanded ? ' dropdown__list--expanded' : ''
          }`}
        >
          {renderList()}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
