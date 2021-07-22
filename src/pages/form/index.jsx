import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { Formik, Form} from 'formik';
import { TextInput } from '../../components/input/text';
import { createOrder } from '../../functions/cart';
import { createForm } from '../../functions/form';

export default class FormUser extends React.Component {
  render() {
    return (
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            Self Service Cashier
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end"> 
           Cart
          </Navbar.Collapse>
        </Navbar>
        <p>Form User</p>
        <Formik
          initialValues={{
            name: "",
            phone_number:"",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            createForm(values);
            
            //this.props.history.push("/product");
          }}
        >
          <Form>
            <TextInput
              name="name"
              label="Nama Lengkap"
              type="text"
            />
            <TextInput
              name="phone_number"
              label="Nomor HP"
              type="text"
            />
            <TextInput
              name="email"
              label="Email"
              type="email"
            />
    
            <Button 
              variant="primary" 
              type="submit"
            >
              Next
            </Button>
          </Form>
        </Formik>
      </Container>
    )
  }
}