import styles from "./NetFlix.module.css";

import styled from "styled-components"; 

const Seriesdata = ({data}) =>{

    const {id, name, summary, genre, seasons, rating, img_url, watch_url} = data

    //const btn_style = {

      const ButtonNew = styled.button({
         padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color:"black",
        borderRadius: "0.5rem",
        fontWeight: "bold",
        cursor: "pointer"

      })

      //another way to creating style component is

      const Rating = styled.h3`
        font-size: 1.6rem;
        color: #7dcea0;
        text-transform: capitalize;`
        
     

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
          <Rating> rating : <span className={`${styles.rating} ${rattingClass} `}>
            {rating}
          </span></Rating>
          <p className="text-3xl font-bold underline">Summary: {summary}</p>
          <p>Genre : {genre}</p>
          <p>Seasons : {seasons}</p>
          <a href={watch_url} target="_blank">
            {/*<button style={btn_style}>Watch Now</button>*/}

            <ButtonNew>Watch Now</ButtonNew>
          </a>
        </div>
      </li>

        )
}

export default Seriesdata;