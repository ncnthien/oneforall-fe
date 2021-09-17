import { EAuthModalTab } from 'components/enum'

export interface IHeaderAction {
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>
  setActiveAuthModalTab: React.Dispatch<React.SetStateAction<EAuthModalTab>>
}
