import { certification, footerLogo } from 'assets/images'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'assets/images/svgs'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer: React.FC = () => {
  return (
    <div className='footer color-white'>
      <div className='container'>
        <div className='footer-top d-flex justify-content-between'>
          <Link to='/' className='footer-top-logo position-relative'>
            <img src={footerLogo} alt='' />
          </Link>
          <div className='footer-top__contact d-flex justify-content-between align-items-center'>
            <div className='footer-top__hotline'>
              <div className='opacity-50 size-12'>Hotline</div>
              <div className='font-bold size-14'>035 4017 056</div>
            </div>
            <div className='footer-top__social d-flex'>
              <Link
                to='#'
                className='d-flex justify-content-center align-items-center'
              >
                <YoutubeIcon />
              </Link>
              <Link
                to='#'
                className='d-flex justify-content-center align-items-center'
              >
                <FacebookIcon />
              </Link>
              <Link
                to='#'
                className='d-flex justify-content-center align-items-center'
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className='footer-main d-flex'>
          <div className='footer-main__content flex-grow-1 d-flex'>
            <div className='footer-content__item'>
              <div className='footer-content__title font-bold size-16'>
                Sản phẩm & dịch vụ
              </div>
              <div className='d-flex flex-wrap'>
                <div className='w-50'>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/dell'>Laptop Dell</Link>
                  </div>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/hp'>Laptop HP</Link>
                  </div>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/asus'>Laptop Asus</Link>
                  </div>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/lenovo'>Laptop Lenovo</Link>
                  </div>
                </div>
                <div className='w-50'>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/Acer'>Acer</Link>
                  </div>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/apple'>Macbook</Link>
                  </div>
                  <div className='footer-content__nav size-14'>
                    <Link to='/brand/razer'>Laptop Razer</Link>
                  </div>
                  <div className='footer-content__nav size-14'>
                    <Link to='/accessory'>Phụ kiện</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-content__item'>
              <div className='footer-content__title font-bold size-16'>
                Chính sách
              </div>
              <div className='footer-content__nav size-14'>
                <Link to='/#'>Bảo hành</Link>
              </div>
              <div className='footer-content__nav size-14'>
                <Link to='/#'>Vận chuyển</Link>
              </div>
              <div className='footer-content__nav size-14'>
                <Link to='/#'>Thanh toán</Link>
              </div>
            </div>
            <div className='footer-content__item'>
              <div className='footer-content__title font-bold size-16'>
                Về oneforall
              </div>
              <div className='footer-content__nav size-14'>
                <Link to='/#'>Lịch sử thành lập</Link>
              </div>
              <div className='footer-content__nav size-14'>
                <Link to='/#'>Giá trị cốt lõi</Link>
              </div>
              <div className='footer-content__nav size-14'>
                <Link to='/#'>Tầm nhìn, sứ mệnh</Link>
              </div>
            </div>
          </div>
          <div className='footer-main__blog'>
            <div className='footer-blog__title font-bold size-16'>
              Hệ thống cửa hàng
            </div>
            <div className='footer-blog__address d-flex size-14'>
              <div className='footer-blog__address-item'>
                <div className='font-bold'>Đà Nẵng:</div>
                <p>
                  <div>K211, P. Thạch Thang, Q. Hải Châu</div>
                  <Link to='#'>Chỉ đường</Link>
                </p>
                <p>
                  <div>K133 Mai Lão Bạng, P. Thuận Phước, Q. Hải Châu</div>
                  <Link to='#'>Chỉ đường</Link>
                </p>
              </div>
              <div className='footer-blog__address-item'>
                <div className='font-bold'>Quảng Nam:</div>
                <p>
                  <div>69 Mẹ Thứ, P. Vĩnh Điện, H. Điện Bàn</div>
                  <Link to='#'>Chỉ đường</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom opacity-50 d-flex justify-content-between'>
          <div>
            <div>Copyright (C) 2020</div>
            <div>
              Công ty TNHH Công nghệ oneforall Việt Nam | Số ĐKKD 0782367185 do
              Sở KHĐT Thành phố Đà Nẵng cấp ngày 26/08/2021
            </div>
          </div>
          <div>
            <img src={certification} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
