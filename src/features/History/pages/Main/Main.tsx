import { orderApi } from 'api/orderApi'
import { HistoryIcon, UserIcon } from 'assets/images/svgs'
import { Breadcrumb, ManageNav } from 'components'
import { INavList } from 'features/Profile/pages/Main/interface'
import { useEffect, useState } from 'react'
import { IHistory } from './interface'
import './Main.scss'

export const manageNavList: INavList[] = [
  { title: 'Tài khoản', url: '/profile', icon: UserIcon },
  {
    title: 'Lịch sử mua hàng',
    url: '/history',
    icon: HistoryIcon,
    active: true,
  },
]

const Main: React.FC = () => {
  const [orderList, setOrderList] = useState<IHistory['orderList']>([])
  const [total, setTotal] = useState<IHistory['total']>(0)

  useEffect(() => {
    const fetchOrderApi = async () => {
      try {
        const {
          data: { orderList, total },
        } = await orderApi.get()
        setOrderList(orderList)
        setTotal(total)
      } catch (err) {
        return
      }
    }

    fetchOrderApi()
  }, [])

  const getDate = (dateString: string) => {
    const date = new Date(dateString)

    return date.toLocaleDateString()
  }
  return (
    <div className='history'>
      <div className='container'>
        <div className='history__breadcrumb'>
          <Breadcrumb url='/history' name='Lịch sử mua hàng' />
        </div>
        <div className='history__main d-flex'>
          <div className='main__nav'>
            <div className='nav__wrapper position-sticky'>
              <ManageNav navList={manageNavList} />
            </div>
          </div>
          <div className='main__history-wrapper'>
            <div className='history-wrapper__title d-flex justify-content-between align-items-center'>
              <div className='font-bold size-32'>Lịch sử mua hàng</div>
              <div className='size-16'>
                Tổng số tiền đã giao dịch:{' '}
                <span className='font-bold'>{`${
                  total ? total.toLocaleString() : 'Chưa có giá'
                } / ${orderList.length}`}</span>{' '}
                đơn hàng
              </div>
            </div>
            <div className='history-wrapper__table'>
              <table className='w-100 size-14'>
                <tbody>
                  <tr className='font-bold'>
                    <td>Đơn hàng</td>
                    <td>Thời gian mua</td>
                    <td>Sản phẩm</td>
                    <td>Tổng tiền</td>
                    <td>Trạng thái</td>
                  </tr>
                  {orderList.map(order => {
                    return (
                      <tr key={order._id}>
                        <td>{order.code}</td>
                        <td>{getDate(order.date)}</td>
                        <td>
                          {order.products.map(item => (
                            <div key={item._id}>{item.productRef.name}</div>
                          ))}
                        </td>
                        <td>
                          {order.products
                            .reduce((cost, product) => {
                              return cost + product.cost
                            }, 0)
                            .toLocaleString()}{' '}
                          VND
                        </td>
                        <td>{order.status}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
