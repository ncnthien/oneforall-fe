import { Link } from 'react-router-dom'
import { ISection } from './interface'
import './Section.scss'

const Section: React.FC<ISection> = ({
  children,
  title,
  linkButton,
  classFooter,
  handleClick,
}) => {
  return (
    <div className='section'>
      <div className='section__header mb-2 font-bold size-32'>{title}</div>
      <div className='section__main'>{children}</div>
      <div
        className={
          'section__footer text-center ' + (classFooter ? classFooter : '')
        }
      >
        <Link
          to={linkButton}
          onClick={handleClick}
          className='section__btn text-decoration-none d-inline-block color-grey font-bold size-14'
        >
          Xem tất cả
        </Link>
      </div>
    </div>
  )
}

export default Section
