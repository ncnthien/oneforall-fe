import { EAuthModalTab } from 'components/enum'

export interface IAuthModal {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<EAuthModalTab>>
}

export interface LoginFormProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export interface RegisterFormProps {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export interface LoginBody {
  email: string
  password: string
}

export interface RegisterBody {
  email: string
  username: string
  password: string
}
