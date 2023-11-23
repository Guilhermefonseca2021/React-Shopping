import ProductItem from "../components/ProductItem";
import products from "../hooks/data.json";
import { Col, Row } from "react-bootstrap";

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3 ">
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <ProductItem {...product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
