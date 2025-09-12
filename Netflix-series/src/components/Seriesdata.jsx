import styles from "./NetFlix.module.css";
const Seriesdata = ({data}) =>{

    const {id, name, genre, seasons, rating, img_url, watch_url} = data

    const btn_style = {
      padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color:"black",
        borderRadius: "0.5rem",
        fontWeight: "bold",
        cursor: "pointer"
        
      
    }

    const rattingClass = rating >= 8.5 ? styles["super-hit"]: styles.average;

    
    return (

      <li className={styles.card}>
        <div>
          <img src={img_url}
            width="40%"
            height="20%"
            alt={name} />
        </div>
        <div className={styles["card-content"]}>
          <h3>Name : {name}</h3>
          <h4 style={{ fontSize: "1.7rem" }}> rating : <span className={`${styles.rating} ${rattingClass} `}>
            {rating}
          </span></h4>
          <p>Genre : {genre}</p>
          <p>Seasons : {seasons}</p>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch Now</button>
          </a>
        </div>
      </li>

        )
}

export default Seriesdata;