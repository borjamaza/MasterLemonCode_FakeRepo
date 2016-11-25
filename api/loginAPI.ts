import {LoginEntity, LoginResponse} from "../model";
import {} from "core-js";

class LoginAPI {
  login(loginInfo: LoginEntity): Promise<LoginResponse> {
    let loginResponse = new LoginResponse();

    if (loginInfo.login === "admin" && loginInfo.password === "test") {
      loginResponse.succeded = true;
    } else {
      loginResponse.succeded = false;
    }

    return Promise.resolve(loginResponse);
  }
}

export const LoginApi = new LoginAPI;
