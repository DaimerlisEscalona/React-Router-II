import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./view/Home";
import Pokemones from "./view/Pokemones";
import DetallePokemones from "./view/DetallePokemon";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:name" element={<DetallePokemones />} />
          </Routes>
        </BrowserRouter>     

  )
}

export default App;
