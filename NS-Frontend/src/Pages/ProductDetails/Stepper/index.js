import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./style.scss";
class Stepper extends React.Component {
  state = { value: 0 };
  render() {
    let value = this.state.value;
    return (
      <div className="stepper-component">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => {
              this.setState({ value: value - 1 });
            }}
            className="stepper-button"
          >
            <RemoveIcon fontSize="inherit" />
          </Button>
          <Button disabled className="stepper-button value-button">
            {value}
          </Button>
          <Button
            onClick={() => {
              this.setState({ value: value + 1 });
            }}
            className="stepper-button"
          >
            <AddIcon fontSize="inherit" />
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}
export default Stepper;
