import './FilterItem.scss'
import { IFilterItem } from './interface'
import checked from 'assets/images/checked.png'

const FilterItem: React.FC<IFilterItem> = ({
  item,
  dropdownId,
  handleFilterItemClick,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterItemClick(dropdownId, item, event.target.checked)
  }

  return (
    <li className='dropdown__item d-flex position-relative pb-2'>
      <input
        type='checkbox'
        id={item}
        className='item__checkbox me-3 opacity-0'
        onChange={handleInputChange}
      />
      <div className='item__fakecheck d-flex align-items-center justify-content-center position-absolute'>
        <img src={checked} alt='' className='item__checked w-75' />
      </div>
      <label htmlFor={item} className='item__text size-14 position-relative'>
        {item}
      </label>
    </li>
  )
}

export default FilterItem
