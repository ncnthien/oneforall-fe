import { useAppSelector } from 'app/hooks'
import { Breadcrumb } from 'components'
import { getCost, getQuantity } from 'features/Cart/Cart.helper'
import MainItem from 'features/Cart/components/MainItem/MainItem'
import { Link } from 'react-router-dom'
import './Main.scss'

const Main: React.FC = () => {
  const { cart } = useAppSelector(state => state.cart)
  const cost = getCost(cart)
  const quantity = getQuantity(cart)

  const renderCartList = (): JSX.Element[] => {
    return cart.map(item => (
      <MainItem
        key={item.id}
        id={item.id}
        url={item.url}
        name={item.name}
        img={item.img}
        price={item.price}
        isSale={item.isSale}
        reducedPrice={item.reducedPrice}
        quantity={item.quantity}
      />
    ))
  }

  return (
    <div className='cart container'>
      <Breadcrumb url='/cart' name='Giỏ hàng' />
      <h1 className='cart__title font-bold size-32 mt-4 mb-3'>
        Giỏ hàng ({quantity})
      </h1>
      <div className='cart__main d-flex align-items-start mb-4'>
        <ul className='cart__list ps-0 mb-0 flex-grow-1'>{renderCartList()}</ul>
        <div className='cart__calculation'>
          <div className='calculation__temporary d-flex justify-content-between align-items-center px-3 py-3'>
            <span className='size-14 font-bold'>Tạm tính:</span>
            <span className='size-16'>{cost.toLocaleString()} ₫</span>
          </div>
          <div className='calculation__genuine d-flex justify-content-between align-items-center px-3 py-3'>
            <span className='size-14 font-bold'>Thành tiền:</span>
            <span className='size-18 font-bold color-red'>
              {cost.toLocaleString()} ₫
            </span>
          </div>
          <div className='calculation__footer px-3 py-3'>
            <Link
              to={`cart/pay`}
              className='calculation__btn w-100 d-block text-center text-decoration-none font-bold size-14 color-white'
            >
              Tiến hành đặt hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
