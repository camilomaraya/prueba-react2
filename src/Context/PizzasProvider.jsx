import { createContext, useState, useEffect } from "react";

//context creado

const PizzasContext = createContext();

//Provider
const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([])


//traer pizzas

const getPizzas = async ()=>{
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
};

    useEffect(() => {
        getPizzas();
    }, []);

    //Funciones del carro
    const addToCart = ({id, price, name, img}) =>{
        const productoEncontradoIndex = carrito.findIndex((p) => p.id === id);
        const producto = {id, price, name, img, count:1};

        if (productoEncontradoIndex >=0){
            carrito[productoEncontradoIndex].count++;
            setCarrito([...carrito]);
        }else{
            setCarrito([...carrito,producto]);
        }
    };

    const incrementa = (i) =>{
        carrito[i].count++;
        setCarrito([...carrito]);
    };

    const resta = (i) => {
        const {count} = carrito[i];
        if (count === 1) {
            carrito.splice(i,1);
        }else{
            carrito[i].count--;
        }
        setCarrito([...carrito]);
    };

    // console.log(carrito);
    return(
        <PizzasContext.Provider
            value={{pizzas, carrito, setCarrito, addToCart, incrementa, resta}}
        >
            {children}
        </PizzasContext.Provider>    
    );
}

export {PizzasProvider};
export default PizzasContext;
