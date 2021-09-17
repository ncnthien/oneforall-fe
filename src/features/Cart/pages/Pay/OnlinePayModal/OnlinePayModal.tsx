import { agribankImg, vietcombankImg } from 'assets/images'
import { useState } from 'react'
import { Modal, TabContent, TabPane } from 'reactstrap'
import { IOnlinePayModal } from './interface'
import './OnlinePayModal.scss'

const OnlinePayModal: React.FC<IOnlinePayModal> = ({ show, setShow }) => {
  const [activeTab, setActiveTab] = useState<'payment-1' | 'payment-2'>(
    'payment-1'
  )

  const toggleShowAuthModal = (): void => setShow(!show)

  const toggleTab = (tab: 'payment-1' | 'payment-2') => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <div className='online-pay-modal'>
      <Modal
        isOpen={show}
        toggle={toggleShowAuthModal}
        centered
        className='online-pay-modal__modal'
      >
        <div className='online-pay-modal__main'>
          <div className='main__title text-center font-bold size-18'>
            Chuyển khoản online
          </div>
          <div className='main__message text-center size-14'>
            <div>Quý khách vui lòng chuyển khoản với nội dung ghi rõ</div>
            <div>
              <span className='font-bold'>Tên & Số Điện Thoại </span> người nhận
              hàng:
            </div>
            <div>
              Ví dụ: <span className='font-bold'>Nguyen Hieu 0988888888</span>
            </div>
          </div>
          <div className='main__wrapper'>
            <div className='wrapper__title font-bold size-16'>
              Chuyển khoản qua ngân hàng
            </div>
            <div className='wrapper__payment d-flex'>
              <div
                className={`payment__item ${
                  activeTab === 'payment-1' ? 'payment__item--active' : ''
                }`}
                onClick={() => toggleTab('payment-1')}
              >
                <img src={vietcombankImg} alt='' />
              </div>
              <div
                className={`payment__item ${
                  activeTab === 'payment-2' ? 'payment__item--active' : ''
                }`}
                onClick={() => toggleTab('payment-2')}
              >
                <img src={agribankImg} alt='' />
              </div>
            </div>
            <div className='wrapper__tab'>
              <TabContent activeTab={activeTab}>
                <TabPane tabId='payment-1' className='tab__content'>
                  <div className='font-bold size-14'>
                    Vietcombank - Ngân Hàng Ngoại Thương Việt Nam
                  </div>
                  <div className='size-14'>
                    Chủ tài khoản: Nguyen Cong Nhat Thien
                  </div>
                  <div className='size-14'>
                    Số tài khoản:
                    <span className='font-bold'> 0011004366653</span>
                  </div>
                </TabPane>
                <TabPane tabId='payment-2' className='tab__content'>
                  <div className='font-bold size-14'>
                    Agribank - Ngân hàng Nông nghiệp và PTNT
                  </div>
                  <div className='size-14'>Chủ tài khoản: Nguyen Hieu</div>
                  <div className='size-14'>
                    Số tài khoản:
                    <span className='font-bold'> 1400205514437</span>
                  </div>
                </TabPane>
              </TabContent>
            </div>
            <div className='wrapper__btn d-flex justify-content-center'>
              <button
                className='font-bold color-white'
                onClick={() => setShow(false)}
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default OnlinePayModal
