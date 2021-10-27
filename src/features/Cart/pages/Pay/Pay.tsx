import { payApi } from 'api/payApi'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Breadcrumb } from 'components'
import { setShow } from 'components/Header/AuthModal/AuthModal.slice'
import { getCost, getQuantity } from 'features/Cart/Cart.helper'
import { handlePay } from 'features/Cart/Cart.slice'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { ValidationError } from 'yup'
import { Pay as IPay } from './interface'
import OnlinePayModal from './OnlinePayModal/OnlinePayModal'
import './Pay.scss'
import PayForm from './PayForm/PayForm'
import SubmittedModal from './SubmittedModal/SubmittedModal'

const Pay: React.FC = () => {
  const { profile } = useAppSelector(state => state.profile)
  const [showSubmittedModal, setShowSubmittedModal] = useState<boolean>(false)
  const [showOnlinePayModal, setShowOnlinePayModal] = useState<boolean>(false)
  const [info, setInfo] = useState<IPay>({
    username: profile?.username || '',
    phone: profile?.phone || '',
    deliveryAddress: {
      city: profile?.deliveryAddress?.city || '',
      district: profile?.deliveryAddress?.district || '',
      ward: profile?.deliveryAddress?.ward || '',
      address: profile?.deliveryAddress?.address || '',
    },
  })
  const [err, setErr] = useState<string>('')
  const [cost, setCost] = useState<number>(0)
  const { cart } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()
  const history = useHistory()
  const cartCost = getCost(cart)
  const quantity = getQuantity(cart)

  if (!profile) {
    history.push('/cart')
    dispatch(setShow(true))
  }

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

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const PaySchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username at least 4 character')
      .max(40, 'Username Maximum is 40 character')
      .required('Username is required'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, 'Phone is too short')
      .max(10, 'Phone is too long'),
    deliveryAddress: Yup.object().shape({
      address: Yup.string().required('Address is required'),
      ward: Yup.string().required('Ward is required'),
      district: Yup.string().required('District is required'),
      city: Yup.string().required('city is required'),
    }),
  })

  const handleSubmitPayForm = () => {
    PaySchema.validate(info)
      .then(() => {
        const payApiPostSubmit = async () => {
          const mappedCartList = cart.map(item => {
            return {
              productRef: item.id,
              quantity,
              cost: item.isSale ? item.reducedPrice : item.price,
            }
          })
          const data = {
            phone: info.phone,
            deliveryAddress: info.deliveryAddress,
            cart: mappedCartList,
          }
          try {
            await payApi.pay(data)

            setErr('')
            setCost(cartCost)
            setShowSubmittedModal(true)
            dispatch(handlePay())
          } catch (err) {
            return
          }
        }

        payApiPostSubmit()
      })
      .catch((err: ValidationError) => {
        setErr(err.message)
      })
  }

  return (
    <div className='pay container'>
      <SubmittedModal
        show={showSubmittedModal}
        setShow={setShowSubmittedModal}
        cost={cost}
        info={info}
      />
      <OnlinePayModal
        show={showOnlinePayModal}
        setShow={setShowOnlinePayModal}
      />
      <Breadcrumb url='/cart/pay' name='Đặt hàng' />
      <h1 className='pay__title font-bold size-32 mt-4 mb-3'>Đặt hàng</h1>
      <div className='pay__main d-flex align-items-start mb-4'>
        <div className='pay__form flex-grow-1'>
          <PayForm info={info} setInfo={setInfo} err={err} />
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
            <span className='size-16'>{cartCost.toLocaleString()} ₫</span>
          </div>
          <div className='calculation__genuine d-flex justify-content-between align-items-center px-3 py-3'>
            <span className='size-14 font-bold'>Thành tiền:</span>
            <span className='size-18 font-bold color-red'>
              {cartCost.toLocaleString()} ₫
            </span>
          </div>
        </div>
      </div>
      <div className='pay__btn-wrapper d-flex'>
        <div
          className='pay__btn pay__btn--light-blue font-bold size-16'
          onClick={handleSubmitPayForm}
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
