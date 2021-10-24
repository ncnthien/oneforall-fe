import './BrandBanner.scss'
import { IBrandBanner } from './interface'

const BrandBanner: React.FC<IBrandBanner> = ({
  brand,
  brandFilter,
  total,
  setBrandFilter,
}) => {
  return (
    <div className='brand-banner '>
      <div className='brand-banner__brand-container d-flex'>
        <div className='brand-container__brand-info position-relative'>
          <div className='brand-info__brand-text'>
            <div className='brand-text__title font-bold size-32'>
              {brand.name}
            </div>
            <div className='brand-text__desc size-14'>{brand.summary}</div>
          </div>
        </div>
        <div className='brand-container__brand-img position-relative'>
          <div className='brand-img__img position-absolute'>
            <img src={brand.banner} alt='' />
          </div>
          <div className='brand-img__logo position-absolute d-flex justify-content-center align-items-center'>
            <img src={brand.logo} alt='' />
          </div>
        </div>
      </div>
      <div className='brand-banner__tab d-flex size-20'>
        <div
          className={`tab__item ${
            brandFilter === 'laptop' ? 'active' : ''
          } position-relative d-flex`}
          onClick={() => setBrandFilter('laptop')}
        >
          <span className='font-bold'>Laptop</span>
          <span>{total.laptop}</span>
        </div>
        <div
          className={`tab__item ${
            brandFilter === 'pc' ? 'active' : ''
          } position-relative d-flex`}
          onClick={() => setBrandFilter('pc')}
        >
          <span className='font-bold'>PC</span>
          <span>{total.pc}</span>
        </div>
        <div
          className={`tab__item ${
            brandFilter === 'accessory' ? 'active' : ''
          } position-relative d-flex`}
          onClick={() => setBrandFilter('accessory')}
        >
          <span className='font-bold'>Phụ kiện</span>
          <span>{total.accessory}</span>
        </div>
      </div>
    </div>
  )
}

export default BrandBanner
