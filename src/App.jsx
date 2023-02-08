import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Searchbar } from './components/Searchbar'
import { Pokedex } from './components/Pokedex'
import { getPokemons, getPokemonData, searchPokemon } from './logic/api'

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState()
  const [page, setPage] = useState(0)

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(1000, 1000 * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 1000))
    } catch (err) { }
  }

  useEffect(() => { fetchPokemons() }, [page])
  
  const onSearch = async (pokemon) => { 
    setLoading(true)
    const results = await searchPokemon(pokemon)
    setPokemons([results])
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <div className="App">
        <Searchbar onSearch={onSearch} />
        <Pokedex
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      </div>
      </div>
  )
}

export default App
