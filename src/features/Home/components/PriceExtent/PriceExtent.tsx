import { useAppDispatch } from 'app/hooks'
import { priceDropDown } from 'components/Filter/Filter.data'
import { Link } from 'react-router-dom'
import { IExtent } from './interface'
import './PriceExtent.scss'
import { toggleItem } from 'components/Filter/Filter.slice'

const PriceExtent: React.FC<IExtent> = ({ type }) => {
  const dispatch = useAppDispatch()
  const renderList = (): JSX.Element[] => {
    return priceDropDown.items.map((item, index) => (
      <Link
        key={index}
        to={`/${type}`}
        onClick={() => {
          dispatch(
            toggleItem({
              dropdownName: priceDropDown.name,
              itemName: item.name,
            })
          )
        }}
        className='extent__item d-inline-block text-decoration-none me-2 font-bold size-14'
      >
        {item.name}
      </Link>
    ))
  }

  return (
    <div className='extent d-flex align-items-center mt-3'>
      <div className='extent__text font-bold'>Khoảng giá</div>
      <div className='extent__list'>{renderList()}</div>
    </div>
  )
}

export default PriceExtent
