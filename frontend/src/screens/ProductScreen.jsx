import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'


const ProductScreen = () => {
  const { id: productId } = useParams();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Atras
      </Link>

      { isLoading ? (
        <div>Cargando...</div>
      ) : error ? (
        <div>{ error?.data.message || error.error }</div>
      ) : (
      <>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>
                Precio: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Descripcion: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Precio:
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Estado:
                    </Col>
                    <Col>
                      {product.countInStock > 0 ? "Disponible" : "No disponible"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                    Agregar al carrito
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </>
      )}
    </>
  );
};

export default ProductScreen