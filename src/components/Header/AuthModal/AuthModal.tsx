import { FormGroup, Input, Modal, TabContent, TabPane } from 'reactstrap'
import './AuthModal.scss'
import { IAuthModal } from './interface'
import { FacebookBtnIcon, GoogleBtnIcon } from 'assets/images/svgs'
import { EAuthModalTab } from 'components/enum'

const AuthModal: React.FC<IAuthModal> = ({
  show,
  setShow,
  activeTab,
  setActiveTab,
}) => {
  const toggleShowAuthModal = (): void => setShow(!show)

  const toggleShowAuthModalTab = (tab: string): void => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div className='auth-modal'>
      <Modal isOpen={show} toggle={toggleShowAuthModal} centered>
        <div className='auth-modal__header d-flex'>
          <div
            className={`auth-modal-tab__nav position-relative d-flex justify-content-center align-items-center font-bold size-20 ${
              activeTab === EAuthModalTab.LOGIN ? 'active' : ''
            }`}
            onClick={() => toggleShowAuthModalTab(EAuthModalTab.LOGIN)}
          >
            Đăng nhập
          </div>
          <div
            className={`auth-modal-tab__nav position-relative d-flex justify-content-center align-items-center font-bold size-20 ${
              activeTab === EAuthModalTab.LOGOUT ? 'active' : ''
            }`}
            onClick={() => toggleShowAuthModalTab(EAuthModalTab.LOGOUT)}
          >
            Tạo tài khoản
          </div>
        </div>
        <div className='auth-modal-tab'>
          <TabContent activeTab={activeTab}>
            <TabPane tabId={EAuthModalTab.LOGIN}>
              <div className='auth-modal-tab__container'>
                <FormGroup>
                  <label
                    htmlFor='loginEmail'
                    className='auth-modal-tab__label font-bold size-16'
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
                    className='auth-modal-tab__label font-bold size-16'
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
                <div className='auth-modal-tab__btn'>
                  <button className='d-flex justify-content-center align-items-center w-100 font-bold color-white'>
                    Đăng nhập
                  </button>
                </div>
                <div className='auth-modal-tab__line position-relative text-center'>
                  <span className='position-relative'>
                    Hoặc đăng nhập thông qua
                  </span>
                </div>
                <div className='auth-modal-tab__btn-container'>
                  <div className='auth-modal-tab__btn light-btn'>
                    <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
                      <GoogleBtnIcon />
                      <span>Google</span>
                    </button>
                  </div>
                  <div className='auth-modal-tab__btn light-btn'>
                    <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
                      <FacebookBtnIcon />
                      <span>Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </TabPane>
            <TabPane tabId={EAuthModalTab.LOGOUT}>
              <div className='auth-modal-tab__container'>
                <FormGroup>
                  <label
                    htmlFor='logoutEmail'
                    className='auth-modal-tab__label font-bold size-16'
                  >
                    Email
                  </label>
                  <Input
                    type='email'
                    name='email'
                    id='logoutEmail'
                    placeholder='Nhập email'
                  />
                </FormGroup>
                <FormGroup>
                  <label
                    htmlFor='username'
                    className='auth-modal-tab__label font-bold size-16'
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
                    className='auth-modal-tab__label font-bold size-16'
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
                <div className='auth-modal-tab__btn'>
                  <button className='d-flex justify-content-center align-items-center w-100 font-bold color-white'>
                    Đăng ký
                  </button>
                </div>
                <div className='auth-modal-tab__line position-relative text-center'>
                  <span className='position-relative'>
                    Hoặc đăng ký thông qua
                  </span>
                </div>
                <div className='auth-modal-tab__btn-container'>
                  <div className='auth-modal-tab__btn light-btn'>
                    <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
                      <GoogleBtnIcon />
                      <span>Google</span>
                    </button>
                  </div>
                  <div className='auth-modal-tab__btn light-btn'>
                    <button className='d-flex justify-content-center align-items-center w-100 font-bold'>
                      <FacebookBtnIcon />
                      <span>Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </Modal>
    </div>
  )
}

export default AuthModal
