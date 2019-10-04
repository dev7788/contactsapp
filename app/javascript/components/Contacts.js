import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ReactTable from 'react-table';
import { slide as Menu } from 'react-burger-menu'
import { contactsActions } from '../actions';

class Contacts extends React.Component {
  constructor(){
    super();

    this.state = {
      isOpen: false,
      selected: null,
      contact: null,
    }

    this.onMenuStateChange = this.onMenuStateChange.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(contactsActions.getAll());
  }

  onMenuStateChange(state){
    this.setState({isOpen: state.isOpen});
  }

  render () {
    const { loading, data } = this.props;

    const columns = [{
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Phone',
      accessor: 'phone'
    }];

    const { contact } = this.state;

    return (
      <div>
        <div id="outer-container">
          <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
            isOpen={this.state.isOpen}
            width={280}
            onStateChange={this.onMenuStateChange}
          >
            <div className="menu-content">
              {contact && (
                <span><b>{contact.name}</b></span>
              )}
            </div>
          </Menu>
          <div id="page-wrap" />
        </div>
        <Container>
          {data && (
            <ReactTable
              data={data}
              columns={columns}
              getTrProps={(state, rowInfo) => {
                if (rowInfo && rowInfo.row) {
                  return {
                    onClick: (e) => {
                      this.setState({
                        selected: rowInfo.index,
                        contact: rowInfo.original,
                        isOpen: true
                      })
                    },
                    style: {
                      background: rowInfo.index === this.state.selected ? '#00afec' : 'white',
                      color: rowInfo.index === this.state.selected ? 'white' : 'black'
                    }
                  }
                } else {
                  return {}
                }
              }}
            />)}
        </Container>
      </div>
      
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
