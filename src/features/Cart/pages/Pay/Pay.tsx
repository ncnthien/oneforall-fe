import { useAppSelector } from 'app/hooks'
import { Breadcrumb } from 'components'
import { getCost, getQuantity } from 'features/Cart/Cart.helper'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OnlinePayModal from './OnlinePayModal/OnlinePayModal'
import './Pay.scss'
import PayForm from './PayForm/PayForm'
import SubmittedModal from './SubmittedModal/SubmittedModal'

const Pay: React.FC = () => {
  const [showSubmittedModal, setShowSubmittedModal] = useState<boolean>(false)
  const [showOnlinePayModal, setShowOnlinePayModal] = useState<boolean>(false)

  const { cart } = useAppSelector(state => state.cart)
  const cost = getCost(cart)
  const quantity = getQuantity(cart)

  const renderPayList = (): JSX.Element[] => {
    return cart.map(item => (
      <div
        key={item.id}
        className='pay-list__item font-bold d-flex justify-content-between align-items-center px-3 py-3'
      >
        <div className='item__content'>
          <span className='item__quantity'>{item.quantity} x </span>
          <span className='item__name'>{item.name}</span>
        </div>
        <div className='item__price'>
          {`${
            item.isSale && item.reducedPrice
              ? item.reducedPrice.toLocaleString()
              : item.price.toLocaleString()
          } ₫`}
        </div>
      </div>
    ))
  }

  return (
    <div className='pay container'>
      <SubmittedModal
        show={showSubmittedModal}
        setShow={setShowSubmittedModal}
        cost={cost}
      />
      <OnlinePayModal
        show={showOnlinePayModal}
        setShow={setShowOnlinePayModal}
      />
      <Breadcrumb url='/cart' name='Giỏ hàng' />
      <h1 className='pay__title font-bold size-32 mt-4 mb-3'>Đặt hàng</h1>
      <div className='pay__main d-flex align-items-start mb-4'>
        <div className='pay__form flex-grow-1'>
          <PayForm />
        </div>
        <div className='pay__calculation'>
          <div className='calculation__quantity d-flex justify-content-between align-items-center px-3 py-3'>
            <span className='size-14 font-bold'>Đơn hàng ({quantity} sp)</span>
            <span className='size-16 font-bold'>
              <Link to='/cart' className='position-relative'>{`Sửa`}</Link>
            </span>
          </div>
          <div className='calculation__pay-list size-14'>{renderPayList()}</div>
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
        </div>
      </div>
      <div className='pay__btn-wrapper d-flex'>
        <div
          className='pay__btn pay__btn--light-blue font-bold size-16'
          onClick={() => setShowSubmittedModal(true)}
        >
          Hoàn tất đặt hàng
        </div>
        <div
          className='pay__btn pay__btn--white font-bold size-16'
          onClick={() => setShowOnlinePayModal(true)}
        >
          Chuyển khoản online
        </div>
      </div>
    </div>
  )
}

export default Pay
