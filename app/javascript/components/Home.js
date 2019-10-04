import React from "react"
import PropTypes from "prop-types"
import { Container } from 'reactstrap';

class Home extends React.Component {
  render () {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
      <Container className="container">
        <h4>hi {user.username}!</h4>
      </Container>
    );
  }
}

export default Home
