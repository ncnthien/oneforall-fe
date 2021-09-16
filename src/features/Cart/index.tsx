import { MainLayout } from 'layouts'
import { Switch, useRouteMatch } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'
import PublicRoute from 'routes/PublicRoute'
import { Main, Pay } from './pages/'

const Cart: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <PublicRoute
        path={match.url}
        exact
        component={Main}
        layout={MainLayout}
      />
      <PrivateRoute
        path={`${match.url}/pay`}
        exact
        component={Pay}
        layout={MainLayout}
      />
    </Switch>
  )
}

export default Cart
