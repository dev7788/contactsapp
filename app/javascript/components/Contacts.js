import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ReactTable from 'react-table';

import { contactsActions } from '../actions';

class Contacts extends React.Component {
  componentDidMount() {
    this.props.dispatch(contactsActions.getAll());
  }

  render () {
    const { loading, data } = this.props;    
    console.log(loading, data);

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Email',
      accessor: 'email' // String-based value accessors!
    }, {
      Header: 'Phone',
      accessor: 'phone' // String-based value accessors!
    }];

    return (
      <Container>
        { data && (
        <ReactTable
            data={data}
            columns={columns}
        />) }
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
