import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PizzasProvider } from "./Context/PizzasProvider";
import Carrito from "./Views/Carrito";
import Detalle from "./Views/Detalle";
import Home from "./Views/Home";
import React from "react";

export default function App() {
  return (
      <BrowserRouter>
        <PizzasProvider>
          <Routes>
            <Route end path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<Detalle />}/>
            <Route path="/carrito" element={<Carrito />}/>
          </Routes>
          </PizzasProvider>
      </BrowserRouter>
  );
}


