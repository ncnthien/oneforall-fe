import { Item, NotFoundItem } from 'components'
import { ISectorList } from './interface'
import './SectorList.scss'

const SectorList: React.FC<ISectorList> = ({ sectorList }) => {
  const renderSectorList = (
    sectorList: ISectorList['sectorList']
  ): JSX.Element[] => {
    return sectorList.map(sectorItem => (
      <Item key={sectorItem._id} {...sectorItem} />
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
