import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "product one",
    description: "my first product",
  },
  {
    id: "p2",
    price: 12,
    title: "product two",
    description: "my second product",
  },
  {
    id: "p3",
    price: 18,
    title: "product three",
    description: "my third product",
  },
  {
    id: "p4",
    price: 24,
    title: "product four",
    description: "my forth product",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
