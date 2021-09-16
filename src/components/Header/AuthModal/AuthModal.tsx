import { EAuthModalTab } from 'components/enum'
import { Modal, TabContent, TabPane } from 'reactstrap'
import './AuthModal.scss'
import { IAuthModal } from './interface'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'

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
              activeTab === EAuthModalTab.REGISTER ? 'active' : ''
            }`}
            onClick={() => toggleShowAuthModalTab(EAuthModalTab.REGISTER)}
          >
            Tạo tài khoản
          </div>
        </div>
        <div className='auth-modal-tab'>
          <TabContent activeTab={activeTab}>
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
