import { MainLayout } from 'layouts'
import { Switch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { Main } from 'features/Detail/pages'
import { useRouteMatch } from 'react-router'

const Detail: React.FC = () => {
  const { url } = useRouteMatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { params } = useRouteMatch<any>()

  return (
    <Switch>
      <PublicRoute
        path={url}
        exact
        component={() => (
          <Main params={params.productName ? params.productName : ''} />
        )}
        layout={MainLayout}
      />
    </Switch>
  )
}

export default Detail
