import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from 'reactstrap';
import Tag from "./common/Tag";
import Tabs from "./common/Tabs";
import Space from "./common/Space";
import CloseImage from 'images/close.png';
import USImage from 'images/us.png';
import AddTagBtn from "./common/AddTagBtn";

class ContactDetail extends React.Component {
  render () {
    console.log(this.props.tags);
    return (
      <div className="contact-detail">
        <div className="cd-close-wrapper">
          <img src={CloseImage} onClick={this.props.close} />
        </div>
        <div className="cd-main">
          <div className="cd-top-section">
            <div className="cd-brand">
              <h2>AT</h2>
            </div>
            <div className="cd-name">
              {this.props.name}
            </div>
            <div className="cd-tags">
              <ul>
                {this.props.tags.map((e, i) => (
                  <li key={i}>
                    <Tag name={e} />
                  </li>))
                }
                <li>
                  <AddTagBtn />
                </li>
              </ul>
            </div>
            <div className="cd-email">
              {this.props.email}
            </div>
            <div className="cd-actions">
              <ul>
                <li>
                  <button className="button-action button-invite">
                    <span>Invite</span>
                  </button>
                </li>
                <li>
                  <button className="button-action button-cancel"><span>Cancel</span></button>
                </li>
                <li>
                  <button className="button-action button-cancel"><span>Delete</span></button>
                </li>
              </ul>
            </div>
          </div>
          <div className="cd-bottom-section">
            <div className="cd-tabs-wrapper">
              <Tabs>
                <div label="Main Info">
                  <Row>
                    <Col>
                      <span className="td-label">PHONE</span><br />
                      <span className="td-value">+1 073 2714 007</span>
                    </Col>
                    <Col>
                      <span className="td-label">IP ADDRESS</span><br />
                      <span className="td-value">12312319391023091</span>
                    </Col>
                  </Row>
                  <Space height={22} />
                  <Row>
                    <Col>
                      <span className="td-label">COUNTRY</span><br />
                      <img src={USImage} />&nbsp;<span className="td-value">USA</span>
                    </Col>
                    <Col>
                      <span className="td-label">TIME ON WEBINAR</span><br />
                      <span className="td-value">1 hr</span>
                    </Col>
                  </Row>
                  <Space height={22} />
                  <Row>
                    <Col>
                      <span className="td-label">LTV</span><br />
                      <span className="td-value">$50</span>
                    </Col>
                    <Col>
                    </Col>
                  </Row>
                </div>
                <div label="History">
                  
                </div>
                <div label="Message 2">
                  
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

ContactDetail.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired,
}

export default ContactDetail
