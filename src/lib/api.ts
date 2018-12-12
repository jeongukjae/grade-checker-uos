import axios from "axios";
import { Dispatch } from "redux";

import { failLogin, loginComplete } from "../store/modules/auth";

export const login = (userId: string, password: string) => {
  return (dispatch: Dispatch) => {
    axios
      .post(
        `https://wise.uos.ac.kr/uosdoc/com.StuLogin.serv`,
        {},
        {
          params: {
            _COMMAND_: "LOGIN",
            login_div_1_nm: "%C7%D0%BB%FD",
            strIpAddr: "0.0.0.0",
            strLoginId: userId,
            strLoginPw: password,
            strMacAddr: "0.0.0.0",
            strTarget: "MAIN"
          }
        }
      )
      .then(value => {
        dispatch(loginComplete());
        return value;
      })
      .catch(reason => {
        dispatch(failLogin(reason));
      });
  };
};

export const grade = (cookie: string, userNo: string) => {
  return axios
    .post(`${process.env.SERVER}/grade`, {
      cookie,
      userNo
    })
    .then(value => {
      return value.data;
    });
};
