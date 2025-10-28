import "./pokemon.css"
import { useEffect, useState } from "react"

export const FetchDate = () =>{

    const [apiData, setapiData] = useState(null)

    const Api = "https://pokeapi.co/api/v2/pokemon/squirtle"

    const fetchPokemon = () =>{
        fetch(Api)
        .then((res) => res.json())
         .then((data) => {
         setapiData(data)
    })
    .catch((error) => console.log())


    }

    useEffect(() =>{
        fetchPokemon();
        
    },[])

    if (apiData){
    
    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img 
                        src={apiData. sprites.other.dream_world.front_default}
                        alt={apiData.name}
                        />
                    </figure>
                    <h1>{apiData.name}</h1>
                </li>
            </ul>

        </section>
    )
}}