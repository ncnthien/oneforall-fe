import { Modal } from 'reactstrap'
import { ISubmittedModal } from './interface'
import './SubmittedModal.scss'

const SubmittedModal: React.FC<ISubmittedModal> = ({ show, setShow }) => {
  const toggleShowAuthModal = (): void => setShow(!show)

  return (
    <div className='submitted-modal'>
      <Modal
        isOpen={show}
        toggle={toggleShowAuthModal}
        centered
        className='submitted-modal__modal'
      >
        <div className='submitted-modal__main'>submitted</div>
      </Modal>
    </div>
  )
}

export default SubmittedModal
