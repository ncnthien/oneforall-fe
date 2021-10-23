/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { HistoryIcon, UserIcon } from 'assets/images/svgs'
import { Breadcrumb, ManageNav } from 'components'
import { removeTag } from 'features/Profile/helper'
import {
  ChangePasswordBody,
  ChangePasswordForm,
  DeliveryAddress,
  FetchedProfile,
} from 'features/Profile/interface'
import { updateProfile } from 'features/Profile/Profile.slice'
import { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import { INavList } from './interface'
import './Main.scss'
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from 'formik'
import * as Yup from 'yup'
import profileApi from 'apis/profileApi'

export const manageNavList: INavList[] = [
  { title: 'Tài khoản', url: '/profile', icon: UserIcon, active: true },
  { title: 'Lịch sử mua hàng', url: '/history', icon: HistoryIcon },
]

const fakeUser: FetchedProfile = {
  username: '',
  email: '',
  avatar: '',
  phone: '',
  _id: '',
  disable: false,
}

const fakeAddress: DeliveryAddress = {
  city: '',
  district: '',
  ward: '',
  address: '',
}

const defaultPasswordForm: ChangePasswordForm = {
  reNewPassword: '',
  oldPassword: '',
  newPassword: '',
}

const passwordFormSchema = Yup.object({
  oldPassword: Yup.string()
    .min(4, 'Mật khẩu cũ phải có ít nhất 5 kí tự')
    .max(30, 'Mật khẩu cũ chỉ có tối đa 30 kí tự')
    .required('Mật khẩu cũ không được để trống'),
  newPassword: Yup.string()
    .min(4, 'Mật khẩu mới phải có ít nhất 5 kí tự')
    .max(30, 'Mật khẩu mới chỉ có tối đa 30 kí tự')
    .required('Mật khẩu mới không được để trống'),
  reNewPassword: Yup.string()
    .oneOf(
      [Yup.ref('newPassword'), null],
      'Nhập lại mật khẩu mới không chính xác'
    )
    .required('Nhập lại mật khẩu mới không được để trống'),
})

const Main: React.FC = () => {
  const [profileUpdateLoading, setProfileUpdateLoading] =
    useState<boolean>(false)
  const [disableProfileUpdate, setDisableProfileUpdate] =
    useState<boolean>(false)
  const [profileUpdateNoti, setProfileUpdateNoti] = useState<string | null>(
    null
  )

  const [addressUpdateLoading, setAddressUpdateLoading] =
    useState<boolean>(false)
  const [disableAddressUpdate, setDisableAddressUpdate] =
    useState<boolean>(false)
  const [addressUpdateNoti, setAddressUpdateNoti] = useState<string | null>(
    null
  )

  const [changePasswordNoti, setChangePasswordNoti] = useState<string>('')
  const [userForm, setUserForm] = useState<FetchedProfile>(fakeUser)
  const [address, setAddress] = useState<DeliveryAddress>(fakeAddress)
  const { profile } = useAppSelector(state => state.profile)
  const dispatch = useAppDispatch()

  const handleUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const result = reader.result as string

        setUserForm({
          ...userForm,
          avatar: result,
        })
      }
    }

    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  const handleUpdateProfileClick = async () => {
    if (userForm.email !== profile?.email) {
      return
    }

    setProfileUpdateLoading(true)
    setProfileUpdateNoti('Đang cập nhật...')

    try {
      const clonedUserForm = JSON.parse(
        JSON.stringify(userForm)
      ) as FetchedProfile
      clonedUserForm.avatar = removeTag(userForm.avatar)

      const { status } = await dispatch(updateProfile(clonedUserForm)).unwrap()
      // Handle UI for better UX, just a temporary way to do it!
      if (status === 200) {
        setProfileUpdateLoading(false)
        setDisableProfileUpdate(true)
        setProfileUpdateNoti('Thành công')
        setTimeout(() => {
          setDisableProfileUpdate(false)
          setProfileUpdateNoti(null)
        }, 3000)
      }
    } catch (error: any) {
      setProfileUpdateLoading(false)
      setDisableProfileUpdate(true)
      setProfileUpdateNoti('Thất bại')
      setTimeout(() => {
        setDisableProfileUpdate(false)
        setProfileUpdateNoti(null)
      }, 3000)
    }
  }

  const handleUpdateAddressClick = async () => {
    setAddressUpdateLoading(true)
    setAddressUpdateNoti('Đang cập nhật...')

    try {
      const clonedUserForm = {
        ...profile,
        deliveryAddress: address,
      } as FetchedProfile
      clonedUserForm.avatar = removeTag(userForm.avatar)

      const { status } = await dispatch(updateProfile(clonedUserForm)).unwrap()
      // Handle UI for better UX, just a temporary way to do it!
      if (status === 200) {
        setAddressUpdateLoading(false)
        setDisableAddressUpdate(true)
        setAddressUpdateNoti('Thành công')
        setTimeout(() => {
          setDisableAddressUpdate(false)
          setAddressUpdateNoti(null)
        }, 3000)
      }
    } catch (error: any) {
      setAddressUpdateLoading(false)
      setDisableAddressUpdate(true)
      setAddressUpdateNoti('Thất bại')
      setTimeout(() => {
        setDisableAddressUpdate(false)
        setAddressUpdateNoti(null)
      }, 3000)
    }
  }

  const handlePasswordFormSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<ChangePasswordForm>
  ) => {
    actions.setSubmitting(true)
    if (values.oldPassword === values.newPassword) {
      actions.setFieldError(
        'newPassword',
        'Mật khẩu mới không được giống mật khẩu cũ'
      )
      return
    }

    const passwordBody = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    } as ChangePasswordBody

    try {
      const { status } = await profileApi.changePassword(passwordBody)
      if (status === 200) {
        setChangePasswordNoti('Thay đổi mật khẩu thành công!')
        return
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        actions.setFieldError('oldPassword', 'Mật khẩu cũ không chính xác')
        return
      }
    }
  }

  useEffect(() => {
    if (!profile) {
      return
    }
    setUserForm(profile)

    if (!profile.deliveryAddress) {
      return
    }
    setAddress(profile.deliveryAddress)
  }, [profile])

  return (
    <div className='profile'>
      <div className='container'>
        <div className='profile__breadcrumb'>
          <Breadcrumb url='/profile' name='Tài khoản' />
        </div>
        <div className='profile__main d-flex'>
          <div className='main__nav'>
            <div className='nav__wrapper position-sticky'>
              <ManageNav navList={manageNavList} />
            </div>
          </div>
          <div className='main__profile-wrapper'>
            <div className='profile-wrapper__title font-bold size-32'>
              Thông tin tài khoản
            </div>
            <div className='profile-wrapper__form d-flex flex-wrap'>
              <div className='form__input form__input--file'>
                <div
                  style={{
                    backgroundImage: `url(${userForm.avatar})`,
                  }}
                />
                <label htmlFor='avatar' className='font-bold size-12'>
                  Thay đổi ảnh đại diện
                </label>
                <Input
                  className='d-none'
                  type='file'
                  name='avatar'
                  id='avatar'
                  onChange={handleUserFormChange}
                />
              </div>
              <div className='form__input size-16'>
                <label htmlFor='phone' className='font-bold'>
                  Số điện thoại
                </label>
                <Input
                  type='text'
                  name='phone'
                  id='phone'
                  value={userForm.phone}
                  onChange={handleUserFormChange}
                />
              </div>
              <div className='form__input size-16'>
                <label htmlFor='username' className='font-bold'>
                  Họ và tên
                </label>
                <Input
                  type='text'
                  name='username'
                  id='username'
                  value={userForm.username}
                  onChange={handleUserFormChange}
                />
              </div>
              <div className='form__input size-16'>
                <label htmlFor='email' className='font-bold'>
                  Email
                </label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  value={userForm.email}
                  onChange={handleUserFormChange}
                  disabled
                />
              </div>
              <div className='form__btn w-100 '>
                <button
                  onClick={handleUpdateProfileClick}
                  className='font-bold color-white'
                  disabled={profileUpdateLoading || disableProfileUpdate}
                >
                  {profileUpdateNoti ? profileUpdateNoti : 'Cập nhật'}
                </button>
              </div>
            </div>
            <div className='profile-wrapper__title font-bold size-32'>
              Địa chỉ giao hàng
            </div>
            <div className='profile-wrapper__form d-flex flex-wrap'>
              <div className='form__input size-16'>
                <Input
                  type='text'
                  name='city'
                  placeholder='Tỉnh/Thành phố'
                  value={address.city}
                  onChange={handleAddressChange}
                />
              </div>
              <div className='form__input size-16'>
                <Input
                  type='text'
                  name='district'
                  placeholder='Quận/Huyện'
                  value={address.district}
                  onChange={handleAddressChange}
                />
              </div>
              <div className='form__input size-16'>
                <Input
                  type='text'
                  name='ward'
                  placeholder='Phường/Xã'
                  value={address.ward}
                  onChange={handleAddressChange}
                />
              </div>
              <div className='form__input size-16'>
                <Input
                  type='text'
                  name='address'
                  placeholder='Số nhà'
                  value={address.address}
                  onChange={handleAddressChange}
                />
              </div>
              <div className='form__btn w-100 '>
                <button
                  onClick={handleUpdateAddressClick}
                  className='font-bold color-white'
                  disabled={addressUpdateLoading || disableAddressUpdate}
                >
                  {addressUpdateNoti ? addressUpdateNoti : 'Cập nhật'}
                </button>
              </div>
            </div>
            <div className='profile-wrapper__title font-bold size-32'>
              Thay đổi mật khẩu
            </div>
            <div className='profile-wrapper__form d-flex flex-wrap'>
              <Formik
                initialValues={defaultPasswordForm}
                onSubmit={handlePasswordFormSubmit}
                validationSchema={passwordFormSchema}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className='form__input'>
                      <label htmlFor='password'>Nhập mật khẩu hiện tại</label>
                      <br />
                      <Field
                        type='password'
                        name='oldPassword'
                        id='password'
                        className='w-100'
                      />
                      <ErrorMessage
                        name='oldPassword'
                        component='div'
                        className='color-red d-block mt-2'
                      />
                    </div>
                    <div className='d-flex'>
                      <div className='form__input'>
                        <label htmlFor='newPassword'>Mật khẩu mới</label>
                        <br />
                        <Field
                          type='password'
                          name='newPassword'
                          id='newPassword'
                          className='w-100'
                        />
                        <ErrorMessage
                          name='newPassword'
                          component='div'
                          className='color-red d-block mt-2'
                        />
                      </div>
                      <div className='form__input'>
                        <label htmlFor='reNewPassword'>
                          Nhập lại mật khẩu mới
                        </label>
                        <br />
                        <Field
                          type='password'
                          name='reNewPassword'
                          id='reNewPassword'
                          className='w-100'
                        />
                        <ErrorMessage
                          name='reNewPassword'
                          component='div'
                          className='color-red d-block mt-2'
                        />
                      </div>
                    </div>
                    <div className='ps-2 '>{changePasswordNoti}</div>
                    <div className='form__btn'>
                      <button
                        type='submit'
                        disabled={isSubmitting}
                        className='font-bold text-white'
                      >
                        Cập nhật
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
