import React from "react";
import "./style.scss";
class Tabs extends React.Component {
  state = { active: 0 };
  componentDidMount(props) {
    //this.setState({ active: props.tabs[0].label });
    if (this.props.index) {
      this.setState({ active: this.props.index });
    }
  }
  onClick = index => {
    this.setState({ active: index });
  };
  renderActiveContent() {
    const content = this.props.tabs[this.state.active].component;
    return React.createElement(content);
  }
  render() {
    return (
      <div className="tabs">
        <ul className="tab-list">
          {this.props.tabs.map((tab, index) => (
            <li
              key={index}
              className={
                this.state.active === index
                  ? "tab-list-item active"
                  : "tab-list-item"
              }
              onClick={() => this.onClick(index)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="tab-content">{this.renderActiveContent()}</div>
      </div>
    );
  }
}
export default Tabs;
