import { useAppDispatch } from 'app/hooks'
import checkedImg from 'assets/images/checked.png'
import { toggleFilter, toggleItem } from 'components/Filter/Filter.slice'
import { useEffect, useState } from 'react'
import './FilterItem.scss'
import { IFilterItem } from './interface'

const FilterItem: React.FC<IFilterItem> = ({ itemName, itemChecked }) => {
  const dispatch = useAppDispatch()
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(itemChecked)
  }, [itemChecked])

  const handleItemClick = () => {
    dispatch(toggleItem(itemName))
    dispatch(toggleFilter(itemName))
  }

  return (
    <li className='dropdown__item d-flex pb-2' onClick={handleItemClick}>
      <div
        className={
          'item__fakecheck d-flex align-items-center justify-content-center' +
          (checked ? ' item__fakecheck--active' : '')
        }
      >
        <img src={checkedImg} alt='' className='item__checked w-75' />
      </div>
      <label className='item__text ms-2 size-14'>{itemName}</label>
    </li>
  )
}

export default FilterItem
