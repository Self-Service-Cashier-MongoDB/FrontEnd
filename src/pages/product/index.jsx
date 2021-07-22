import React from 'react';
import { Card, Container, Button, Col, Row, Navbar } from 'react-bootstrap';
import Loading from '../../components/loading';
import { Formik, Form } from 'formik';
import { TextInput } from '../../components/input/text';
import { rupiah } from '../../functions/format';
import { getAllProducts, getProductbyCode } from '../../functions/product';
import { addProductToOrder } from '../../functions/cart';

export default class Product extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: null
    }
  }

  async componentDidMount() {
    this.setState({
      products: await getAllProducts()
    }, () => console.log(this.state.products));
  }

  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/product">
            Self Service Cashier
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Button variant="">
              Cart
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Formik
          initialValues={{
            kode_barang: "",
          }}
          onSubmit={async (values) => {
            this.setState({
              products: values.kode_barang === "" ? await getAllProducts(values) : [await getProductbyCode(values.kode_barang)]
            })
          }}
        >
          <Form>
            <TextInput
              name="kode_barang"
              label="Kode Barang"
              type="text"
            />
            <Button variant="success" type="submit">Search</Button>
          </Form>
        </Formik>
        <Row>
          {this.state.products
            ? (
              this.state.products.map((value, index) => {
                return (
                  <Col md={4} key={index}>
                    <Card style={{ color: "#000" }}>
                      <Card.Body>
                        <Card.Title>
                          {value.kode_barang}
                        </Card.Title>
                        <Card.Title>
                          {value.title}
                        </Card.Title>
                        <Card.Text>
                          {value.description}
                        </Card.Text>
                        <Card.Text>
                          {rupiah(value.price)}
                        </Card.Text>
                        <Button variant="primary" onClick={() => addProductToOrder(value)}>Add To Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            ) : (
              <Loading />
            )
          }
        </Row>
      </Container>
    )
  }
}