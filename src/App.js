import './App.css';
import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logoSearch from "./img/search.svg"
import presentBox from "./img/present-box.svg"
import campana from "./img/campana.svg"
import perfile from "./img/perfile.jpg"
import arrow from "./img/arrow.svg"
import play from "./img/play.svg"
import mute from "./img/mute.svg"
import info from "./img/info.svg"
import serieRandom from "./components/list.js"
import controlVideo from "./components/screenRandom.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="users/*" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

function Main() {
  return (
      <div>
      <Head />
      <Body />
      <div className="moreInformation"></div>
      <div className="playlist"></div>
      </div>
  )
}
function Second() {
  return (
      <div>
      hola2
      </div>
  )
}
function Head() {
  return (
    <div classname="head">
        <img href="/" classname="netflix" src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png" />
        <ol classname="list">
            <li><a href="/browser">Inicio</a></li>
            <li><a href="/browser">Series TV</a></li>
            <li><a href="/browser">Películas</a></li>
            <li><a href="/browser">Novedades más vistas</a></li>
            <li><a href="/browser">Mi lista</a></li>
        </ol>
        <div classname="rigth-header">
            <div><img classname="icono search" src={logoSearch} /></div>
            <div><p>INFANTIL</p></div>
            <div><img classname="icono present" src={presentBox} /></div>
            <div><img classname="icono campana" src={campana} /></div>
            <div><img classname="icono perfil" src={perfile} /><img classname="icono arrow" src={arrow} /></div>
        </div>
    </div>
  )
}
function Body() {
  return(
    <div classname="body">
        <div classname="dar">
            <video id="my-video" classname="firstvideo vjs-default-skin" autoplay muted data-setup='{ "techOrder": ["html5", "youtube"] }'></video>
        </div>
            <div classname="filterdark">
            <div classname="description">
                <img classname="firsttitle" src={serieRandom.titulo} alt=""/>
                <div classname="descriv">
                </div>
                <p classname="synopsis"></p>
                <div classname="buttons">
                    <button classname="reproducir"><img classname="icono" src={play}/> Reproducir</button>
                    <button classname="informacion" onClick="information('videoInformation')"><img classname="icono" src={info}/> Más Información</button>
                </div>
            </div>
        </div>
        <div classname="age">
            <button /* onClick="controlVideo(this, 'my-video')" */ className="play"><img src={mute}></img></button>
            <div classname="agenumber">
                <h1> w</h1>
            </div>
        </div>
    </div>
  )
}
export default App;