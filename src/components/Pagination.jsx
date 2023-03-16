
import '../style/Pagination.css'

export const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className="pagination">
            <button className="button-pagination" onClick={onLeftClick}>
        <div className="icon">
          🡠
        </div>
        </button>
      <div>
        <p className='pagination-number'>{page} de {totalPages}</p>
      </div>
        <button className="button-pagination" onClick={onRightClick}>
        <div className="icon">
          🡢
        </div>
         </button>
        </div>
    )
}