import { Home, Laptop } from 'features'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/laptop' component={Laptop} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
