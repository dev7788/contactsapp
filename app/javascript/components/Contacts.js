import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import ReactTable from 'react-table';
import { slide as Menu } from 'react-burger-menu'
import { contactsActions } from '../actions';
import ContactDetail from './ContactDetail';

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
    const { contact, isOpen, selected } = this.state;

    const columns = [{
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Name',
      accessor: 'name'
    }];    

    return (
      <div>
        <div id="outer-container">
          <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            right
            isOpen={isOpen}
            width={350}
            onStateChange={this.onMenuStateChange}
          >
            <div className="menu-content">
              {contact && (
                <ContactDetail
                  {...contact}
                  close={() => this.setState({ isOpen: close })} 
                />
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
                      background: rowInfo.index === selected ? '#00afec' : 'white',
                      color: rowInfo.index === selected ? 'white' : 'black'
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
