import { logo } from 'assets/images'
import { Link } from 'react-router-dom'
import './Breadcrumb.scss'
import { IBreadcrumb } from './interface'

const Breadcrumb: React.FC<IBreadcrumb> = ({ url, name }) => {
  return (
    <div className='breadcrumb d-flex align-items-center'>
      <Link to='/' className='breadcrumb__logo'>
        <img src={logo} alt='oneforall' className='breadcrumb__img' />
      </Link>
      <span className='breadcrumb__slash d-block mx-1 font-bold size-14'>
        /
      </span>
      <Link
        to={url}
        className='breadcrumb__link font-bold size-14 color-black text-decoration-none'
      >
        {name}
      </Link>
    </div>
  )
}

export default Breadcrumb
