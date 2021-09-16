import { FacebookBtnIcon, GoogleBtnIcon } from 'assets/images/svgs'
import { FormGroup, Input } from 'reactstrap'
import './RegisterForm.scss'

const RegisterForm: React.FC = () => {
  return (
    <div className='register-form'>
      <FormGroup>
        <label
          htmlFor='registerEmail'
          className='register-form__label font-bold size-16'
        >
          Email
        </label>
        <Input
          type='email'
          name='email'
          id='registerEmail'
          placeholder='Nhập email'
        />
      </FormGroup>
      <FormGroup>
        <label
          htmlFor='username'
          className='register-form__label font-bold size-16'
        >
          Tên hiển thị
        </label>
        <Input
          type='text'
          name='username'
          id='username'
          placeholder='Nhập tên hiển thị'
        />
      </FormGroup>
      <FormGroup>
        <label
          htmlFor='logoutPassword'
          className='register-form__label font-bold size-16'
        >
          Mật khẩu
        </label>
        <Input
          type='password'
          name='password'
          id='logoutPassword'
          placeholder='Nhập mật khẩu'
        />
      </FormGroup>
      <div className='register-form__btn'>
        <button className='d-flex justify-content-center align-items-center w-100 font-bold color-white'>
          Đăng ký
        </button>
      </div>
      <div className='register-form__line position-relative text-center'>
        <span className='position-relative'>Hoặc đăng ký thông qua</span>
      </div>
      <div className='register-form__btn-container'>
        <div className='register-form__btn light-btn'>
          <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
            <GoogleBtnIcon />
            <span>Google</span>
          </button>
        </div>
        <div className='register-form__btn light-btn'>
          <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
            <FacebookBtnIcon />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
