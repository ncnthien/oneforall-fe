import { Input } from 'reactstrap'

import './PayForm.scss'

const PayForm: React.FC = () => {
  return (
    <div className='pay-form'>
      <div className='pay-form__form-group pay-form__form-group--user'>
        <div className='form-group__title font-bold size-16'>
          Thông tin người nhận
        </div>
        <div className='form-group__form d-flex flex-wrap'>
          <div className='form__input size-16'>
            <Input type='text' name='username' />
          </div>
          <div className='form__input size-16'>
            <Input type='text' name='phone' placeholder='Số điện thoại' />
          </div>
        </div>
      </div>
      <div className='pay-form__form-group pay-form__form-group--address'>
        <div className='form-group__title font-bold size-16'>
          Địa chỉ giao hàng
        </div>
        <div className='form-group__form d-flex flex-wrap'>
          <div className='form__input size-16'>
            <Input type='text' name='city' placeholder='Tỉnh/Thành hố' />
          </div>
          <div className='form__input size-16'>
            <Input type='text' name='district' placeholder='Quận/Huyện' />
          </div>
          <div className='form__input size-16'>
            <Input type='text' name='ward' placeholder='Phường/Xã' />
          </div>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='address'
              placeholder='Số nhà, tên đường, phường xã'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayForm
