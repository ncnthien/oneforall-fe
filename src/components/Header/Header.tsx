import { useAppSelector } from 'app/hooks'
import logo from 'assets/images/logo.png'
import {
  CartIcon,
  NotificationIcon,
  SearchIcon,
  UserIcon,
} from 'assets/images/svgs'
import { EAuthModalTab } from 'components/enum'
import { getCost, getQuantity } from 'features/Cart/Cart.helper'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from 'reactstrap'
import AuthModal from './AuthModal/AuthModal'
import './Header.scss'

interface IProps {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IProps> = ({ setShowOverlay }) => {
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false)
  const [activeAuthModalTab, setActiveAuthModalTab] = useState<string>('logIn')
  const [isScrollingDown, setIsScrollingDown] = useState<boolean | 0>(false)

  const { cart } = useAppSelector(state => state.cart)
  const quantity = getQuantity(cart)
  const cost = getCost(cart)

  let lastScrollTop = 0

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderCartList = (): JSX.Element[] => {
    return cart.map(item => (
      <li
        key={item.id}
        className='filled-cart__item d-flex align-items-center mb-2'
      >
        <img src={item.img} alt='' className='filled-cart__img' />
        <div className='filled-cart__item-content ms-2'>
          <Link
            to={item.url}
            className='filled-cart__item-name text-reset text-decoration-none color-black font-bold size-14'
          >
            {item.name}
          </Link>
          <p className='filled-cart__item-price size-14 mb-0'>
            <span className='color-red font-bold'>
              {item.isSale
                ? item.reducedPrice?.toLocaleString()
                : item.price.toLocaleString()}
            </span>
            {' x '}
            <span>{item.quantity}</span>
          </p>
        </div>
      </li>
    ))
  }

  const handleScroll = (): void => {
    const position: number = window.scrollY

    if (lastScrollTop < position) {
      // if laScrollTop value less than position value then page is scrolling down
      setIsScrollingDown(true)
    } else {
      //else page is scrolling up
      setIsScrollingDown(false)
    }
    // if position value  equal 0 (header on top) then set isScrollingDown to 0, so header remove box shadow when header on top
    if (position === 0) {
      setIsScrollingDown(0)
    }

    lastScrollTop = position
  }

  return (
    <div
      className={`header ${
        isScrollingDown
          ? 'header--scrolling-down'
          : isScrollingDown === 0
          ? 'header--on-top'
          : ''
      }`}
    >
      <AuthModal
        show={showAuthModal}
        setShow={setShowAuthModal}
        activeTab={activeAuthModalTab}
        setActiveTab={setActiveAuthModalTab}
      />

      <div className='container'>
        <div className='position-relative d-flex align-items-center'>
          <Link to='/' className='header-logo position-relative'>
            <img src={logo} alt='' />
          </Link>
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
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/dell'>Dell</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Optiplex
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Percision
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Alienware
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Alienware
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Alienware
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/hp'>HP</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Elitedesk
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Z Workstation
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Pavilion
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/lenovo'>Lenovo</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      ThinkCentre
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Legion
                    </div>
                    <div className='header-menu__list-content size-14'>
                      ThinkStation
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/dell'>Dell</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Optiplex
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Percision
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Alienware
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/apple'>Apple</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      iMac
                    </div>
                    <div className='header-menu__list-content size-14'>Mac</div>
                    <div className='header-menu__list-content size-14'>
                      Mac Pro
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/pc'>Theo nhu cầu</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Văn phòng
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Gamming
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Đồ họa kĩ thuật
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Đồ họa media
                    </div>
                  </div>
                </div>
                <div className='header-menu__support'>
                  <div className='size-14'>Tư vấn miễn phí</div>
                  <div className='font-bold size-18'>035 4017 056</div>
                </div>
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
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/hp'>HP</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Elitedesk
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Z Workstation
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Pavilion
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/lenovo'>Lenovo</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      ThinkCentre
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Legion
                    </div>
                    <div className='header-menu__list-content size-14'>
                      ThinkStation
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/dell'>Dell</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Optiplex
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Percision
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Alienware
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/brand/apple'>Apple</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      iMac
                    </div>
                    <div className='header-menu__list-content size-14'>Mac</div>
                    <div className='header-menu__list-content size-14'>
                      Mac Pro
                    </div>
                  </div>
                  <div className='header-menu__list-item'>
                    <div className='header-menu__list-title font-bold size-18'>
                      <Link to='/pc'>Theo nhu cầu</Link>
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Văn phòng
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Gamming
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Đồ họa kĩ thuật
                    </div>
                    <div className='header-menu__list-content size-14'>
                      Đồ họa media
                    </div>
                  </div>
                </div>
                <div className='header-menu__support'>
                  <div className='size-14'>Tư vấn miễn phí</div>
                  <div className='font-bold size-18'>035 4017 056</div>
                </div>
              </div>
            </div>
            <div className='header-nav__item d-flex justify-content-center h-100'>
              <Link
                to='/accessory'
                className='position-relative d-flex align-items-center h-100 size-16'
              >
                Phụ Kiện
              </Link>
            </div>
          </div>
          <div className='header-search position-relative'>
            <Input
              type='text'
              name='search'
              placeholder='Tìm kiếm trên oneforall'
              className='w-100 size-14'
            />
            <span className='header-search__btn position-absolute d-flex justify-content-center align-items-center'>
              <SearchIcon />
            </span>
          </div>
          <div className='header-action d-flex justify-content-end align-items-center flex-grow-1 h-100 '>
            <div className='header-action__item position-relative'>
              <Link
                to='/notification'
                className='d-flex justify-content-center align-items-center h-100'
              >
                <NotificationIcon />
              </Link>
            </div>
            <div className='header-action__item position-relative'>
              <Link
                to='/cart'
                className='d-flex justify-content-center align-items-center h-100 position-relative'
              >
                <CartIcon />
                {cart.length > 0 && (
                  <div className='header-action__cart-length position-absolute text-center font-bold color-black size-14'>
                    {quantity}
                  </div>
                )}
              </Link>
              <div className='header-action__dropdown cart position-absolute'>
                <div className='header-action__dropdown-container'>
                  {!(cart.length > 0) ? (
                    <div className='empty-cart text-center font-bold size-14'>
                      Bạn chưa có sản phẩm nào trong giỏ hàng
                    </div>
                  ) : (
                    <div className='filled-cart p-3'>
                      <div className='filled-cart__header mb-3'>
                        <span className='font-bold'>{quantity} sản phẩm</span>{' '}
                        {'trong giỏ hàng'}
                      </div>
                      <ul className='filled-cart__list ps-0 mb-0'>
                        {renderCartList()}
                      </ul>
                      <Link
                        to='/cart'
                        className='filled-cart__btn d-block text-center text-decoration-none py-2 mt-3 size-14 font-bold'
                      >{`Giỏ hàng: ${cost.toLocaleString()} ₫`}</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='header-action__item position-relative d-flex justify-content-center align-items-center'>
              <UserIcon />
              <div className='header-action__dropdown account position-absolute'>
                <div className='header-action__dropdown-container'>
                  <div className='authentication font-bold size-14'>
                    <div
                      className='authentication__btn'
                      onClick={() => {
                        setShowAuthModal(true)
                        setActiveAuthModalTab(EAuthModalTab.LOGIN)
                      }}
                    >
                      Đăng nhập
                    </div>
                    <div
                      className='authentication__btn'
                      onClick={() => {
                        setShowAuthModal(true)
                        setActiveAuthModalTab(EAuthModalTab.LOGOUT)
                      }}
                    >
                      Tạo tài khoản
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
