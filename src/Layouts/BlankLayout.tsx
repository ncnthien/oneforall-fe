import { ILayout } from './interface'

const BlankLayout: React.FC<ILayout> = ({ children }) => {
  return <div>{children}</div>
}

export default BlankLayout
