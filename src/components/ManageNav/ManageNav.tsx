import { Link } from 'react-router-dom'
import { IManageNav } from './interface'
import './ManageNav.scss'

const renderManageNavList = (navList: IManageNav['navList']) => {
  return navList.map(item => (
    <Link
      key={item.title}
      to={item.url}
      className={`manage-nav__item ${
        item.active ? 'active' : ''
      } position-relative d-flex align-items-center`}
    >
      <div className='item__icon'>{item.icon ? <item.icon /> : ''}</div>
      <div className={`item__title ${item.active ? 'font-bold' : ''} size-14`}>
        {item.title}
      </div>
    </Link>
  ))
}

const ManageNav: React.FC<IManageNav> = ({ navList }) => {
  return <div className='manage-nav'>{renderManageNavList(navList)}</div>
}

export default ManageNav
