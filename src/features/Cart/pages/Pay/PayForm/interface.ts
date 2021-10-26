import { Pay } from '../interface'

export interface IPayForm {
  info: Pay
  setInfo: React.Dispatch<React.SetStateAction<Pay>>
  err: string
}
