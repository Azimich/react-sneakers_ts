import { Routes, Route } from "react-router-dom"

import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Notfound from './pages/notfound/Notfound';
import { Header, Wrapper } from "./components/Index";
import { Cart } from "./components/cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [toggleCart, setToggleCart] = useState(false)
  
  useEffect(() => {
    document.body.style.overflow = toggleCart ? "hidden" : "unset"
  }, [toggleCart])

  return (
    <Wrapper className="mt-10 overflow-hidden md:mt-6">
      <Header setToggleCart={setToggleCart} />
      <Routes>
        <Route path="/" element={<Home toggleCart={toggleCart} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
    </Wrapper>
  )
}

export default App
