import React from "react";
import { API } from "../../axios";
import { Link } from "react-router-dom";
import { apis } from "../../constants";
import Loader from "./../../Common/Loader";
import "./style.scss";
import Accordian from "./../../Common/Accordian";
import Item from "./../Blog/Grid/item";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import moment from "moment";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from "react-share";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { getPopularBlogs } from "./../../actions/blogactions";
import { connect } from "react-redux";

class BlogDetail extends React.Component {
  state = {
    data: {},
    isLoaded: false,
    comments: []
  };

  async componentDidMount() {
    if (!this.props.bloglist) {
      this.props.getPopularBlogs();
    }
    const id = this.props.match.params.id;
    const response = await API.GET(apis.blogDetails + id);

    if (response.success) {
      this.setState({
        data: response.data,
        isLoaded: true,
        comments: response.data.comments
      });
    }
  }
  renderMostOption(option, key) {
    return (
      <Link to={"/blogdetail/" + option.blog_id} key={key}>
        <div className="most-visited-wrapper">
          <div className="title">{option.title}</div>
          <div className="date">
            {moment(option.publish_date).format("DD/MM/YYY")}
          </div>
        </div>
      </Link>
    );
  }
  async postComment(e) {
    e.preventDefault(e);
    const formdata = new FormData(e.target);
    const data = {};
    data.comment = formdata.get("comment");
    data.type = "new";
    const id = this.props.match.params.id;
    const url = "/blog/" + id + "/post_comment";
    const response = await API.POST(url, data);
    if (response.success) {
      const id = this.props.match.params.id;
      const response = await API.GET(apis.blogDetails + id);

      if (response.success) {
        this.setState({
          data: response.data,
          isLoaded: true
        });
      }
    }
  }
  render() {
    const blog = this.state.data.blogs;
    return (
      <React.Fragment>
        {this.state.isLoaded ? (
          <div className="blog-detail">
            <div className="title">{blog.title}</div>
            <div className="category">
              {blog.categories.map(item => item.category).toString()}
            </div>
            <img className="image" src={blog.images[0].image} alt="blog" />
            <div className="content-wrapper">
              <div className="left-side">
                <div className="content">{blog.body}</div>
                <div className="comment">
                  <div className="date-user">
                    <span className="date">
                      {moment(blog.publish_date).format("DD MMMM")}
                    </span>
                    <span className="username">
                      By {blog.username || "username"}
                    </span>
                  </div>
                  <div className="share-section">
                    <div className="title">Share</div>
                    <div className="social-btns">
                      <FacebookShareButton url={window.location.href}>
                        <button className="share-btn fb">
                          <FacebookIcon />{" "}
                          <span className="social-text">Facebook</span>
                        </button>
                      </FacebookShareButton>
                      <LinkedinShareButton url={window.location.href}>
                        <button className="share-btn linkedin">
                          <LinkedInIcon />
                          <span className="social-text">Linkdin</span>
                        </button>
                      </LinkedinShareButton>
                      <TwitterShareButton url={window.location.href}>
                        <button className="share-btn twitter">
                          <TwitterIcon />
                          <span className="social-text">Twitter</span>
                        </button>
                      </TwitterShareButton>
                      <EmailShareButton url={window.location.href}>
                        <button className="share-btn email">
                          <AlternateEmailIcon />
                          <span className="social-text">Email</span>
                        </button>
                      </EmailShareButton>
                    </div>
                  </div>
                  <div className="comment-heading">
                    Comments({this.state.comments.length})
                  </div>
                  {this.state.comments.map((comment, index) => (
                    <div key={index} className="user-comment">
                      <div className="user-image">
                        <img src={comment.user_image} alt="user" />
                      </div>
                      <div className="comment-section">
                        <div className="name">{comment.username}</div>
                        <div className="date">
                          {moment(comment.date).format("DD MMMM")}
                        </div>
                        <div className="comment-text">{comment.text}</div>
                        <button className="reply-btn"> Reply</button>
                      </div>
                    </div>
                  ))}
                  <div>
                    <span className="post-comment">Post Comments</span>
                    <form onSubmit={e => this.postComment(e)}>
                      <div className="comment-field">
                        <TextField
                          id="name"
                          label="Name"
                          variant="outlined"
                          classes={{ root: "login-input" }}
                        />
                      </div>
                      <div className="comment-field">
                        <TextField
                          id="email"
                          label="Email"
                          variant="outlined"
                          classes={{ root: "login-input" }}
                        />
                      </div>
                      <div className="comment-field">
                        <TextField
                          multiline
                          rowsMax="4"
                          id="comment"
                          label="Comment"
                          variant="outlined"
                          name="comment"
                          classes={{ root: "login-input" }}
                          required
                          rows="3"
                        />
                      </div>
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        className="button-red post-comment-btn"
                      >
                        Post Comment
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="right-side">
                {this.props.bloglist && (
                  <Accordian title="Most Visited">
                    {this.props.bloglist.map((option, index) =>
                      this.renderMostOption(option, index)
                    )}
                  </Accordian>
                )}
                <div className="follow-section">
                  <span>FOLLOW US</span>
                  <div className="social">
                    <em className="fa fa-facebook"></em>
                    <em className="fa fa-linkedin"></em>
                    <em className="fa fa-google-plus"></em>
                    <em className="fa fa-twitter"></em>
                  </div>

                  <img src="/images/banner.png" alt="banner" />
                </div>
              </div>
            </div>
            <div className="similar-section">
              <div className="info">
                <div className="heading">Related Post</div>
                <div className="sub-text">Lorem Ispum text</div>
              </div>
              <div className="items">
                {this.state.data.similar.map((item, index) => (
                  <Item data={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    bloglist: state.blogs.popular_blogs
  };
};
export default connect(mapStateToProps, { getPopularBlogs })(BlogDetail);
