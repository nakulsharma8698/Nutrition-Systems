import { API } from "./../axios";
import { apis } from "./../constants";

export function getPopularBlogs() {
  return async dispatch => {
    const response = await API.POST(apis.blogs, { sort: "popularity" });
    if (response.success) {
      return dispatch({
        type: "POPULAR_BLOGS",
        payload: response.data
      });
    }
  };
}
export function getBlogs(categories = null) {
  return async dispatch => {
    dispatch({
      type: "BLOG_LOADING",
      payload: true
    });
    const response = await API.POST(apis.blogs, { categories: categories });
    dispatch({
      type: "BLOG_LOADING",
      payload: false
    });
    if (response.success) {
      return dispatch({
        type: "BLOGS",
        payload: response.data
      });
    }
  };
}
