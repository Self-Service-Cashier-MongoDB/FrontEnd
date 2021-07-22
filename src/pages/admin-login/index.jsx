import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { Formik, Form} from 'formik';
import { TextInput } from '../../components/input/text';

import { login } from '../../functions/admin-login';


export default class Login extends React.Component {
    render() {
      return (
        <Container className="auth-page">
          <Container className="title-container">
            <h1 className="title">Log In</h1>
          </Container>
          <Formik
            initialValues={{
              username:"",
              password: "",
            }}
            onSubmit={(values) => {
              login(values);
  
              this.props.history.push("/admin");
            }}
          >
            <Form className="form-container">
              <TextInput
                name="username"
                label="Username"
                type="text"
              />
              <TextInput
                name="password"
                label="Password"
                type="password"
              />
              <Container className="button-container">
                <Button
                  className="button"
                  variant="primary"
                  type="submit"
                >
                  Log In
                </Button>
              </Container>
            </Form>
          </Formik>
        </Container>
      )
    }
  }
