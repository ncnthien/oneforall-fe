import { Item, NotFoundItem } from 'components'
import { ISectorList } from './interface'
import './SectorList.scss'

const SectorList: React.FC<ISectorList> = ({ sectorList }) => {
  const renderSectorList = (
    sectorList: ISectorList['sectorList']
  ): JSX.Element[] => {
    return sectorList.map(sectorItem => (
      <Item
        id={sectorItem.id}
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
      {sectorList.length > 0 ? (
        renderSectorList(sectorList)
      ) : (
        <NotFoundItem title='Không tìm thấy sản phẩm' />
      )}
    </div>
  )
}

export default SectorList