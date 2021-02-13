import React from "react";
import "./style.scss";
export default class Accordian extends React.Component {
  state = {
    isOpen: true
  };
  toggleAccordion = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div
        className={
          this.state.isOpen ? "accordion__section open" : "accordion__section"
        }
      >
        <div className="accordion__title" onClick={this.toggleAccordion}>
          <span>{this.props.title}</span>
          <em className="fa fa fa-chevron-right icon" />
        </div>
        <div className="accordion__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
