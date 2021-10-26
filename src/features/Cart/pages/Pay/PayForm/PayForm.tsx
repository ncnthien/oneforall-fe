import { Input } from 'reactstrap'
import { IPayForm } from './interface'
import './PayForm.scss'

const PayForm: React.FC<IPayForm> = ({ info, setInfo, err }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if (
      name === 'city' ||
      name === 'district' ||
      name === 'ward' ||
      name === 'address'
    ) {
      setInfo({
        ...info,
        deliveryAddress: {
          ...info.deliveryAddress,
          [name]: value,
        },
      })
    } else {
      setInfo({
        ...info,
        [name]: value,
      })
    }
  }

  return (
    <div className='pay-form'>
      <div className='pay-form__form-group pay-form__form-group--user'>
        <div className='form-group__title font-bold size-16'>
          Thông tin người nhận
        </div>
        <div className='form-group__form d-flex flex-wrap'>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='username'
              value={info.username}
              onChange={handleChange}
            />
          </div>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='phone'
              placeholder='Số điện thoại'
              value={info.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='pay-form__form-group pay-form__form-group--address'>
        <div className='form-group__title font-bold size-16'>
          Địa chỉ giao hàng
        </div>
        <div className='form-group__form d-flex flex-wrap'>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='city'
              placeholder='Tỉnh/Thành phố'
              value={info.deliveryAddress?.city}
              onChange={handleChange}
            />
          </div>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='district'
              placeholder='Quận/Huyện'
              value={info.deliveryAddress?.district}
              onChange={handleChange}
            />
          </div>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='ward'
              placeholder='Phường/Xã'
              value={info.deliveryAddress?.ward}
              onChange={handleChange}
            />
          </div>
          <div className='form__input size-16'>
            <Input
              type='text'
              name='address'
              placeholder='Số nhà, tên đường, phường xã'
              value={info.deliveryAddress?.address}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='text-danger pay__err'>{err}</div>
    </div>
  )
}

export default PayForm
