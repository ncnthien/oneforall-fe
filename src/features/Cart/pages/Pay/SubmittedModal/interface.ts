import { Pay } from '../interface'

export interface ISubmittedModal {
  info: Pay
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  cost: number
}
