import { Dropdown } from './interface'

const brandDropDown: Dropdown = {
  id: 'brand',
  name: 'Thương hiệu',
  items: [
    {
      name: 'Lenovo',
      checked: false,
    },
    {
      name: 'Razer',
      checked: false,
    },
    {
      name: 'Dell',
      checked: false,
    },
    {
      name: 'Asus',
      checked: false,
    },
    {
      name: 'HP',
      checked: false,
    },
    {
      name: 'Microsoft',
      checked: false,
    },
    {
      name: 'Apple',
      checked: false,
    },
    {
      name: 'MSI',
      checked: false,
    },
    {
      name: 'Acer',
      checked: false,
    },
    {
      name: 'Lg',
      checked: false,
    },
  ],
}
const priceDropDown: Dropdown = {
  id: 'price',
  name: 'Khoảng giá',
  items: [
    {
      name: 'Trên 50 triệu',
      checked: false,
    },
    {
      name: '40 - 50 triệu',
      checked: false,
    },
    {
      name: '30 - 40 triệu',
      checked: false,
    },
    {
      name: '20 - 30 triệu',
      checked: false,
    },
    {
      name: '10 - 20 triệu',
      checked: false,
    },
    {
      name: 'Dưới 10 triệu',
      checked: false,
    },
  ],
}
const typeDropDown: Dropdown = {
  id: 'type',
  name: 'Loại hàng',
  items: [
    {
      name: 'Chính hãng',
      checked: false,
    },
    {
      name: 'Nhập khẩu',
      checked: false,
    },
  ],
}
const conditionDropDown: Dropdown = {
  id: 'condition',
  name: 'Tình trạng',
  items: [
    {
      name: 'New Sealed',
      checked: false,
    },
    {
      name: 'New, Fullbox',
      checked: false,
    },
    {
      name: 'New, Outlet',
      checked: false,
    },
    {
      name: 'Used',
      checked: false,
    },
  ],
}
const cpuDropDown: Dropdown = {
  id: 'cpu',
  name: 'CPU',
  items: [
    {
      name: 'Intel Dual Core',
      checked: false,
    },
    {
      name: 'Intel Core i3',
      checked: false,
    },
    {
      name: 'Intel Core i5',
      checked: false,
    },
    {
      name: 'Intel Core i7',
      checked: false,
    },
    {
      name: 'Intel Core i9',
      checked: false,
    },
    {
      name: 'Intel Xeon',
      checked: false,
    },
    {
      name: 'AMD Ryzen 3',
      checked: false,
    },
    {
      name: 'AMD Ryzen 5',
      checked: false,
    },
    {
      name: 'AMD Ryzen 7',
      checked: false,
    },
  ],
}
const ramDropDown: Dropdown = {
  id: 'ram',
  name: 'RAM',
  items: [
    {
      name: '4 GB',
      checked: false,
    },
    {
      name: '8 GB',
      checked: false,
    },
    {
      name: '12 GB',
      checked: false,
    },
    {
      name: '16 GB',
      checked: false,
    },
    {
      name: '20 GB',
      checked: false,
    },
    {
      name: '32 GB',
      checked: false,
    },
    {
      name: '64 GB',
      checked: false,
    },
    {
      name: '128 GB',
      checked: false,
    },
  ],
}
const hardDriveDropDown: Dropdown = {
  id: 'hardDrive',
  name: 'Ổ cứng',
  items: [
    {
      name: 'SSD',
      checked: false,
    },
    {
      name: 'HDD',
      checked: false,
    },
  ],
}
const hardDriveNumberDropDown: Dropdown = {
  id: 'hardDriveNumber',
  name: 'Số ổ cứng hỗ trợ',
  items: [
    { name: '1', checked: false },
    { name: '2', checked: false },
    { name: '3', checked: false },
    { name: '4', checked: false },
    { name: '5', checked: false },
  ],
}
const monitorDimensionDropDown: Dropdown = {
  id: 'monitorDimension',
  name: 'Kích thước màn hình',
  items: [
    { name: '< 13"', checked: false },
    { name: '13 - 13.9"', checked: false },
    { name: '14 - 14.9"', checked: false },
    { name: '15 - 15.9"', checked: false },
    { name: '16 - 17"', checked: false },
    { name: '> 17"', checked: false },
  ],
}
const monitorRatioDropDown: Dropdown = {
  id: 'monitorRatio',
  name: 'Tỉ lệ màn hình',
  items: [
    { name: '16:9', checked: false },
    { name: '16:10', checked: false },
    { name: '3:2', checked: false },
  ],
}
const monitorTypeDropDown: Dropdown = {
  id: 'monitorType',
  name: 'Loại màn hình',
  items: [
    { name: 'Nhám', checked: false },
    { name: 'Gương', checked: false },
    { name: 'Cảm ứng', checked: false },
  ],
}
const displayColorRangeDropDown: Dropdown = {
  id: 'displayColorRange',
  name: 'Dải màu hiển thị',
  items: [
    {
      name: 'Trên 90% sRGB',
      checked: false,
    },
    {
      name: '70 - 90% sRGB',
      checked: false,
    },
    {
      name: 'Dưới 70% sRGB',
      checked: false,
    },
  ],
}
const monitorBackgroundDropDown: Dropdown = {
  id: 'monitorBackground',
  name: 'Tấm nền màn hình',
  items: [
    {
      name: 'IPS',
      checked: false,
    },
    {
      name: 'TN',
      checked: false,
    },
    {
      name: 'OLED',
      checked: false,
    },
  ],
}
const frequencyDropDown: Dropdown = {
  id: 'frequency',
  name: 'Tần số quét',
  items: [
    {
      name: '60 Hz',
      checked: false,
    },
    {
      name: '75 Hz',
      checked: false,
    },
    {
      name: '120 Hz',
      checked: false,
    },
  ],
}
const resolutionDropDown: Dropdown = {
  id: 'resolution',
  name: 'Độ phân giải',
  items: [
    {
      name: '1366 x 768 (HD)',
      checked: false,
    },
    {
      name: '1600 x 900 (HD+)',
      checked: false,
    },
    {
      name: '1920 x 1080 (FHD)',
      checked: false,
    },
    {
      name: '1920 x 1200 (FHD+)',
      checked: false,
    },
    {
      name: '2560 x 1440 (2K)',
      checked: false,
    },
    {
      name: '3840 x 2160 (4K)',
      checked: false,
    },
    {
      name: '3840 x 2400 (4K+)',
      checked: false,
    },
    {
      name: '3072 x 1920 (3K)',
      checked: false,
    },
    {
      name: '3000 x 2000 (3K)',
      checked: false,
    },
    {
      name: '2256 x 1504 (2K)',
      checked: false,
    },
    {
      name: '2560 x 1600 (2K)',
      checked: false,
    },
  ],
}
const graphicsCardDropDown: Dropdown = {
  id: 'graphicsCard',
  name: 'Card đồ họa',
  items: [
    {
      name: 'Intel HD',
      checked: false,
    },
    {
      name: 'Intel Iris',
      checked: false,
    },
    {
      name: 'Nvidia Geforce',
      checked: false,
    },
    {
      name: 'Nvidia Quadro',
      checked: false,
    },
    {
      name: 'AMD Radeon',
      checked: false,
    },
    {
      name: 'AMD FirePro',
      checked: false,
    },
  ],
}
const graphicsMemoryDropDown: Dropdown = {
  id: 'graphicsMemory',
  name: 'Bộ nhớ đồ họa',
  items: [
    { name: '2 Gb', checked: false },
    { name: '3 Gb', checked: false },
    { name: '4 Gb', checked: false },
    { name: '6 Gb', checked: false },
    { name: '8 Gb', checked: false },
    { name: '16 Gb', checked: false },
  ],
}
const weightDropDown: Dropdown = {
  id: 'weight',
  name: 'Trọng lượng',
  items: [
    {
      name: 'Dưới 1kg',
      checked: false,
    },
    {
      name: '1 - 1.5kg',
      checked: false,
    },
    {
      name: '1.5 - 2kg',
      checked: false,
    },
    {
      name: '2 - 2.5kg',
      checked: false,
    },
    {
      name: '2.5 - 3.5kg',
      checked: false,
    },
    {
      name: 'Trên 3.5kg',
      checked: false,
    },
  ],
}
const accessoryTypeDropDown: Dropdown = {
  id: 'accessoryType',
  name: 'Loại phụ kiện',
  items: [
    {
      name: 'WIN',
      checked: false,
    },
    {
      name: 'RAM',
      checked: false,
    },
    {
      name: 'Capture',
      checked: false,
    },
    {
      name: 'EGPU',
      checked: false,
    },
    {
      name: 'Caddy Bay',
      checked: false,
    },
    {
      name: 'Chuột',
      checked: false,
    },
    {
      name: 'Router',
      checked: false,
    },
    {
      name: 'HDD',
      checked: false,
    },
    {
      name: 'SSD',
      checked: false,
    },
    {
      name: 'Balo',
      checked: false,
    },
    {
      name: 'Wwan',
      checked: false,
    },
    {
      name: 'Sạc',
      checked: false,
    },
  ],
}

export const laptopFilter = [
  brandDropDown,
  priceDropDown,
  typeDropDown,
  conditionDropDown,
  cpuDropDown,
  ramDropDown,
  hardDriveDropDown,
  hardDriveNumberDropDown,
  monitorDimensionDropDown,
  monitorRatioDropDown,
  monitorTypeDropDown,
  displayColorRangeDropDown,
  monitorBackgroundDropDown,
  frequencyDropDown,
  resolutionDropDown,
  graphicsCardDropDown,
  graphicsMemoryDropDown,
  weightDropDown,
]
export const pcFilter = [
  brandDropDown,
  priceDropDown,
  typeDropDown,
  conditionDropDown,
  cpuDropDown,
  ramDropDown,
  hardDriveDropDown,
  graphicsCardDropDown,
  graphicsMemoryDropDown,
]
export const accessoryFilter = [
  accessoryTypeDropDown,
  brandDropDown,
  priceDropDown,
]
