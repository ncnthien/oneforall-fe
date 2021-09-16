import { getBrandApi } from 'features/Brand/mockData'
import { MainLayout } from 'layouts'
import { useEffect, useState } from 'react'
import { Switch, useParams, useRouteMatch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { Main } from './pages'
import { IBrand, IBrandMain } from './pages/Main/interface'

const Brand: React.FC<IBrand> = ({ brandType }) => {
  const [brand, setBrand] = useState<IBrandMain['brand']>({
    name: '',
    desc: '',
    img: '',
    logo: '',
  })
  const match = useRouteMatch()
  const { brandName } = useParams<{ brandName: string }>()

  useEffect(() => {
    // Get info brand from API here
    setBrand(getBrandApi(brandName))
  }, [])

  return (
    <Switch>
      <PublicRoute
        path={match.url}
        exact={true}
        component={() => <Main brandType={brandType} brand={brand} />}
        layout={MainLayout}
      />
    </Switch>
  )
}

export default Brand
