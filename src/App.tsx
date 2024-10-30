import { useState } from "react";

import MyButton from "./components/MyButton";
import ProductList from "./components/ProductList";
import Formulario from "./components/Formulario";
import RealHookFomr from "./components/RealHookFomr";

function App() {
  const [products, setProducts] = useState([
    { id: Math.random().toString(), name: "Iphone" },
  ]);
  const comienzo = () => {
    let product = { id: Math.random().toString(), name: "Chanchilard" };
    setProducts([product, ...products]);
    console.log(products);
  };
  const final = () => {
    let product = { id: Math.random().toString(), name: "Chanchilard" };
    setProducts([...products,product]);
   
  };
  const eliminar = () => {
    
    setProducts(products.slice(0,-1));
    
  };
  const limpiar = () => {
    
    setProducts([]);
    
  };

  return (
    <>
      <MyButton onClick={comienzo}>Comienzo</MyButton>
      <MyButton onClick={final}>Final</MyButton>
      <MyButton onClick={eliminar}>Eliminar</MyButton>
      <MyButton onClick={limpiar}>Limpiar</MyButton>
      <ProductList products={products} />

      <RealHookFomr/>
    </>
  );
}

export default App;
