import requestUnauthorized from "./request";

const API_ENDPOINT = {
  GET_BLOGS: "/api/admin/blogs/",
  POST_BLOGS: "/api/admin/blog/add",
};
class BlogsService {
  constructor() {
    if (BlogsService._instance) {
      return BlogsService._instance;
    }
    BlogsService._instance = this;
  }
  getBlogs(pageNumber, pageSize) {
    return requestUnauthorized.get(API_ENDPOINT.GET_BLOGS + `?page=${pageNumber}&size=${pageSize}`);
  }

  postBlogs(data) {
    return requestUnauthorized.post(API_ENDPOINT.POST_BLOGS, data);
  }
}

const Service = new BlogsService();

export default Service;
