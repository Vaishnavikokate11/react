const Seriesdata = ({data}) =>{

    const {id, name, genre, seasons, rating, img_url, watch_url} = data
    return (

      <li>
        <div>
    <img src={img_url}
          width="50%"
          height="40%"
          alt={name}></img>
          </div>
      
      <h3>Name : {name}</h3>
      <h4> Ratting : {rating}</h4>
      <h4>Genre : {genre}</h4>
      <h4>Seasons : {seasons}</h4>
      <a href={watch_url} target="_blank">
      {/*<button>{age >= 18 ? "Watch Now" : "Not Available"}</button>*/}

      {/*<button>{canWatch}</button>*/}

      {/* last method for if else is */}

      <button>Watch Now</button>
      </a>

      </li>

        )
}

export default Seriesdata;