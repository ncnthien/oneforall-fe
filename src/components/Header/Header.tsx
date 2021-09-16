import { logo } from 'assets/images'
import { EAuthModalTab } from 'components/enum'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AuthModal from './AuthModal/AuthModal'
import './Header.scss'
import HeaderAction from './HeaderAction/HeaderAction'
import HeaderNav from './HeaderNav/HeaderNav'
import SearchInput from './SearchInput/SearchInput'

export interface IProps {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<IProps> = ({ setShowOverlay }) => {
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false)
  const [activeAuthModalTab, setActiveAuthModalTab] = useState<EAuthModalTab>(
    EAuthModalTab.LOGIN
  )
  const [isScrollingDown, setIsScrollingDown] = useState<boolean | 0>(false)

  let lastScrollTop = 0

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          <HeaderNav setShowOverlay={setShowOverlay} />
          <SearchInput />
          <HeaderAction
            setActiveAuthModalTab={setActiveAuthModalTab}
            setShowAuthModal={setShowAuthModal}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
