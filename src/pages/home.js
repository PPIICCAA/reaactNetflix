import { Link } from "react-router-dom";
import logoSearch from "../img/search.svg"
import presentBox from "../img/present-box.svg"
import campana from "../img/campana.svg"
import perfile from "../img/perfile.jpg"
import arrow from "../img/arrow.svg"
import play from "../img/play.svg"
import mute from "../img/mute.svg"
import info from "../img/info.svg"
import serie from "../components/list.js"
import numberRandom from "../components/numberRandom.js"
// import controlVideo from "../components/screenRandom.js"
function Main() {
    return (
        <div>
        <Head />
        <Body />
        <div class="moreInformation"></div>
        <div class="playlist"></div>
        </div>
    )
  }
  
function Head() {
return (
    <div class="head">
        <img href="/" class="netflix" src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014.png" />
        <ol class="list">
            <li><Link class="link" to="/">Inicio</Link></li>
            <li><Link class="link" to="/series">Series TV</Link></li>
            <li><Link class="link" to="/">Películas</Link></li>
            <li><Link class="link" to="/">Novedades más vistas</Link></li>
            <li><Link class="link" to="/">Mi lista</Link></li>
        </ol>
        <div class="rigth-header">
            <div><img class="icono search" src={logoSearch} /></div>
            <div><p>INFANTIL</p></div>
            <div><img class="icono present" src={presentBox} /></div>
            <div><img class="icono campana" src={campana} /></div>
            <div><img class="icono perfil" src={perfile} /><img class="icono arrow" src={arrow} /></div>
        </div>
    </div>
)
}
function Body() {
return(
    <div class="body">
        <div class="dar">
            <video id="my-video" 
            class="firstvideo vjs-default-skin" 
            autoplay muted data-setup='{ "techOrder": ["html5", "youtube"] }'
            poster="http://video-js.zencoder.com/oceans-clip.png"
            ></video>
        </div>
            <div class="filterdark">
            <div class="description">
                <img class="firsttitle" src={serie[numberRandom].titulo} alt={serie[numberRandom].alt} />
                <div class="descriv">
                    {serie[numberRandom].top}<h2>{serie[numberRandom].h2}</h2>
                </div>
                <p class="synopsis">{serie[numberRandom].synopsis}</p>
                <div class="buttons">
                    <button class="reproducir"><img class="icono" src={play}/> Reproducir</button>
                    <button class="informacion" onClick="information('videoInformation')"><img class="icono" src={info} /> Más Información</button>
                </div>
            </div>
        </div>
        <div class="age">
            <button onClick="controlVideo(this, 'my-video')" class="play"><img src={mute}></img></button>
            <div class="agenumber">
                <h1 > {serie[numberRandom].age}+ </h1>
            </div>
        </div>
    </div>
)
}

  export default Main