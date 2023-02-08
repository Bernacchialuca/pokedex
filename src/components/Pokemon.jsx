
import '../style/Pokemon.css'
import '../style/pokemon-types.css'

export const Pokemon = (props) => {

  const { pokemon } = props;
  
  return (
    <div className="pokemon-card">
      <div className='pokemon-img-container'>
        <img
          className="pokemon-img"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
      </div>
      <div className='card-body'>
        <div className='card-top'>
          <h3>{pokemon.name}</h3>
          <div>N°{pokemon.id}</div>
        </div>
        <div className='card-bottom'>
          <div className='pokemon-type'>
            {pokemon.types.map((type, i) => {
              return (
                <div className='pokemon-type-text' key={i}><span className={type.type.name}>{type.type.name}</span></div>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  )
}


