import { useState } from 'react'
import './Dropdown.scss'
import FilterItem from './FilterItem/FilterItem'
import { IDropdown, IDropdownState } from './interface'

const Dropdown: React.FC<IDropdown> = ({ dropdown: { name, items } }) => {
  const [isExpanded, setIsExpanded] =
    useState<IDropdownState['listExpansion']>(false)

  const handleDropdownHeaderClick = (): void => {
    setIsExpanded(!isExpanded)
  }

  const renderList = (): JSX.Element[] => {
    return items.map((item, index) => (
      <FilterItem
        key={index}
        itemName={item.name}
        itemChecked={item.checked}
        dropdownName={name}
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
          <div className='header__icon font-bold size-20 pe-2'>
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
