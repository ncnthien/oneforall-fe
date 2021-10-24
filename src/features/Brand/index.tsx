import { brandApi } from 'api/brandApi'
import { MainLayout } from 'layouts'
import { useEffect, useState } from 'react'
import { Switch, useParams, useRouteMatch } from 'react-router-dom'
import PublicRoute from 'routes/PublicRoute'
import { Main } from './pages'
import { IBrand, IBrandMain } from './pages/Main/interface'

const Brand: React.FC<IBrand> = ({ brandType }) => {
  const [brand, setBrand] = useState<IBrandMain['brand']>({
    _id: '',
    name: '',
    value: '',
    summary: '',
    logo: '',
    banner: '',
  })
  const match = useRouteMatch()
  const { brandName } = useParams<{ brandName: string }>()

  useEffect(() => {
    const fetchBrandApi = async () => {
      try {
        const { data } = await brandApi.get(brandName)

        setBrand(data.brand)
      } catch (err) {
        return
      }
    }

    fetchBrandApi()
  }, [brandName])

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
