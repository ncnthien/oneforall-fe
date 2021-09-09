import Filter from 'components/Filter/Filter'
import './Main.scss'

const Main: React.FC = () => {
  return (
    <div className='home container'>
      <Filter filterType='accessory' />
    </div>
  )
}

export default Main
