import CriarMemoria from "../pages/criar-memorias/criar-memoria"
import {BrowserRouter, Routes, Route} from'react-router-dom'
import Detalhes from "../pages/detalhes/detalhes"
import Home from "../pages/home"

import'../src/assets/styles/global.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/criar" element={<CriarMemoria />}/>
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
