import React, {FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 
 useEffect(() => {
    setPokemons(POKEMONS);   
 }, [])

 return (
  <div>
        <h1 className='center'> Pokédex</h1>
        <div className='container'>
            <div className='row'>
                {pokemons.map(({id, name, picture, types}) => (
                    <div  className='col s12 m6 l4' key={id}>
                        <div className='card horizontal hoverable'>
                            <div className='card-image '>
                                <img  src={picture} alt={name} />
                            </div>
                            <div className='card-stacked'>
                                <div className='card-content '>
                                    <p className='flow-text'>{name}</p> 
                                    <p>{types[0]}</p>
                                    <p>{types[1]}</p>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div> 
                ))}

            </div>
            
        </div>
    
  </div>
  
 )
}

  
export default App;

