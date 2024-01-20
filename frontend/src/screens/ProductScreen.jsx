import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"
import products from "../products"
import Rating from "../components/Rating"

const ProductScreen = () => {
  const { id } = useParams()
  const product = products.find(p => p._id === id)

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Atras
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
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
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Estado:</Col>
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
  )
}

export default ProductScreen