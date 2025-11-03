import { useEffect, useState } from "react"
import "./index.css"
import { PokemonCard } from "./PokemonCard";

export const Pokemons = () =>{
    const[pokemon, setPokemon] = useState([]);
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)
    const[search, setSearch] = useState("")

    const Api = "https://pokeapi.co/api/v2/pokemon?limit=124";

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
    setLoading(false)    
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(error)
            
            
        }

    }
    
    

    useEffect(() => {
        fetchPokemon();
    },[])

    //serach functionility
    const searchData = pokemon.filter((curPokemon) =>
         curPokemon.name.toLowerCase().includes(search.toLowerCase())
)

    if(loading){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(error){
        return(
            <h1>{error.message}</h1>
        )
    }
    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
                        <div className="pokemon-search">
                                <input
                                    type="text"
                                    placeholder="search pokemon"
                                    value={search}
                                    onChange={(ev) => setSearch(ev.target.value)}
                                />
                        </div>
            <div>
                <ul className="cards">
                    {searchData.map((curPokemon) =>{
                        return (
                            <PokemonCard key={curPokemon.id} pokemonData = {curPokemon}/>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}