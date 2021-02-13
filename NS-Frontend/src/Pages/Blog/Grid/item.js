import React from "react";
import "./style.scss";
import AspectRatioBackground from "./../../../Common/Background";
class Item extends React.Component {
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
        className="blog-grid-item"
        onClick={() => this.props.history.push(link)}
      >
        <AspectRatioBackground url={imgSrc} ratio="1:1"></AspectRatioBackground>
        <div className="blog-details">
          <div className="date-category">
            <span className="date">{date}</span>
            <span className="category">{category.toString()}</span>
          </div>
          <div className="title">{title}</div>
          <div className="content">{blog}</div>
        </div>
      </div>
    );
  }
}
export default Item;
