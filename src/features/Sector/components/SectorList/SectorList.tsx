import { Item } from 'components'
import { NotFoundItem } from '..'
import { ISectorList } from './interface'
import './SectorList.scss'

const SectorList: React.FC<ISectorList> = ({ sectorList }) => {
  const renderSectorList = (
    sectorList: ISectorList['sectorList']
  ): JSX.Element[] => {
    return sectorList.map(sectorItem => (
      <Item
        key={sectorItem.id}
        url={sectorItem.url}
        img={sectorItem.img}
        name={sectorItem.name}
        isSale={sectorItem.isSale}
        price={sectorItem.price}
        reducedPrice={sectorItem.reducedPrice}
      />
    ))
  }

  return (
    <div className='sector-list d-flex flex-wrap'>
      {sectorList.length > 0 ? renderSectorList(sectorList) : <NotFoundItem />}
    </div>
  )
}

export default SectorList
