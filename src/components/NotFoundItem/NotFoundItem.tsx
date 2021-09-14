import { notFoundItemImg } from 'assets/images'
import { INotFoundItem } from './interface'

const NotFoundItem: React.FC<INotFoundItem> = ({ title }) => {
  return (
    <div className='d-flex flex-column align-items-center w-100 p-4'>
      <div>
        <img src={notFoundItemImg} alt='' />
      </div>
      <h4 className='font-bold size-20'>{title}</h4>
    </div>
  )
}

export default NotFoundItem
