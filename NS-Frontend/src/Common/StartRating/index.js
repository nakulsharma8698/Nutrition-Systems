import StarsRating from "stars-rating";
import React from "react";
export default class StartRating extends React.Component {
  render() {
    const size = this.props.size || 24;
    const edit = this.props.edit !== undefined ? this.props.edit : true;
    return (
      <StarsRating
        count={5}
        onChange={this.ratingChanged}
        size={size}
        color1={"#d13239"}
        color2={"#d13239"}
        half={false}
        value={this.props.value}
        edit={edit}
      />
    );
  }
  ratingChanged = newRating => {};
}
