import { Link } from 'react-router-dom'
import { useAppDispatch } from 'app/hooks'
import { IItem } from './interface'
import './Item.scss'
import { add } from 'features/Cart/Cart.slice'

const Item: React.FC<IItem> = ({
  _id,
  images,
  name,
  price,
  isSale,
  reducedPrice,
  className,
}) => {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    const item = {
      id: _id,
      url: `/${name}`,
      img: images[0],
      name,
      price,
      isSale,
      reducedPrice,
    }
    dispatch(add(item))
  }

  return (
    <div
      className={
        'item__wrapper position-relative ' + (className ? className : '')
      }
    >
      <div className='item p-3'>
        <Link
          to={`/${name}`}
          className='item__img-link d-block d-flex align-items-center justify-content-center'
        >
          <img src={images[0]} alt={name} className='item__img w-100' />
        </Link>
        <Link to={`/${name}`} className='item__name-link d-block mt-2'>
          <h6 className='item__name mb-0 size-16 color-black font-bold'>
            {name}
          </h6>
        </Link>
        <div className='item__bottom mt-2'>
          <p className='item__price--primary mb-0 size-18 color-red font-bold'>
            {isSale ? reducedPrice?.toLocaleString() : price.toLocaleString()} ₫
          </p>
          {isSale && (
            <p className='item__price--line-through mb-0 size-14 text-decoration-line-through'>
              {price.toLocaleString() + ' ₫'}
            </p>
          )}
        </div>
        <button
          className='item__btn mt-3 d-block mx-auto px-4 py-2 size-14'
          onClick={handleClick}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  )
}

export default Item
