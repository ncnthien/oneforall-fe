import { EAuthModalTab } from 'components/enum'

export interface IAuthModal {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<EAuthModalTab>>
}
