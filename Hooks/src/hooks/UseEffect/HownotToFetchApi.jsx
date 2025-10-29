import "./pokemon.css"
import { useEffect, useState } from "react"

export const FetchDate = () =>{

    const [apiData, setapiData] = useState(null)
    const[loading, setLoading] = useState(true);
    const[error , setError] = useState("")

    const Api = "https://pokeapi.co/api/v2/pokemon/squirtle"

    // const fetchPokemon = () =>{
    //     fetch(Api)
    //     .then((res) => res.json())
    //      .then((data) => {
    //      setapiData(data)
    //      setLoading(false)
    // })
    // .catch((error) => {
    //     console.log()
    //     setError(error)
    //     setLoading(false)
    // })


    //}

    const fetchPokemon = async () =>{
        try {
            const res = await fetch(Api);
            const data = await res.json();
            setapiData(data);
            setLoading(false);
        } catch (error) {
            console.log()
            setError(error)
             setLoading(false)
            
        }
    }

    useEffect(() =>{
        fetchPokemon();
        
    },[])

    // if (apiData){

    if(loading)
        return(
        <div>
            <h1>Loading...</h1>
        </div>
        )
    
    if(error)
        return(
            <div>
                <h1>Error: {error.message}</h1>
            </div>
    )
    
    
    return (
        <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img 
                        src={apiData.sprites.other.dream_world.front_default}
                        alt={apiData.name}
                        />
                    </figure>
                    <h1>{apiData.name}</h1>
                </li>
            </ul>

        </section>
    )
}