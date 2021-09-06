import { useState } from 'react'
import { ISort, ISortState } from './interface'
import './Sort.scss'

const Sort: React.FC<ISort> = ({ handleDecrement, handleIncrement }) => {
  const [sort, setSort] = useState<ISortState['sort']>(null)

  const handleIncrementClick = () => {
    handleIncrement()
    setSort('increment')
  }

  const handleDecrementClick = () => {
    handleDecrement()
    setSort('decrement')
  }

  return (
    <div className='sort'>
      <div className='sort__container d-flex align-items-center'>
        <span className='sort__text d-block me-3 font-bold'>Sắp xếp theo:</span>
        <button
          onClick={handleIncrementClick}
          className={`sort__item ${
            sort === 'increment' && 'sort__item--active'
          }`}
        >
          Giá tăng dần
        </button>
        <button
          onClick={handleDecrementClick}
          className={`sort__item ${
            sort === 'decrement' && 'sort__item--active'
          }`}
        >
          Giá giảm dần
        </button>
      </div>
    </div>
  )
}

export default Sort
