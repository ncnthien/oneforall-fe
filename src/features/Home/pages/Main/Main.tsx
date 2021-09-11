import {
  BrandCarousel,
  ItemList,
  PriceExtent,
  Section,
  ItemCarousel,
  SlideBanner,
} from 'features/Home/components/'
import {
  laptopBrand,
  pcBrand,
} from 'features/Home/components/BrandCarousel/mockData'
import { extentList } from 'features/Home/components/PriceExtent/mockData'
import './Main.scss'
import { laptopList, saleLaptopList, pcList, accessoryList } from './mockData'
import { eventList } from 'features/Home/components/SlideBanner/mockData'

const Main: React.FC = () => {
  return (
    <div className='home container'>
      <SlideBanner eventList={eventList} />
      <Section
        title='Giảm giá sốc'
        linkButton='/'
        classFooter='custom-class-footer'
      >
        <ItemCarousel itemList={saleLaptopList} />
      </Section>
      <Section title='Máy tính xách tay' linkButton='/laptop'>
        <BrandCarousel brandList={laptopBrand} isSlide />
        <PriceExtent extentList={extentList} />
        <ItemList itemList={laptopList} />
      </Section>
      <Section title='Máy tính - PC' linkButton='/pc'>
        <BrandCarousel brandList={pcBrand} />
        <PriceExtent extentList={extentList} />
        <ItemList itemList={pcList} />
      </Section>
      <Section title='Phụ kiện - Gear' linkButton='/accessory'>
        <ItemList itemList={accessoryList} />
      </Section>
    </div>
  )
}

export default Main
