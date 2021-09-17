import { useAppSelector } from 'app/hooks'
import { CartIcon, NotificationIcon, UserIcon } from 'assets/images/svgs'
import { EAuthModalTab } from 'components/enum'
import { getCost, getQuantity } from 'features/Cart/Cart.helper'
import { Link } from 'react-router-dom'
import './HeaderAction.scss'
import { IHeaderAction } from './interface'

const HeaderAction: React.FC<IHeaderAction> = ({
  setShowAuthModal,
  setActiveAuthModalTab,
}) => {
  const { cart } = useAppSelector(state => state.cart)
  const quantity = getQuantity(cart)
  const cost = getCost(cart)

  const renderCartList = (): JSX.Element[] => {
    return cart.map(item => (
      <li
        key={item.id}
        className='filled-cart__item d-flex align-items-center mb-2'
      >
        <img src={item.img} alt='' className='filled-cart__img' />
        <div className='filled-cart__item-content ms-2'>
          <Link
            to={item.url}
            className='filled-cart__item-name text-reset text-decoration-none color-black font-bold size-14'
          >
            {item.name}
          </Link>
          <p className='filled-cart__item-price size-14 mb-0'>
            <span className='color-red font-bold'>
              {item.isSale
                ? item.reducedPrice?.toLocaleString()
                : item.price.toLocaleString()}
            </span>
            {' x '}
            <span>{item.quantity}</span>
          </p>
        </div>
      </li>
    ))
  }

  return (
    <div className='header-action d-flex justify-content-end align-items-center flex-grow-1 h-100 '>
      <div className='header-action__item position-relative'>
        <Link
          to='/notification'
          className='d-flex justify-content-center align-items-center h-100'
        >
          <NotificationIcon />
        </Link>
      </div>
      <div className='header-action__item position-relative'>
        <Link
          to='/cart'
          className='d-flex justify-content-center align-items-center h-100 position-relative'
        >
          <CartIcon />
          {cart.length > 0 && (
            <div className='header-action__cart-length position-absolute text-center font-bold color-black size-14'>
              {quantity}
            </div>
          )}
        </Link>
        <div className='header-action__dropdown header-action__dropdown--cart position-absolute'>
          <div className='header-action__dropdown-container'>
            {!(cart.length > 0) ? (
              <div className='empty-cart text-center font-bold size-14'>
                Bạn chưa có sản phẩm nào trong giỏ hàng
              </div>
            ) : (
              <div className='filled-cart p-3'>
                <div className='filled-cart__header mb-3'>
                  <span className='font-bold'>{quantity} sản phẩm</span>{' '}
                  {'trong giỏ hàng'}
                </div>
                <ul className='filled-cart__list ps-0 mb-0'>
                  {renderCartList()}
                </ul>
                <Link
                  to='/cart'
                  className='filled-cart__btn d-block text-center text-decoration-none py-2 mt-3 size-14 font-bold'
                >{`Giỏ hàng: ${cost.toLocaleString()} ₫`}</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='header-action__item position-relative d-flex justify-content-center align-items-center'>
        <UserIcon />
        <div className='header-action__dropdown header-action__dropdown--account position-absolute'>
          <div className='header-action__dropdown-container'>
            <div className='authentication font-bold size-14'>
              <div
                className='authentication__btn'
                onClick={() => {
                  setShowAuthModal(true)
                  setActiveAuthModalTab(EAuthModalTab.LOGIN)
                }}
              >
                Đăng nhập
              </div>
              <div
                className='authentication__btn'
                onClick={() => {
                  setShowAuthModal(true)
                  setActiveAuthModalTab(EAuthModalTab.REGISTER)
                }}
              >
                Tạo tài khoản
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderAction
