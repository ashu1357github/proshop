import { Row, Col } from "react-bootstrap";
import Product from "../Components/Product";
import products from "../products";


const HomeScreen = () => {
  return (
    <div>
      <h1> Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} ms={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default HomeScreen;
