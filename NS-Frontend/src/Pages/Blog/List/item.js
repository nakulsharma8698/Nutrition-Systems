import React from "react";
import "./style.scss";

class Item extends React.Component {
  state = { data: {} };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  render() {
    const data = this.props.data;
    const imgSrc = data.images[0].image;
    const title = data.title;
    const date = new Date(data.publish_date).toLocaleDateString();
    const blog = data.body;
    let category = data.categories.map(item => item.category);
    category = category.join(", ");
    const link = "/blogdetail/" + data.blog_id;

    return (
      <div
        className="blog-list-item"
        onClick={() => this.props.history.push(link)}
      >
        <div className="list-media">
          <img className="blog-image" src={imgSrc} alt={title} />
        </div>
        <div className="blog-content">
          <div>
            <span className="date">{date}</span>
            <span className="category">{category}</span>
          </div>
          <div className="title">{title}</div>
          <div className="content">{blog}</div>
        </div>
      </div>
    );
  }
}
export default Item;
