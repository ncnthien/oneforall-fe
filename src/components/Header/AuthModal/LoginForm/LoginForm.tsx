/* eslint-disable @typescript-eslint/no-explicit-any */
import authApi from 'apis/authApi'
import { useAppDispatch } from 'app/hooks'
import { FacebookBtnIcon, GoogleBtnIcon } from 'assets/images/svgs'
import {
  LoginBody,
  LoginFormProps,
} from 'components/Header/AuthModal/interface'
import { getProfile } from 'features/Profile/Profile.slice'
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from 'formik'
import { useState } from 'react'
import { ReactFacebookLoginInfo } from 'react-facebook-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { FormGroup } from 'reactstrap'
import * as Yup from 'yup'
import './LoginForm.scss'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(4, 'At least 4 character')
    .max(40, 'Maximum is 40 character')
    .required('Password is required'),
})

const LoginForm: React.FC<LoginFormProps> = ({ setShow }) => {
  const jwtTokenKey = 'jwtToken'
  const [error, setError] = useState<string>('')
  const defaultLoginForm: LoginBody = { email: '', password: '' }
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const appId = process.env.REACT_APP_FACEBOOK_APP_ID
  const dispatch = useAppDispatch()

  const responseSuccessGoogle = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if (!('tokenId' in response)) {
      return
    }

    try {
      const {
        data: { token },
      } = await authApi.googleLogin({
        tokenId: response.tokenId,
      })

      localStorage.setItem(jwtTokenKey, token)
      dispatch(getProfile())
      setShow(false)
    } catch (error) {
      // Handle UI if error occurs here
      console.log(error)
    }
  }

  const responseFailureGoogle = async (error: any) => {
    // Handle UI if error occurs here
    console.log(error)
  }

  const responseFacebook = async (response: ReactFacebookLoginInfo) => {
    try {
      const {
        data: { token },
      } = await authApi.facebookLogin({
        accessToken: response.accessToken,
      })

      localStorage.setItem(jwtTokenKey, token)
      dispatch(getProfile())
      setShow(false)
    } catch (error) {
      // Handle UI if error occurs here
      console.log(error)
    }
  }

  const handleFormSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<LoginBody>
  ) => {
    try {
      actions.setSubmitting(true)
      const loginBody = { ...values } as LoginBody
      const {
        data: { token },
      } = await authApi.login(loginBody)

      localStorage.setItem(jwtTokenKey, token)
      dispatch(getProfile())
      actions.setSubmitting(false)
      setShow(false)
    } catch (error) {
      setError(error as string)
      actions.setSubmitting(false)
    }
  }

  return (
    <div className='login-form'>
      <Formik
        initialValues={defaultLoginForm}
        onSubmit={handleFormSubmit}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <label
                htmlFor='email'
                className='login-form__label font-bold size-16'
              >
                Email
              </label>
              <Field
                id='email'
                name='email'
                placeholder='Nhập email'
                className='d-block w-100'
              />
              <ErrorMessage name='email' component='error' />
            </FormGroup>
            <FormGroup>
              <label
                htmlFor='password'
                className='login-form__label font-bold size-16'
              >
                Mật khẩu
              </label>
              <Field
                id='password'
                name='password'
                type='password'
                placeholder='Nhập password'
                className='d-block w-100'
              />
              <ErrorMessage name='password' component='error' />
              {error && <div className='color-red mt-4'>{error}</div>}
            </FormGroup>
            <div className='login-form__btn'>
              <button
                type='submit'
                className='d-flex justify-content-center align-items-center w-100 font-bold color-white'
                disabled={isSubmitting}
              >
                Đăng nhập
              </button>
            </div>
          </Form>
        )}
      </Formik>

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
