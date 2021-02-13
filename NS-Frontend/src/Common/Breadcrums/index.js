import React from "react";
import { withRouter, Link } from "react-router-dom";
class Breadcrums extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {
    console.log(this.props.match.url);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.location.pathname !== "/" && (
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default withRouter(Breadcrums);
