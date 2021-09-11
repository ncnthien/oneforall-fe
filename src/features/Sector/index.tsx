import { MainLayout } from 'layouts'
import { Switch, useRouteMatch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { ISector } from './interface'
import { Main } from './pages'

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
    </Switch>
  )
}

export default Sector
