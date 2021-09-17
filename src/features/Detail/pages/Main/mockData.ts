import { Product } from './interface'

export const getDetailProduct = (productName: string): Product => {
  return {
    id: '6143069ebe756989f926b1bb',
    name: productName,
    url: productName,
    type: 'laptop',
    images: [
      'https://picsum.photos/580/400',
      'https://picsum.photos/580/400',
      'https://picsum.photos/580/400',
    ],
    brand: {
      name: 'lenovo',
      image: 'https://picsum.photos/80/50',
    },
    isSale: true,
    price: 50000000,
    reducedPrice: 40000000,
    details: [
      {
        name: 'Vi xử lý',
        value: 'Intel Core i5 1135G7, 4 nhân / 8 luồng',
      },
      {
        name: 'Màn hình',
        value: '15.6" FHD  (1920 x 1080) chống chói, công nghệ hiển thị WVA',
      },
      {
        name: 'Độ phủ màu',
        value: '60% sRGB, 45% NTSC',
      },
      {
        name: 'RAM',
        value: '8GB DDR4 bus 3200 MHz (Nâng cấp tối đa 32GB)',
      },
      {
        name: 'Card đồ họa',
        value: 'NVIDIA GeForce MX330 2GB GDDR5',
      },
      {
        name: 'Lưu trữ',
        value: '256GB m.2 NVMe (Nâng cấp tối đa 2TB)',
      },
      {
        name: 'Pin',
        value: '42Wh',
      },
      {
        name: 'Kết nối chính',
        value:
          '1x USB 3.2 gen type-C (chỉ xuất dữ liệu), 2 x USB-A 3.2 Gen 1, 2 x USB-A 2.0, 1 x SD, 1 x HDMI, 1 x RJ-45',
      },
      {
        name: 'Cân nặng',
        value: '1.78kg',
      },
      {
        name: 'Hệ điều hành',
        value: 'Windows 10 Home SL bản quyền',
      },
    ],
  }
}
