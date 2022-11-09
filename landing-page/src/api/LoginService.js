import request from "./request";

const API_ENDPOINT = {
    LOGIN: "/user/api/login",
    REGISTER: "/user/api/register",
};
class LoginService {
    constructor() {
        if (LoginService._instance) {
            return LoginService._instance;
        }
        LoginService._instance = this;
    }
    postRegister(data) {
        return request.post(API_ENDPOINT.REGISTER, data);
    }
    postLogin(data) {
        return request.post(API_ENDPOINT.LOGIN, data);
    }
}

const Service = new LoginService();

export default Service;
