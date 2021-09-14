import { HistoryIcon, UserIcon } from 'assets/images/svgs'
import { Breadcrumb, ManageNav } from 'components'
import { INavList } from 'features/Profile/pages/Main/interface'
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
                <span className='font-bold'>Chưa có giá / 0</span> đơn hàng
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
                  <tr>
                    <td>123456789</td>
                    <td>14/09/2021</td>
                    <td>Macbook Pro M1</td>
                    <td>41,000,000 VND</td>
                    <td>Chờ giao hàng</td>
                  </tr>
                  <tr>
                    <td>123456789</td>
                    <td>14/09/2021</td>
                    <td>Macbook Pro M1</td>
                    <td>41,000,000 VND</td>
                    <td>Chờ giao hàng</td>
                  </tr>
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
