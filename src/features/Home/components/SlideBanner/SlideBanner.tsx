import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ISlideBanner } from './interface'
import './SlideBanner.scss'

const SlideBanner: React.FC<ISlideBanner> = ({ eventList }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const timeEachInterval = 3000

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentSlide === 3) {
        setCurrentSlide(0)
      } else {
        const newCurrentSlide = currentSlide + 1
        setCurrentSlide(newCurrentSlide)
      }
    }, timeEachInterval)

    return () => {
      clearInterval(intervalId)
    }
  }, [currentSlide])

  const handleSlideBtnClick = (index: number) => () => {
    setCurrentSlide(index)
  }

  const renderBannerList = (): JSX.Element[] => {
    return eventList.map(item => (
      <li key={item.title} className='slidebanner__item d-block'>
        <Link to={item.url} className='slidebanner__link'>
          <img src={item.banner} alt={item.title} className='w-100' />
        </Link>
      </li>
    ))
  }

  const renderBtnList = (): JSX.Element[] => {
    return eventList.map((item, index) => (
      <button
        key={item.title}
        className={
          'slidebanner__btn w-25 position-relative overflow-hidden size-14 ' +
          (index === currentSlide ? 'font-bold slidebanner__btn--active' : '')
        }
        onClick={handleSlideBtnClick(index)}
      >
        {item.title}
      </button>
    ))
  }

  return (
    <div className='slidebanner mt-4'>
      <div className='slidebanner__container overflow-hidden'>
        <div className='slidebanner__main overflow-hidden position-relative'>
          <div className='slidebanner__brick'></div>
          <div className='slidebanner__monitor'>
            <ul
              className={
                'slidebanner__list d-flex ps-0 mb-0 position-absolute slidebanner__list--' +
                currentSlide
              }
            >
              {renderBannerList()}
            </ul>
          </div>
        </div>
        <div className='slidebanner__footer d-flex'>{renderBtnList()}</div>
      </div>
    </div>
  )
}

export default SlideBanner
