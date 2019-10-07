import React from 'react';
import PropTypes from 'prop-types';

const Tag = props => {
  console.log('tag name', props.name);
  return (<div className="tag">
  <span className="tag-name">{props.name}</span>&nbsp;
  <span className="tag-close">&times;</span>
</div>)};

Tag.propTypes = {
  name: PropTypes.string.isRequired
}

export default Tag;