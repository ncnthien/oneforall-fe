type Brand = string[]
type Price = string[]
type IsSale = boolean
type Type = string[]
type Condition = string[]
type Cpu = string[]
type Ram = string[]
type HardDrive = string[]
type HardDriveNumber = string[]
type MonitorDimension = string[]
type MonitorRatio = string[]
type MonitorType = string[]
type DisplayColorRange = string[]
type MonitorBackground = string[]
type Frequency = string[]
type Resolution = string[]
type GraphicsCard = string[]
type GraphicsMemory = string[]
type Weight = string[]
type AccessoryType = string[]

type Laptop = {
  brand: Brand
  price: Price
  isSale: IsSale
  type: Type
  condition: Condition
  cpu: Cpu
  ram: Ram
  hardDrive: HardDrive
  hardDriveNumber: HardDriveNumber
  monitorDimension: MonitorDimension
  monitorRatio: MonitorRatio
  monitorType: MonitorType
  displayColorRange: DisplayColorRange
  monitorBackground: MonitorBackground
  frequency: Frequency
  resolution: Resolution
  graphicsCard: GraphicsCard
  graphicsMemory: GraphicsMemory
  weight: Weight
}
type Pc = {
  brand: Brand
  price: Price
  isSale: IsSale
  type: Type
  condition: Condition
  cpu: Cpu
  ram: Ram
  hardDrive: HardDrive
  graphicsCard: GraphicsCard
  graphicsMemory: GraphicsMemory
}
type Accessory = {
  accessoryType: AccessoryType
  brand: Brand
  price: Price
  isSale: IsSale
}

const brand: Brand = [
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
]
const price: Price = [
  'Trên 50 triệu',
  '40 - 50 triệu',
  '30 - 40 triệu',
  '20 - 30 triệu',
  '10 - 20 triệu',
  'Dưới 10 triệu',
]
const type: Type = ['Chính hãng', 'Nhập khẩu']
const condition: Condition = [
  'New Sealed',
  'New, Fullbox',
  'New, Outlet',
  'Used',
]
const cpu: Cpu = [
  'Intel Dual Core',
  'Intel Core i3',
  'Intel Core i5',
  'Intel Core i7',
  'Intel Core i9',
  'Intel Xeon',
  'AMD Ryzen 3',
  'AMD Ryzen 5',
  'AMD Ryzen 7',
]
const ram: Ram = [
  '4 GB',
  '8 GB',
  '12 GB',
  '16 GB',
  '20 GB',
  '32 GB',
  '64 GB',
  '128 GB',
]
const hardDrive: HardDrive = ['SSD', 'HDD']
const hardDriveNumber: HardDriveNumber = ['1', '2', '3', '4', '5']
const monitorDimension: MonitorDimension = [
  '< 13"',
  '13 - 13.9"',
  '14 - 14.9"',
  '15 - 15.9"',
  '16 - 17"',
  '> 17"',
]
const monitorRatio: MonitorRatio = ['16:9', '16:10', '3:2']
const monitorType: MonitorType = ['Nhám', 'Gương', 'Cảm ứng']
const displayColorRange: DisplayColorRange = [
  'Trên 90% sRGB',
  '70 - 90% sRGB',
  'Dưới 70% sRGB',
]
const monitorBackground: MonitorBackground = ['IPS', 'TN', 'OLED']
const frequency: Frequency = ['60 Hz', '75 Hz', '120 Hz']
const resolution: Resolution = [
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
]
const graphicsCard: GraphicsCard = [
  'Intel HD',
  'Intel Iris',
  'Nvidia Geforce',
  'Nvidia Quadro',
  'AMD Radeon',
  'AMD FirePro',
]
const graphicsMemory: GraphicsMemory = [
  '2 Gb',
  '3 Gb',
  '4 Gb',
  '6 Gb',
  '8 Gb',
  '16 Gb',
]
const weight: Weight = [
  'Dưới 1kg',
  '1 - 1.5kg',
  '1.5 - 2kg',
  '2 - 2.5kg',
  '2.5 - 3.5kg',
  'Trên 3.5kg',
]
const accessoryType: AccessoryType = [
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
]

export interface IFilter {
  filterType: 'laptop' | 'pc' | 'accessory'
}
