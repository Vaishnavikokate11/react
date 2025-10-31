import { useEffect, useState } from "react"
import "./index.css"

export const Pokemons = () =>{
    const[pokemon, setPokemon] = useState([]);

    const Api = "https://pokeapi.co/api/v2/pokemon?limit=24";

    const fetchPokemon = async () =>{
        try {
            const res = await fetch(Api)
            const data = await res.json();
            console.log(data);

            const detailPokeonData = data.results.map( async (curPokemon) =>{
            const res = await fetch(curPokemon.url)
            const data = await res.json();
            return data;
            
    })
   // console.log(detailPokeonData);

    const detailResponse = await Promise.all(detailPokeonData)
    console.log(detailResponse);
    setPokemon(detailResponse)
    
            
        } catch (error) {
            console.log(error);
            
            
        }

    }
    
    

    useEffect(() => {
        fetchPokemon();
    },[])
    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <div>
                <ul className="cards">
                    {pokemon.map((curPokemon) =>{
                        return <li key={curPokemon.id}>{curPokemon.name}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}