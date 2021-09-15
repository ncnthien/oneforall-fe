import { HistoryIcon, UserIcon } from 'assets/images/svgs'
import { Breadcrumb, ManageNav } from 'components'
import { useState } from 'react'
import { Input } from 'reactstrap'
import { INavList, IUserForm } from './interface'
import './Main.scss'

export const manageNavList: INavList[] = [
  { title: 'Tài khoản', url: '/profile', icon: UserIcon, active: true },
  { title: 'Lịch sử mua hàng', url: '/history', icon: HistoryIcon },
]

const fakeUser = {
  username: 'Nguyễn Công Nhật Thiên',
  email: 'nhatthien185@gmail.com',
  avatar: 'https://www.fillmurray.com/640/360',
  phone: '0782367185',
}

const Main: React.FC = () => {
  const [userForm, setUserForm] = useState<IUserForm>(fakeUser)

  const handleUserFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setUserForm({
          ...userForm,
          avatar: reader.result,
        })
      }
    }

    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    })
  }

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
                />
              </div>
              <div className='form__btn w-100 '>
                <button className='font-bold color-white'>Cập nhật</button>
              </div>
            </div>
            <div className='profile-wrapper__title font-bold size-32'>
              Địa chỉ giao hàng
            </div>
            <div className='profile-wrapper__form d-flex flex-wrap'>
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
                <Input type='text' name='address' placeholder='Số nhà' />
              </div>
              <div className='form__btn w-100 '>
                <button className='font-bold color-white'>Cập nhật</button>
              </div>
            </div>
            <div className='profile-wrapper__title font-bold size-32'>
              Thay đổi mật khẩu
            </div>
            <div className='profile-wrapper__form d-flex flex-wrap'>
              <div className='form__input size-16'>
                <label htmlFor='password' className='font-bold'>
                  Nhập mật khẩu hiện tại
                </label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Nhập mật khẩu hiện tại'
                />
              </div>
              <div className='form__input size-16' />
              <div className='form__input size-16'>
                <label htmlFor='newPassword' className='font-bold'>
                  Mật khẩu mới
                </label>
                <Input type='password' name='newPassword' id='newPassword' />
              </div>
              <div className='form__input size-16'>
                <label htmlFor='reNewPassword' className='font-bold'>
                  Nhập lại mật khẩu mới
                </label>
                <Input
                  type='password'
                  name='reNewPassword'
                  id='reNewPassword'
                />
              </div>
              <div className='form__btn w-100 '>
                <button className='font-bold color-white'>Cập nhật</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
