export type Items = string[]
export type Dropdown = {
  id: string
  name: string
  items: Items
}

const brandDropDown: Dropdown = {
  id: 'brand',
  name: 'Thương hiệu',
  items: [
    'Lenovo',
    'Razer',
    'Dell',
    'Asus',
    'HP',
    'Microsoft',
    'Apple',
    'MSI',
    'Acer',
    'Lg',
  ],
}
const priceDropDown: Dropdown = {
  id: 'price',
  name: 'Khoảng giá',
  items: [
    'Trên 50 triệu',
    '40 - 50 triệu',
    '30 - 40 triệu',
    '20 - 30 triệu',
    '10 - 20 triệu',
    'Dưới 10 triệu',
  ],
}
const typeDropDown: Dropdown = {
  id: 'type',
  name: 'Loại hàng',
  items: ['Chính hãng', 'Nhập khẩu'],
}
const conditionDropDown: Dropdown = {
  id: 'condition',
  name: 'Tình trạng',
  items: ['New Sealed', 'New, Fullbox', 'New, Outlet', 'Used'],
}
const cpuDropDown: Dropdown = {
  id: 'cpu',
  name: 'CPU',
  items: [
    'Intel Dual Core',
    'Intel Core i3',
    'Intel Core i5',
    'Intel Core i7',
    'Intel Core i9',
    'Intel Xeon',
    'AMD Ryzen 3',
    'AMD Ryzen 5',
    'AMD Ryzen 7',
  ],
}
const ramDropDown: Dropdown = {
  id: 'ram',
  name: 'RAM',
  items: [
    '4 GB',
    '8 GB',
    '12 GB',
    '16 GB',
    '20 GB',
    '32 GB',
    '64 GB',
    '128 GB',
  ],
}
const hardDriveDropDown: Dropdown = {
  id: 'hardDrive',
  name: 'Ổ cứng',
  items: ['SSD', 'HDD'],
}
const hardDriveNumberDropDown: Dropdown = {
  id: 'hardDriveNumber',
  name: 'Số ổ cứng hỗ trợ',
  items: ['1', '2', '3', '4', '5'],
}
const monitorDimensionDropDown: Dropdown = {
  id: 'monitorDimension',
  name: 'Kích thước màn hình',
  items: [
    '< 13"',
    '13 - 13.9"',
    '14 - 14.9"',
    '15 - 15.9"',
    '16 - 17"',
    '> 17"',
  ],
}
const monitorRatioDropDown: Dropdown = {
  id: 'monitorRatio',
  name: 'Tỉ lệ màn hình',
  items: ['16:9', '16:10', '3:2'],
}
const monitorTypeDropDown: Dropdown = {
  id: 'monitorType',
  name: 'Loại màn hình',
  items: ['Nhám', 'Gương', 'Cảm ứng'],
}
const displayColorRangeDropDown: Dropdown = {
  id: 'displayColorRange',
  name: 'Dải màu hiển thị',
  items: ['Trên 90% sRGB', '70 - 90% sRGB', 'Dưới 70% sRGB'],
}
const monitorBackgroundDropDown: Dropdown = {
  id: 'monitorBackground',
  name: 'Tấm nền màn hình',
  items: ['IPS', 'TN', 'OLED'],
}
const frequencyDropDown: Dropdown = {
  id: 'frequency',
  name: 'Tần số quét',
  items: ['60 Hz', '75 Hz', '120 Hz'],
}
const resolutionDropDown: Dropdown = {
  id: 'resolution',
  name: 'Độ phân giải',
  items: [
    '1366 x 768 (HD)',
    '1600 x 900 (HD+)',
    '1920 x 1080 (FHD)',
    '1920 x 1200 (FHD+)',
    '2560 x 1440 (2K)',
    '3840 x 2160 (4K)',
    '3840 x 2400 (4K+)',
    '3072 x 1920 (3K)',
    '3000 x 2000 (3K)',
    '2256 x 1504 (2K)',
    '2560 x 1600 (2K)',
  ],
}
const graphicsCardDropDown: Dropdown = {
  id: 'graphicsCard',
  name: 'Card đồ họa',
  items: [
    'Intel HD',
    'Intel Iris',
    'Nvidia Geforce',
    'Nvidia Quadro',
    'AMD Radeon',
    'AMD FirePro',
  ],
}
const graphicsMemoryDropDown: Dropdown = {
  id: 'graphicsMemory',
  name: 'Bộ nhớ đồ họa',
  items: ['2 Gb', '3 Gb', '4 Gb', '6 Gb', '8 Gb', '16 Gb'],
}
const weightDropDown: Dropdown = {
  id: 'weight',
  name: 'Trọng lượng',
  items: [
    'Dưới 1kg',
    '1 - 1.5kg',
    '1.5 - 2kg',
    '2 - 2.5kg',
    '2.5 - 3.5kg',
    'Trên 3.5kg',
  ],
}
const accessoryTypeDropDown: Dropdown = {
  id: 'accessoryType',
  name: 'Loại phụ kiện',
  items: [
    'WIN',
    'RAM',
    'Capture',
    'EGPU',
    'Caddy Bay',
    'Chuột',
    'Router',
    'HDD',
    'SSD',
    'Balo',
    'Wwan',
    'Sạc',
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
export const initialApprovedFilter = {
  brand: [],
  price: [],
  type: [],
  condition: [],
  cpu: [],
  ram: [],
  hardDrive: [],
  hardDriveNumber: [],
  monitorDimension: [],
  monitorRatio: [],
  monitorType: [],
  displayColorRange: [],
  monitorBackground: [],
  frequency: [],
  resolution: [],
  graphicsCard: [],
  graphicsMemory: [],
  weight: [],
  accessoryType: [],
}
export interface IFilter {
  filterType: 'laptop' | 'pc' | 'accessory'
}

export interface IFilterState {
  filter: typeof laptopFilter | typeof pcFilter | typeof accessoryFilter | []
  approvedFilter: {
    brand: Items
    price: Items
    type: Items
    condition: Items
    cpu: Items
    ram: Items
    hardDrive: Items
    hardDriveNumber: Items
    monitorDimension: Items
    monitorRatio: Items
    monitorType: Items
    displayColorRange: Items
    monitorBackground: Items
    frequency: Items
    resolution: Items
    graphicsCard: Items
    graphicsMemory: Items
    weight: Items
    accessoryType: Items
  }
  showSaleOnly: boolean
}
