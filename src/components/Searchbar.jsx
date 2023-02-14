import { useState } from 'react';
import '../style/Searchbar.css'

export const Searchbar = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState()
    
  
    const handleChange = e => {
      setSearch((e.target.value).toLowerCase())
    }
  
    const handleClick = async e => {
      e.preventDefault()
      onSearch(search)
     
    }
  
    return (
      <div>
        <form className="searchbar-container" onSubmit={handleClick}>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Buscá un pokemon..."
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button className="searchbar-btn">Buscar</button>
          </div>
        </form>
      </div>
    )
  
  }