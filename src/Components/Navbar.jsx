import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import PizzasContext from '../Context/PizzasProvider';
import { formatNumber } from '../helpers/formatNumber';
import "../style/navbar.css"

export default function NavBar() {

  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce(
    (valorAnterior, {count, price}) => (valorAnterior + price) * count,
    0
  );
  
  return (
    <div className='navbar text-white py-3'>
      <div className='container d-block'>
        <div className='d-flex justify-content-between'>
          <NavLink to="/" className="mx-1 mb-0">
            <h4 className='mb-0'>
            🍕Pizzería Mama Mia!
            </h4>
          </NavLink>

          <NavLink to="/carrito" className="mx-1 mb-0">
            <h4 className='mb-0'>
            🛒Total:${formatNumber(total)}
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
      
    
  );
}
