import { FacebookBtnIcon, GoogleBtnIcon } from 'assets/images/svgs'
import { ReactFacebookLoginInfo } from 'react-facebook-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { FormGroup, Input } from 'reactstrap'
import './LoginForm.scss'

const LoginForm: React.FC = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const appId = process.env.REACT_APP_FACEBOOK_APP_ID

  const responseSuccessGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log('Google success', response)
  }

  const responseFailureGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(clientId)
    console.log('Google failure', response)
  }

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    console.log(response)
  }

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
          <GoogleLogin
            clientId={clientId as string}
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className='d-flex justify-content-center align-items-center w-100 font-bold'
              >
                <GoogleBtnIcon />
                <span>Google</span>
              </button>
            )}
            buttonText='Login'
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailureGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className='login-form__btn light-btn'>
          <FacebookLogin
            appId={appId as string}
            callback={responseFacebook}
            fields='name, email, picture'
            render={renderProps => (
              <button
                onClick={renderProps.onClick}
                className='d-flex justify-content-center align-items-center w-100 font-bold'
              >
                <FacebookBtnIcon />
                <span>Facebook</span>
              </button>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default LoginForm
