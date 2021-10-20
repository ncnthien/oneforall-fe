import { dropdownApi } from 'api/dropdownApi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IProps } from '../Header'
import './HeaderNav.scss'
import { IHeaderNav, IDropdownItem } from './interface'

const lastDropdownItem = (
  <div key='lastDropdownItem' className='header-menu__list-item'>
    <div className='header-menu__list-title font-bold size-18'>
      <Link to='/pc'>Theo nhu cầu</Link>
    </div>
    <div className='header-menu__list-content size-14'>
      <Link to='#'>Văn phòng</Link>
    </div>
    <div className='header-menu__list-content size-14'>
      <Link to='#'>Gamming</Link>
    </div>
    <div className='header-menu__list-content size-14'>
      <Link to='#'>Đồ họa kĩ thuật</Link>
    </div>
    <div className='header-menu__list-content size-14'>
      <Link to='#'>Đồ họa media</Link>
    </div>
  </div>
)

const headerMenuSupport = (
  <div className='header-menu__support'>
    <div className='size-14'>Tư vấn miễn phí</div>
    <div className='font-bold size-18'>035 4017 056</div>
  </div>
)

const HeaderNav: React.FC<IProps> = ({ setShowOverlay }) => {
  const [laptopDropdownList, setLaptopDropdownList] = useState<
    IHeaderNav['laptopDropdownList']
  >([])
  const [pcDropdownList, setPcDropdownList] = useState<
    IHeaderNav['pcDropdownList']
  >([])

  useEffect(() => {
    const fetchDropdownApi = async () => {
      try {
        const {
          data: { laptopDropdownList, pcDropdownList },
        } = await dropdownApi.get()

        setLaptopDropdownList(laptopDropdownList)
        setPcDropdownList(pcDropdownList)
      } catch (err) {
        return
      }
    }

    fetchDropdownApi()
  }, [])

  const renderDropdownList = (dropdownList: IDropdownItem[]) => {
    const dropDownListWithLastDropdownItem: JSX.Element[] = []

    dropdownList.forEach(dropdownItem => {
      dropDownListWithLastDropdownItem.push(
        <div key={dropdownItem.id} className='header-menu__list-item'>
          <div className='header-menu__list-title font-bold size-18'>
            <Link to={dropdownItem.brandUrl}>{dropdownItem.brand}</Link>
            {dropdownItem.subBrandList.map(item => (
              <div key={item.id} className='header-menu__list-content size-14'>
                <Link to={item.queryUrl}>{item.subBrand}</Link>
              </div>
            ))}
          </div>
        </div>
      )
    })

    if (dropDownListWithLastDropdownItem.length > 0) {
      dropDownListWithLastDropdownItem.push(lastDropdownItem)
    }

    return dropDownListWithLastDropdownItem
  }

  const accessoryDropdownList: IDropdownItem[] = []

  return (
    <div className='header-nav d-flex align-items-center h-100'>
      <div
        className='header-nav__item d-flex justify-content-center h-100'
        onMouseOver={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <Link
          to='/laptop'
          className='position-relative d-flex align-items-center h-100 size-16'
        >
          Laptop
        </Link>
        <div className='header-menu position-absolute top-100 start-0 d-flex w-100'>
          <div className='header-menu__list d-flex flex-grow-1 flex-wrap'>
            {renderDropdownList(laptopDropdownList)}
          </div>
          {laptopDropdownList.length > 0 && headerMenuSupport}
        </div>
      </div>
      <div
        className='header-nav__item d-flex justify-content-center h-100'
        onMouseOver={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <Link
          to='/pc'
          className='position-relative d-flex align-items-center h-100 size-16'
        >
          PC
        </Link>
        <div className='header-menu position-absolute top-100 start-0 d-flex w-100'>
          <div className='header-menu__list d-flex flex-grow-1 flex-wrap'>
            {renderDropdownList(pcDropdownList)}
          </div>
          {pcDropdownList.length > 0 && headerMenuSupport}
        </div>
      </div>
      <div className='header-nav__item d-flex justify-content-center h-100'>
        <Link
          to='/accessory'
          className='position-relative d-flex align-items-center h-100 size-16'
        >
          Phụ Kiện
        </Link>
        <div className='header-menu position-absolute top-100 start-0 d-flex w-100'>
          <div className='header-menu__list d-flex flex-grow-1 flex-wrap'>
            {renderDropdownList(accessoryDropdownList)}
          </div>
          {accessoryDropdownList.length > 0 && headerMenuSupport}
        </div>
      </div>
    </div>
  )
}

export default HeaderNav
