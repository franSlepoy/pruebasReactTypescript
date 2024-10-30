type Product = {
  id: string;
  name: string;
};

type Props = {
  products: [];
 
};

const ProductList = ({ products }: Props) => {
  return (
    <ul style={{margin:25}}>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
};

export default ProductList;
