import './MainItem.scss'
import './interface'
import { IMainItem } from './interface'
import { Link } from 'react-router-dom'
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from 'features/Cart/Cart.slice'
import { useAppDispatch } from 'app/hooks'

const MainItem: React.FC<IMainItem> = ({
  id,
  url,
  name,
  img,
  price,
  isSale,
  reducedPrice,
  quantity,
}) => {
  const dispatch = useAppDispatch()

  const onDecreaseClick = () => {
    dispatch(decreaseQuantity(id))
  }

  const onIncreaseClick = () => {
    dispatch(increaseQuantity(id))
  }

  const onRemoveClick = () => {
    dispatch(removeItem(id))
  }

  return (
    <div className='mainitem'>
      <div className='mainitem__container d-flex p-2'>
        <div className='mainitem__left p-2'>
          <Link to={url} className='mid__link'>
            <img src={img} alt={name} className='w-100' />
          </Link>
        </div>
        <div className='mainitem__mid d-flex flex-column align-items-start p-2'>
          <Link
            to={url}
            className='mid__name text-decoration-none text-reset d-block mb-2 font-bold color-black size-20'
          >
            {name}
          </Link>
          <div className='mid__quantity-container mb-3 d-flex'>
            <button className='mid__btn size-14' onClick={onDecreaseClick}>
              -
            </button>
            <span className='mid__quantity d-inline-block mx-2 size-14'>
              {quantity}
            </span>
            <button className='mid__btn size-14' onClick={onIncreaseClick}>
              +
            </button>
          </div>
          <button className='mid__remove-btn size-14' onClick={onRemoveClick}>
            Xóa
          </button>
        </div>
        <div className='mainitem__right p-2 text-end'>
          <p className='right__price font-bold mb-2 mt-1'>
            {isSale ? reducedPrice?.toLocaleString() : price.toLocaleString()}
            {' ₫'}
          </p>
          {isSale && (
            <p className='right__linethrough-price text-decoration-line-through size-14'>
              {price.toLocaleString() + ' ₫'}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MainItem
