import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextInput } from '../../components/input/text';

import { createProduct } from '../../functions/product';

export default class Admin extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            Self Service Cashier
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            ADMIN SITE
          </Navbar.Collapse>
        </Navbar>
        <Link to="/product">
          <Button variant="primary" md="auto">
            Edit Product
          </Button>
        </Link>
        <Link to="/">
          <Button variant="primary" md="auto">
            History Pemesanan
          </Button>
        </Link>
        <Formik
          initialValues={{
            kode_barang: "",
            title: "",
            description: "",
            price: null
          }}
          onSubmit={(values) => {
            console.log(values);
            createProduct(values);
          }}
        >
          <Form>
            <TextInput
              name="kode_barang"
              label="Kode Produk"
              type="text"
            />
            <TextInput
              name="title"
              label="Nama Produk"
              type="text"
            />
            <TextInput
              name="description"
              label="Deskripsi Produk"
              type="text"
            />
            <TextInput
              name="price"
              label="Harga"
              type="number"
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </Container>
    )
  }
}