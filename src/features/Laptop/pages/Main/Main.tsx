import { Breadcumb, Filter } from 'components'
import './Main.scss'

const Main: React.FC = () => {
  return (
    <div className='laptop'>
      <div className='container'>
        <div className='laptop__breadcumb'>
          <Breadcumb url='/laptop' name='Laptop' />
        </div>
        <div className='laptop__title font-bold size-32'>Máy tính xách tay</div>

        <div className='laptop__content d-flex'>
          <div className='laptop__filter'>
            <div className='laptop__count size-14'>
              <span className='font-bold'>1 - 24</span>{' '}
              <span>trên 284 sản phẩm</span>
            </div>
            <div className='laptop__filter-container position-sticky'>
              <Filter filterType='laptop' />
            </div>
          </div>
          <div className='laptop__list'></div>
        </div>
      </div>
    </div>
  )
}

export default Main
