import React from "react"
import PropTypes from "prop-types"
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

class Login extends React.Component {

  componentWillMount(){
    if (localStorage.getItem('user')) {
      this.props.history.push('/');
      return;
    }
  }
  
  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    
    if (username === 'Admin' && password === 'test1A') {
      localStorage.setItem('user', JSON.stringify({ username }));
      location.href = '/profile';
      return;
    }
    
    alert('Invalid Username or Password!');
  }

  render () {
    return (
      <Container className="login">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                name="username"
                id="exampleUsername"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Login
