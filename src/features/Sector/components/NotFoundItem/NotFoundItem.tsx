import notFoundSectorItem from 'assets/images/notFoundSectorItem.png'

const NotFoundItem: React.FC = () => {
  return (
    <div className='d-flex flex-column align-items-center w-100 p-4'>
      <div>
        <img src={notFoundSectorItem} alt='' />
      </div>
      <h4 className='font-bold size-20'>Không tìm thấy sản phẩm</h4>
    </div>
  )
}

export default NotFoundItem
