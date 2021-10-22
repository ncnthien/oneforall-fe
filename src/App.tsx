import { useAppDispatch } from 'app/hooks'
import { getProfile } from 'features/Profile/Profile.slice'
import { useEffect } from 'react'
import Routes from './routes/index'

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const jwtTokenKey = 'jwtToken'
    const token = localStorage.getItem(jwtTokenKey)

    if (!token) {
      return
    }

    dispatch(getProfile())
  }, [])

  return (
    <div className='App'>
      <Routes />
    </div>
  )
}

export default App
