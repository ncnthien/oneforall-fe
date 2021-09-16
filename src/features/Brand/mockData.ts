import { IBrandMain } from './pages/Main/interface'

export const getBrandApi = (brandName: string): IBrandMain['brand'] => {
  if (brandName === 'dell') {
    return {
      name: 'Dell',
      desc: 'Dell là thương hiệu có quá trình phát triển lâu dài và bền bỉ trong ngành công nghiệp máy tính. Dell cung cấp nhiều dòng laptop chất lượng, cao cấp như XPS, Precision, Latitude và nổi bật với G-Series Gaming và Alienware hàng đầu dành cho game thủ.',
      logo: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444799/dell-logo_jyzdxe.png',
      img: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444800/dell-img_uecrso.jpg',
    }
  }

  if (brandName === 'hp') {
    return {
      name: 'HP',
      desc: 'HP sản xuất máy tính xách tay phục vụ mọi nhu cầu bao gồm cả cho gia đình và văn phòng tại nhà, công ty và doanh nghiệp. Đồng thời HP cung cấp đa dạng nhu cầu với dải sản phẩm rất rộng bao gồm EliteBook, ZBook, Envy, Spectre, Pavilion, EliteDesk.',
      logo: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444799/hp-logo_uvdgri.png',
      img: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444800/hp-img_yf8ylk.jpg',
    }
  }

  if (brandName === 'lenovo') {
    return {
      name: 'Lenovo',
      desc: 'Lenovo đặc biệt thành công với dòng laptop doanh nhân cao cấp ThinkPad lâu đời và mở rộng các dòng sản phẩm mới mang tính sáng tạo IdeaPad, Legion dành cho gaming và ThinkBook nhắm tới đối tượng học sinh, sinh viên.',
      logo: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444799/lenovo-logo_zbq5vi.png',
      img: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444800/lenovo-img_rbbplo.jpg',
    }
  }

  if (brandName === 'apple') {
    return {
      name: 'Apple',
      desc: 'Apple thành công khi đưa ra một hệ sinh thái riêng sử dụng nền tảng hệ điều hành do chính hãng phát triển. Các dòng laptop, PC của hãng đều có độ ổn định, hiệu năng và thời lượng pin vượt trội so với phần còn lại.',
      logo: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444800/apple-logo_sxuvdq.png',
      img: 'https://res.cloudinary.com/dkz3pvlbx/image/upload/v1631444800/apple-img_fyzmke.jpg',
    }
  }

  return { name: '', desc: '', logo: '', img: '' }
}
