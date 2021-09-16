import { Breadcrumb } from 'components'
import { useRouteMatch } from 'react-router'
import './Detail.scss'
import { IDetail } from './interface'

const Detail: React.FC<IDetail> = ({ sectorType }) => {
  const match = useRouteMatch()

  return (
    <div className='detail'>
      <Breadcrumb url={match.url} name={''} />
    </div>
  )
}

export default Detail
