import { Routes, Route } from "react-router-dom"

import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Notfound from './pages/notfound/Notfound';
import { Header, Wrapper } from "./components/Index";


function App() {
  return (
    <Wrapper className="mt-10">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </Wrapper>
  )
}

export default App
