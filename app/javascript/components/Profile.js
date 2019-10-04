import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Button } from 'reactstrap';

class Profile extends React.Component {
  logout = this.logout.bind(this);  
  logout() {
    localStorage.clear();
    location.href = '/login';
  }
  render () {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <Container className="container">
        <h4>Username: {user.username}!</h4>
        <Row>
          <Col>
            <br/>
            <Button onClick={this.logout}>Log out</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile
