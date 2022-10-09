import "../assets/css/Home.css"
import pikachu from "../assets/img/pikachu.png"

export default function Home() {

    return (

        <div className="mt-5 form-cont-home">
            <h1>Bienvenido maestro pokemón</h1>
            <div className="form-cont-img">
                <img className="form-img" src={pikachu} alt=""/>
            </div>
            
        </div>
    );
}