import { MainLayout } from 'layouts'
import { Switch, useRouteMatch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { Main, Detail } from './pages'
import { ISector } from './pages/Main/interface'

const Sector: React.FC<ISector> = ({ sectorType }) => {
  const match = useRouteMatch()

  return (
    <Switch>
      <PublicRoute
        path={match.url}
        exact={true}
        component={() => <Main sectorType={sectorType} />}
        layout={MainLayout}
      />
      <PublicRoute
        path={`${match.url}/:productName`}
        exact
        component={() => <Detail sectorType={sectorType} />}
        layout={MainLayout}
      />
    </Switch>
  )
}

export default Sector
