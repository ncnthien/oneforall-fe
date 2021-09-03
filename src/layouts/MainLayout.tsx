import { Header } from 'components'
import { useState } from 'react'
import { ILayout } from './interface'

const MainLayout: React.FC<ILayout> = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false)

  const renderOverlay = (show: boolean): JSX.Element => {
    if (show) {
      return <div className='overlay show position-absolute start-0 w-100' />
    }

    return <div className='overlay position-absolute start-0 w-100' />
  }

  return (
    <div>
      {renderOverlay(showOverlay)}

      <Header setShowOverlay={setShowOverlay} />
      <div>{children}</div>
    </div>
  )
}

export default MainLayout
