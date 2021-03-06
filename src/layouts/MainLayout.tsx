import { Footer, Header } from 'components'
import { useState } from 'react'
import { ILayout } from './interface'

const MainLayout: React.FC<ILayout> = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false)

  const renderOverlay = (show: boolean): JSX.Element => (
    <div
      className={`overlay ${
        show ? 'show' : ''
      } position-absolute start-0 w-100`}
    />
  )

  return (
    <div className='position-relative'>
      {renderOverlay(showOverlay)}

      <Header setShowOverlay={setShowOverlay} />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout
