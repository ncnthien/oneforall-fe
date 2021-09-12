import { ISectorSort } from './interface'
import './SectorSort.scss'

const SectorSort: React.FC<ISectorSort> = ({ sort, handleSortClick }) => {
  return (
    <div className='sector-sort size-14'>
      <span className='font-bold'>Sắp xếp theo:</span>
      <span
        className={sort === 'ascend' ? 'active' : ''}
        onClick={() => handleSortClick('ascend')}
      >
        Giá tăng dần
      </span>
      <span
        className={sort === 'descend' ? 'active' : ''}
        onClick={() => handleSortClick('descend')}
      >
        Giá giảm dần
      </span>
    </div>
  )
}

export default SectorSort
