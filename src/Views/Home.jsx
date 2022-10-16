import React from 'react'
import Header from "../Components/Header"
import PizzaCard from '../Components/PizzaCard'
import NavBar from '../Components/Navbar'

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <div className='container my-4'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          <PizzaCard />
        </div>
      </div>
    </>
  );
};
