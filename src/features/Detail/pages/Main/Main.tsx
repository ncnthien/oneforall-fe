import { useAppDispatch } from 'app/hooks'
import { shoppingLogo } from 'assets/images'
import { Breadcrumb } from 'components'
import { add } from 'features/Cart/Cart.slice'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IDetail, Product } from './interface'
import './Main.scss'
import { getDetailProduct } from './mockData'

// Check if there is a state passed from  <Link /> to organize <Breadcrumb />
// If there is no state received, check type of detail to organize <Breadcrumb />

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const Main: React.FC<IDetail> = ({ params }) => {
  const [product, setProduct] = useState<null | Product>(null)
  const [slideLevel, setSlideLevel] = useState<number>(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setProduct(getDetailProduct(params))
  }, [])

  const handlePrevClick = () => {
    setSlideLevel(level => --level)
  }

  const handleNextClick = () => {
    setSlideLevel(level => ++level)
  }

  const handlePreviewClick = (level: number) => () => {
    setSlideLevel(level)
  }

  const handleAddBtnClick = () => {
    if (product) {
      const item = {
        id: product._id,
        url: product.url,
        img: product.images[0],
        name: product.name,
        price: product.price,
        isSale: product.isSale,
        reducedPrice: product.reducedPrice,
      }

      dispatch(add(item))
    }
  }

  const renderSlideList = (): JSX.Element[] | JSX.Element => {
    if (product) {
      return product.images.map((image, index) => (
        <li key={index} className='detail__slide-item flex-grow-1 px-3'>
          <img src={image} className='w-100' />
        </li>
      ))
    }

    return <div></div>
  }

  const renderPreviewList = (): JSX.Element[] | JSX.Element => {
    if (product) {
      return product.images.map((image, index) => (
        <li
          key={index}
          className={
            'detail__preview-item mx-1 overflow-hidden ' +
            (index === slideLevel ? 'detail__preview-item--active' : '')
          }
          onClick={handlePreviewClick(index)}
        >
          <img src={image} alt='' className='detail__preview-img' />
        </li>
      ))
    }

    return <div></div>
  }

  const renderDetail = (): JSX.Element[] | JSX.Element => {
    if (product) {
      return product.details.map((detail, index) => (
        <p
          key={index}
          className={`size-14 ${
            index === product.details.length - 1 ? 'mb-3' : 'mb-2'
          }`}
        >
          <span className='font-bold d-inline me-2'>{detail.name}:</span>
          <span>{detail.value}</span>
        </p>
      ))
    }

    return <div></div>
  }

  return (
    <div className='detail py-2'>
      <div className='container'>
        <Breadcrumb
          url={product ? product.type : ''}
          name={product ? capitalizeFirstLetter(product.type) : ''}
        />
        <div className='detail__main d-flex align-items-center'>
          <div className='detail__left position-relative'>
            <div className='detail__slide position-relative overflow-hidden'>
              <div className='detail__brick invisible'>
                <img
                  src={product ? product.images[0] : ''}
                  alt=''
                  className='w-100'
                />
              </div>
              <ul
                className={
                  'detail__slide-list d-flex position-absolute ps-0 mb-0'
                }
                style={{
                  width: `${product ? product.images.length : 1}00%`,
                  transform: `translateX(-${
                    (slideLevel * 100) / (product ? product.images.length : 1)
                  }%)`,
                }}
              >
                {renderSlideList()}
              </ul>
            </div>
            <div
              className={
                'detail__slide-btn-wrapper position-absolute ' +
                (slideLevel === 0 ? 'invisible' : '')
              }
            >
              <button
                className='detail__prev-btn position-relative p-0'
                onClick={handlePrevClick}
              ></button>
            </div>
            <div
              className={
                'detail__slide-btn-wrapper position-absolute ' +
                (product
                  ? product.images.length - 1 === slideLevel
                    ? 'invisible'
                    : ''
                  : '')
              }
            >
              <button
                className='detail__next-btn position-relative p-0'
                onClick={handleNextClick}
              ></button>
            </div>
            <ul className='detail__preview-list ps-0 mb-0 mt-3 d-flex justify-content-center'>
              {renderPreviewList()}
            </ul>
          </div>
          <div className='detail__right ps-3'>
            <div className='detail__main'>
              <p className='detail__name font-bold size-32'>{product?.name}</p>
              <p className='detail__brand size-14'>
                <span className='font-bold'>Thương hiệu: </span>
                <Link to={product ? product.brand.name : ''}>
                  <img src={product?.brand.image} alt='' />
                </Link>
              </p>
              {renderDetail()}
              <div className='detail__price mb-3'>
                {product &&
                  (product.isSale ? (
                    <p className='detail__price-reduced font-bold mb-1 size-14'>
                      <span>Giá cũ: </span>
                      <span className='text-decoration-line-through'>
                        {product.price.toLocaleString()} ₫
                      </span>
                    </p>
                  ) : (
                    <p className='detail__price-primary color-red font-bold size-24'>
                      <span>Giá chỉ từ: </span>
                      <span className='text-decoration-line-through'>
                        {product.price.toLocaleString()} ₫
                      </span>
                    </p>
                  ))}
                {product && product.isSale && (
                  <p className='detail__price-primary font-bold size-20 color-red'>
                    <span>Giá mới: </span>
                    <span>{product.price.toLocaleString()} ₫</span>
                  </p>
                )}
              </div>
              <button
                className='detail__add-btn px-4 py-2 d-flex align-items-center color-white font-bold'
                onClick={handleAddBtnClick}
              >
                <span>
                  <img src={shoppingLogo} alt='' />
                </span>{' '}
                <span className='ms-2'>Thêm vào giỏ hàng</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
