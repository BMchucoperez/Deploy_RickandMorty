import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import style from "./Detail.module.css"

export default function Detail(){
    const {id} = useParams();

    const [pjDetail, setPjDetail] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
          .then(({data}) => {
            if (data.name) {
              
              setPjDetail(data);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          
    
        // desmontaje
        return setPjDetail({});
        
        
      }, []);

    return(
        <div className={style.all}>
          <div className={style.container}>
            <h1>{pjDetail.name && pjDetail.name}</h1>
            <h2>Status: {pjDetail.status ? pjDetail.status : ":( no hay status"}</h2>
            <img 
            className={style.cardImage}
            src={pjDetail.image} alt={pjDetail.name} />
            <br />
            <section className={style.cardInfo}>
              <span>Specie: {pjDetail.species}</span>
              <span>Gender: {pjDetail.gender}</span>
              <span>Origin: {pjDetail.origin?.name}</span>
            </section>
          </div>
        </div>
    );
}