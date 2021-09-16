import { MainLayout } from 'layouts'
import { useEffect, useState } from 'react'
import { Switch, useParams, useRouteMatch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { IBrand, ISector } from './interface'
import { getBrandApi } from './mockData'
import { Main, Detail } from './pages'

const Sector: React.FC<ISector> = ({ sectorType, brandPage }) => {
  const [brand, setBrand] = useState<IBrand>()
  const match = useRouteMatch()
  const { brandName } = useParams<{ brandName: string }>()

  useEffect(() => {
    // Get info brand from API here
    if (brandPage) {
      setBrand(getBrandApi(brandName))
    }
  }, [])

  return (
    <Switch>
      <PublicRoute
        path={match.url}
        exact={true}
        component={() => (
          <Main sectorType={sectorType} brand={brandPage ? brand : undefined} />
        )}
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
