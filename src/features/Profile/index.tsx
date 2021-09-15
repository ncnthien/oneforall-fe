import { MainLayout } from 'layouts'
import { Switch, useRouteMatch } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'
import { Main } from './pages'

const Profile: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <PrivateRoute
        path={match.url}
        exact={true}
        component={Main}
        layout={MainLayout}
      />
    </Switch>
  )
}

export default Profile
