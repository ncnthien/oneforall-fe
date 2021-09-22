import { SearchIcon } from 'assets/images/svgs'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Input } from 'reactstrap'
import queryString from 'query-string'
import './SearchInput.scss'

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    const { q } = queryString.parse(location.search)

    setValue(q as string)
  }, [])

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const handleSubmit = (): void => {
    if (value) {
      history.push(`/search?q=${value}`)
    }
  }

  return (
    <div className='search-input position-relative'>
      <Input
        className='w-100 size-14'
        type='text'
        name='search'
        placeholder='Tìm kiếm trên oneforall'
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <span
        className='search-input__btn position-absolute d-flex justify-content-center align-items-center'
        onClick={handleSubmit}
      >
        <SearchIcon />
      </span>
    </div>
  )
}

export default SearchInput
