import { Link } from 'react-router-dom'
import './Breadcumb.scss'
import { IBreadcumb } from './interface'
import logo from 'assets/images/logo.png'

const Breadcumb: React.FC<IBreadcumb> = ({ url, name }) => {
  return (
    <div className='breadcumb d-flex align-items-center'>
      <Link to='/' className='breadcumb__logo'>
        <img src={logo} alt='oneforall' className='breadcumb__img' />
      </Link>
      <span className='breadcumb__slash d-block mx-1 font-bold size-14'>/</span>
      <Link
        to={url}
        className='breadcumb__link font-bold size-14 color-black text-decoration-none'
      >
        {name}
      </Link>
    </div>
  )
}

export default Breadcumb
