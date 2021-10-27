import { homeApi } from 'api/homeApi'
import { useAppDispatch } from 'app/hooks'
import { toggleIsSale } from 'components/Filter/Filter.slice'
import {
  BrandCarousel,
  ItemCarousel,
  ItemList,
  PriceExtent,
  Section,
  SlideBanner,
} from 'features/Home/components/'
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
  const [laptopBrandList, setLaptopBrandListt] = useState<
    Home['laptopBrandList']
  >([])
  const [pcBrandList, setPcBrandListt] = useState<Home['pcBrandList']>([])

  const dispatch = useAppDispatch()

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
            laptopBrandList,
            pcBrandList,
          },
        } = await homeApi.get()

        setEventList(eventList)
        setSaleLaptopList(saleLaptopList)
        setLaptopList(laptopList)
        setPcList(pcList)
        setAccessoryList(accessoryList)
        setLaptopBrandListt(laptopBrandList)
        setPcBrandListt(pcBrandList)
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
        linkButton='/laptop'
        classFooter='custom-class-footer'
        handleClick={() => {
          dispatch(toggleIsSale())
        }}
      >
        <ItemCarousel itemList={saleLaptopList} />
      </Section>
      <Section title='Máy tính xách tay' linkButton='/laptop'>
        <BrandCarousel brandList={laptopBrandList} isSlide />
        <PriceExtent type='laptop' />
        <ItemList itemList={laptopList} />
      </Section>
      <Section title='Máy tính - PC' linkButton='/pc'>
        <BrandCarousel brandList={pcBrandList} />
        <PriceExtent type='pc' />
        <ItemList itemList={pcList} />
      </Section>
      <Section title='Phụ kiện - Gear' linkButton='/accessory'>
        <ItemList itemList={accessoryList} />
      </Section>
    </div>
  )
}

export default Main
