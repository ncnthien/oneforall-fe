import authApi from 'apis/authApi'
import { useAppDispatch } from 'app/hooks'
import { RegisterBody } from 'components/Header/AuthModal/interface'
import { getProfile } from 'features/Profile/Profile.slice'
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from 'formik'
import { FormGroup } from 'reactstrap'
import * as Yup from 'yup'
import { setShow } from '../AuthModal.slice'
import './RegisterForm.scss'

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  username: Yup.string()
    .min(4, 'At least 4 character')
    .max(40, 'Maximum is 40 character')
    .required('Username is required'),
  password: Yup.string()
    .min(4, 'At least 4 character')
    .max(40, 'Maximum is 40 character')
    .required('Password is required'),
})

const RegisterForm: React.FC = () => {
  const defaultRegisterForm: RegisterBody = {
    email: '',
    username: '',
    password: '',
  }
  const dispatch = useAppDispatch()
  const jwtTokenKey = 'jwtToken'

  const handleFormSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<RegisterBody>
  ) => {
    try {
      actions.setSubmitting(true)
      const registerBody = { ...values } as RegisterBody

      const {
        data: { token },
      } = await authApi.register(registerBody)

      localStorage.setItem(jwtTokenKey, token)
      dispatch(getProfile())
      actions.setSubmitting(false)
      dispatch(setShow(false))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const takenEmailError = 'email has been taken'
      if (error.response.data === takenEmailError) {
        actions.setFieldError('email', takenEmailError)
        return
      }

      // Handle if there's any error occurs
      console.log(error)
    }
  }

  return (
    <div className='register-form'>
      <Formik
        initialValues={defaultRegisterForm}
        onSubmit={handleFormSubmit}
        validationSchema={RegisterSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <label
                htmlFor='emailRegister'
                className='register-form__label font-bold size-16'
              >
                Email
              </label>
              <Field
                id='emailRegister'
                name='emailRegister'
                placeholder='Nhập email'
                className='d-block w-100'
              />
              <ErrorMessage name='emailRegister' component='error' />
            </FormGroup>
            <FormGroup>
              <label
                htmlFor='username'
                className='register-form__label font-bold size-16'
              >
                Tên hiển thị
              </label>
              <Field
                id='username'
                name='username'
                type='text'
                placeholder='Nhập tên hiển thị'
                className='d-block w-100'
              />
              <ErrorMessage name='username' component='error' />
            </FormGroup>
            <FormGroup>
              <label
                htmlFor='passwordRegister'
                className='register-form__label font-bold size-16'
              >
                Mật khẩu
              </label>
              <Field
                id='passwordRegister'
                name='passwordRegister'
                type='password'
                placeholder='Nhập password'
                className='d-block w-100'
              />
              <ErrorMessage name='passwordRegister' component='error' />
            </FormGroup>
            <div className='register-form__btn'>
              <button
                type='submit'
                className='d-flex justify-content-center align-items-center w-100 font-bold color-white'
                disabled={isSubmitting}
              >
                Đăng ký
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterForm
