import React from 'react';
import Tooltip from 'react-power-tooltip'

class AddBtn extends React.Component {
  constructor(){
    super();
    this.state = {
      show: false,
    }

    this.showTooltip = this.showTooltip.bind(this);
  }

  showTooltip() {
    this.setState({ show: true })
  }

  render() {
    const { show } = this.state;
    return (
      <div className="button-add" onClick={this.showTooltip}>+
        <Tooltip
          show={this.state.show}
          position="bottom end"
          arrowAlign="end"
          hoverBackground="transparent"
          padding={'10px 10px'}
          textBoxWidth="auto"
          borderRadius={"8px"}
          moveDown="2px"
        >
          <div className="type-tag-wrapper">
            <input type="text" placeholder="Type tag" className="tag-input"/>
          </div>
        </Tooltip>
      </div>
    )
  }
}

export default AddBtn;