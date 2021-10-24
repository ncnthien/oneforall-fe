import { Item } from 'components'
import { useState } from 'react'
import { IItemCarousel } from './interface'
import './ItemCarousel.scss'

const ItemCarousel: React.FC<IItemCarousel> = ({ itemList }) => {
  const [slideLevel, setSlideLevel] = useState<number>(0)
  // step for each slide level to slide the carousel
  const step = 19.95

  const renderItemList = (): JSX.Element[] => {
    return itemList.map(item => (
      <Item key={item._id} {...item} className='itemcarousel__item' />
    ))
  }

  const handlePrevBtn = (): void => {
    const newLevel = slideLevel - 1
    setSlideLevel(newLevel)
  }

  const handleNextBtn = (): void => {
    const newLevel = slideLevel + 1
    setSlideLevel(newLevel)
  }

  return (
    <div className='itemcarousel position-relative'>
      <div className='itemcarousel__main position-relative overflow-hidden'>
        <div className='itemcarousel__brick'>
          <Item
            _id='brick'
            name=''
            type='laptop'
            brand=''
            subBrand=''
            images={[]}
            isSale={false}
            quantity={0}
            price={0}
            className='invisible'
          />
        </div>
        <ul
          className='itemcarousel__list d-flex w-100 position-absolute ps-0 mb-0'
          style={{
            transform: `translateX(-${slideLevel * step}%)`,
          }}
        >
          {renderItemList()}
        </ul>
      </div>
      <div
        className={
          'itemcarousel__btn-wrapper itemcarousel__prev-btn-wrapper position-absolute' +
          (slideLevel === 0 ? ' d-none' : '')
        }
      >
        <button
          className='itemcarousel__btn itemcarousel__prev-btn position-relative'
          onClick={handlePrevBtn}
        ></button>
      </div>
      <div
        className={
          'itemcarousel__btn-wrapper itemcarousel__next-btn-wrapper position-absolute' +
          (slideLevel === 5 ? ' d-none' : '')
        }
      >
        <button
          className='itemcarousel__btn itemcarousel__next-btn position-relative'
          onClick={handleNextBtn}
        ></button>
      </div>
    </div>
  )
}

export default ItemCarousel
