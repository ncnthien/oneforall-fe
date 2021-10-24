import { homeApi } from 'api/homeApi'
import {
  BrandCarousel,
  ItemCarousel,
  ItemList,
  PriceExtent,
  Section,
  SlideBanner,
} from 'features/Home/components/'
import {
  laptopBrand,
  pcBrand,
} from 'features/Home/components/BrandCarousel/mockData'
import { extentList } from 'features/Home/components/PriceExtent/mockData'
import { useEffect, useState } from 'react'
import { Home } from './interface'
import './Main.scss'

const Main: React.FC = () => {
  const [eventList, setEventList] = useState<Home['eventList']>([])

  const [saleLaptopList, setSaleLaptopList] = useState<Home['saleLaptopList']>(
    []
  )
  const [laptopList, setLaptopList] = useState<Home['laptopList']>([])
  const [pcList, setPcList] = useState<Home['pcList']>([])
  const [accessoryList, setAccessoryList] = useState<Home['accessoryList']>([])

  useEffect(() => {
    const fetchHomeApi = async () => {
      try {
        const {
          data: {
            eventList,
            saleLaptopList,
            laptopList,
            pcList,
            accessoryList,
          },
        } = await homeApi.get()

        setEventList(eventList)
        setSaleLaptopList(saleLaptopList)
        setLaptopList(laptopList)
        setPcList(pcList)
        setAccessoryList(accessoryList)
      } catch (err) {
        return
      }
    }

    fetchHomeApi()
  }, [])

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
