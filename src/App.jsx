import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}