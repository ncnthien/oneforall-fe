import { MainLayout } from 'layouts'
import { Switch, useRouteMatch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { Main } from './pages/'

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
    </Switch>
  )
}

export default Cart
