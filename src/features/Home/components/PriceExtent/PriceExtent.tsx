import { Link } from 'react-router-dom'
import { IExtent } from './interface'
import './PriceExtent.scss'

const PriceExtent: React.FC<IExtent> = ({ extentList }) => {
  const renderList = (): JSX.Element[] => {
    return extentList.map((item, index) => (
      <Link
        key={index}
        to={item.url}
        className='extent__item d-inline-block text-decoration-none me-2 font-bold size-14'
      >
        {item.title}
      </Link>
    ))
  }

  return (
    <div className='extent d-flex align-items-center mt-3'>
      <div className='extent__text font-bold'>Khoảng giá</div>
      <div className='extent__list'>{renderList()}</div>
    </div>
  )
}

export default PriceExtent
