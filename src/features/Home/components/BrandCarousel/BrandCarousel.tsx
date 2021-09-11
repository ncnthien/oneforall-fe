import { leftArrowLogo, rightArrowLogo } from 'assets/images'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './BrandCarousel.scss'
import { IBrandCarousel } from './interface'

const BrandCarousel: React.FC<IBrandCarousel> = ({ brandList, isSlide }) => {
  const [isContainerActive, setIsContainerActive] = useState<boolean>(false)

  const renderBrandList = (): JSX.Element[] => {
    return brandList.map(brand => (
      <Link key={brand.name} to={brand.url} className='carousel__item me-2'>
        <img src={brand.path} alt={brand.name} className='w-100' />
      </Link>
    ))
  }

  const handlePrevBtnClick = () => {
    setIsContainerActive(false)
  }

  const handleNextBtnClick = () => {
    setIsContainerActive(true)
  }

  return (
    <div className='carousel d-flex align-items-center'>
      <div className='carousel__text font-bold pe-2 size-16'>Thương hiệu</div>
      <div className='carousel__body flex-grow-1'>
        <div
          className={
            'carousel__container d-flex align-items-stretch' +
            (isContainerActive ? ' carousel__container--active' : '')
          }
        >
          <button
            className='carousel__btn carousel__prev-btn'
            onClick={handlePrevBtnClick}
          >
            <img src={leftArrowLogo} alt='prev' />
          </button>
          <div className='carousel__main flex-grow-1 overflow-hidden position-relative'>
            <div className='carousel__brick invisible'>
              <img
                src={brandList.length > 0 ? brandList[0].path : ''}
                alt=''
                className='w-100'
              />
            </div>
            <ul className='carousel__list d-flex align-items-center mb-0 ps-0 position-absolute'>
              {renderBrandList()}
            </ul>
          </div>
          <button
            className={
              'carousel__btn carousel__next-btn' +
              (!isSlide ? ' invisible' : '')
            }
            onClick={handleNextBtnClick}
          >
            <img src={rightArrowLogo} alt='next' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BrandCarousel
