import Item from 'components/Item/Item'
import { IItemList } from './interface'
import './ItemList.scss'

const ItemList: React.FC<IItemList> = ({ itemList }) => {
  const renderItemList = (): JSX.Element[] => {
    return itemList.map(item => (
      <Item
        key={item.id}
        url={item.url}
        img={item.img}
        name={item.name}
        price={item.price}
        isSale={item.isSale}
        reducedPrice={item.reducedPrice}
        className='itemlist__item'
      />
    ))
  }

  return (
    <div className='itemlist mt-4'>
      <div className='itemlist__container'>
        <ul className='itemlist__list p-0 d-flex flex-wrap'>
          {renderItemList()}
        </ul>
      </div>
    </div>
  )
}

export default ItemList
