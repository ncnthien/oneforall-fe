import { ISectorItemExtent } from './interface'
import './SectorItemExtent.scss'

const SectorItemExtent: React.FC<ISectorItemExtent> = ({
  start,
  end,
  total,
}) => {
  return (
    <div className='sector-item-extent size-14'>
      <span className='font-bold'>{`${start} - ${end}`}</span>{' '}
      <span>{`trên ${total} sản phẩm`}</span>
    </div>
  )
}

export default SectorItemExtent
