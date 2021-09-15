import { Cart, History, Home, Profile, Sector } from 'features'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/laptop'
          component={() => <Sector sectorType='laptop' />}
        />
        <Route path='/pc' component={() => <Sector sectorType='pc' />} />
        <Route
          path='/accessory'
          component={() => <Sector sectorType='accessory' />}
        />
        <Route
          path='/brand/:brandName'
          component={() => <Sector sectorType='laptop' brandPage />}
        />
        <Route path='/cart' component={Cart} />
        <Route path='/profile' component={() => <Profile />} />
        <Route path='/history' component={() => <History />} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
