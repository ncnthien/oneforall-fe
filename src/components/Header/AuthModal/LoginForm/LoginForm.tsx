import { FacebookBtnIcon, GoogleBtnIcon } from 'assets/images/svgs'
import { FormGroup, Input } from 'reactstrap'
import './LoginForm.scss'

const LoginForm: React.FC = () => {
  return (
    <div className='login-form'>
      <FormGroup>
        <label
          htmlFor='loginEmail'
          className='login-form__label font-bold size-16'
        >
          Email
        </label>
        <Input
          type='email'
          name='email'
          id='loginEmail'
          placeholder='Nhập email'
        />
      </FormGroup>
      <FormGroup>
        <label
          htmlFor='loginPassword'
          className='login-form__label font-bold size-16'
        >
          Mật khẩu
        </label>
        <Input
          type='password'
          name='password'
          id='loginPassword'
          placeholder='Nhập mật khẩu'
        />
      </FormGroup>
      <div className='login-form__btn'>
        <button className='d-flex justify-content-center align-items-center w-100 font-bold color-white'>
          Đăng nhập
        </button>
      </div>
      <div className='login-form__line position-relative text-center'>
        <span className='position-relative'>Hoặc đăng nhập thông qua</span>
      </div>
      <div className='login-form__btn-container'>
        <div className='login-form__btn light-btn'>
          <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
            <GoogleBtnIcon />
            <span>Google</span>
          </button>
        </div>
        <div className='login-form__btn light-btn'>
          <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
            <FacebookBtnIcon />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
