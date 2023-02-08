import '../style/Pagination.css'

export const Pagination = (props) => {

  const { onLeftClick, onRightClick, page, totalPages } = props

  return (
    <div className="pagination">
      <button className='button-pagination' onClick={onLeftClick}> ⇐ </button>
      <div>{page} de {totalPages}</div>
      <button className='button-pagination' onClick={onRightClick}> ⇒ </button>
   </div>
 )
}