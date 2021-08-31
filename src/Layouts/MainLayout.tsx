import { ILayout } from './interface'
import { Header } from 'components'

const MainLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
