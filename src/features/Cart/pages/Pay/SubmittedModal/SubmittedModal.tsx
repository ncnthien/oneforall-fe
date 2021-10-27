import { SuccessIcon } from 'assets/images/svgs'
import { Link } from 'react-router-dom'
import { Modal } from 'reactstrap'
import { ISubmittedModal } from './interface'
import './SubmittedModal.scss'

const SubmittedModal: React.FC<ISubmittedModal> = ({
  show,
  setShow,
  cost,
  info,
}) => {
  const toggleShowAuthModal = (): void => setShow(!show)

  return (
    <div className='submitted-modal'>
      <Modal
        isOpen={show}
        toggle={toggleShowAuthModal}
        centered
        className='submitted-modal__modal'
      >
        <div className='submitted-modal__main'>
          <div className='main__title text-center font-bold size-18'>
            Đặt hàng thành công
          </div>
          <div className='main__message text-center size-14'>
            <div className='d-flex justify-content-center'>
              <div className='message__icon d-flex justify-content-center align-items-center'>
                <SuccessIcon />
              </div>
            </div>
            <div>
              Cảm ơn khách hàng{' '}
              <span className='font-bold'>{info.username}</span> đã đặt hàng tại
              Oneforall.
            </div>
            <div>
              Trong vòng 24h nhân viên Oneforall sẽ gọi điện xác nhận đặt hàng
              cho anh/chị.
            </div>
          </div>
          <div className='main__content'>
            <div className='font-bold size-18'>Thông tin đặt hàng</div>
            <div className='size-14'>
              Người nhận: <span className='font-bold'>{info.username}</span>
            </div>
            <div className='size-14'>
              Nhận hàng tại:{' '}
              <span className='font-bold'>
                {`${info.deliveryAddress?.address}, ${info.deliveryAddress?.ward}, ${info.deliveryAddress?.district}, ${info.deliveryAddress?.city} `}
              </span>
            </div>
            <div className='size-14'>
              Tổng tiền thanh toán:{' '}
              <span className='font-bold color-red'>{`${cost.toLocaleString()} ₫`}</span>
            </div>
          </div>
          <div className='main__btn d-flex justify-content-center color-white'>
            <Link to='/' className='font-bold' onClick={() => setShow(false)}>
              Trở về trang chủ
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SubmittedModal
