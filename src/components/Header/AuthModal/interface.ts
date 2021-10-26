import { EAuthModalTab } from 'components/enum'

export interface LoginBody {
  email: string
  password: string
}

export interface RegisterBody {
  email: string
  username: string
  password: string
}

export interface AuthModalState {
  showAuthModal: boolean
  activeAuthModalTab: EAuthModalTab.LOGIN | EAuthModalTab.REGISTER
}
