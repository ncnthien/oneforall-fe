import { useAppDispatch, useAppSelector } from 'app/hooks'
import { EAuthModalTab } from 'components/enum'
import { Modal, TabContent, TabPane } from 'reactstrap'
import './AuthModal.scss'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import { setShow, setActive } from './AuthModal.slice'

const AuthModal: React.FC = () => {
  const { showAuthModal, activeAuthModalTab } = useAppSelector(
    state => state.authModal
  )
  const dispatch = useAppDispatch()

  const toggleShowAuthModal = (): void => {
    dispatch(setShow(!showAuthModal))
  }

  const toggleShowAuthModalTab = (tab: EAuthModalTab): void => {
    if (activeAuthModalTab !== tab) dispatch(setActive(tab))
  }

  return (
    <div className='auth-modal'>
      <Modal
        isOpen={showAuthModal}
        toggle={toggleShowAuthModal}
        centered
        className='auth-modal__modal'
      >
        <div className='auth-modal__header d-flex'>
          <div
            className={`auth-modal-tab__nav position-relative d-flex justify-content-center align-items-center font-bold size-20 ${
              activeAuthModalTab === EAuthModalTab.LOGIN ? 'active' : ''
            }`}
            onClick={() => toggleShowAuthModalTab(EAuthModalTab.LOGIN)}
          >
            Đăng nhập
          </div>
          <div
            className={`auth-modal-tab__nav position-relative d-flex justify-content-center align-items-center font-bold size-20 ${
              activeAuthModalTab === EAuthModalTab.REGISTER ? 'active' : ''
            }`}
            onClick={() => toggleShowAuthModalTab(EAuthModalTab.REGISTER)}
          >
            Tạo tài khoản
          </div>
        </div>
        <div className='auth-modal-tab'>
          <TabContent activeTab={activeAuthModalTab}>
            <TabPane tabId={EAuthModalTab.LOGIN}>
              <LoginForm />
            </TabPane>
            <TabPane tabId={EAuthModalTab.REGISTER}>
              <RegisterForm />
            </TabPane>
          </TabContent>
        </div>
      </Modal>
    </div>
  )
}

export default AuthModal
