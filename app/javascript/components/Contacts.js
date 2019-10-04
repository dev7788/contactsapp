import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { contactsActions } from '../actions';

class Contacts extends React.Component {
  componentDidMount() {
    this.props.dispatch(contactsActions.getAll());
  }

  render () {
    const { loading, data } = this.props;    
    console.log(loading, data);
    return (
      <Container>
        Contacts: {data ? data.length : 0}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { contacts } = state;
  const { loading, data } = contacts;
  return {
    loading,
    data,
  };
}

const connectedContactsPage = connect(mapStateToProps)(Contacts);
export { connectedContactsPage as Contacts };
