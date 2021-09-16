import { SearchIcon } from 'assets/images/svgs'
import { Input } from 'reactstrap'
import './SearchInput.scss'

const SearchInput: React.FC = () => {
  return (
    <div className='search-input position-relative'>
      <Input
        type='text'
        name='search'
        placeholder='Tìm kiếm trên oneforall'
        className='w-100 size-14'
      />
      <span className='search-input__btn position-absolute d-flex justify-content-center align-items-center'>
        <SearchIcon />
      </span>
    </div>
  )
}

export default SearchInput
