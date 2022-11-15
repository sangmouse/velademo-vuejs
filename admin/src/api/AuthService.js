
import requestUnauthorized from "./request";

const API_ENDPOINT = {
  POST_REGISTER: "/user/api/register",
  POST_LOGIN: `/user/api/login`,
  GET_REFRESH_TOKEN: "/user/api/token/refresh",
};
class AuthService {
  constructor() {
    if (AuthService._instance) {
      return AuthService._instance;
    }
    AuthService._instance = this;
  }
  postRegister(data) {
    return requestUnauthorized.get(API_ENDPOINT.POST_REGISTER + data);
  }
  postLogin(data) {
    return requestUnauthorized.post(API_ENDPOINT.POST_LOGIN, data);
  }
  
}

const Service = new AuthService();

export default Service;
