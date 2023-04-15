import ReactPlayer from "react-player";

import React from 'react'
import Movies from "../Movies";
import { useParams } from "react-router-dom";

function PlayMovie({movie}) {


  const params=useParams()

  const mov=Movies.find(el=>el.id==params.id)
  return (

    
<div>    <img src={mov.poster_url} alt="" /><ReactPlayer url={"http://red.ipfox.org:8080/movie/Etronics_siDLuZ/zB72PeaG/59083.mp4"} width='100vw'
    height='100vh'/></div>
    
  )
}

export default PlayMovie
