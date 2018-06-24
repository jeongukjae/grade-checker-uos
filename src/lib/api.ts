import axios from "axios";

const login = (userId: string, password: string) => {
  return axios
    .post(
      "http://portal.uos.ac.kr/user/uosMobileLoginProcess.face",
      {
        password,
        userId
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(value => {
      alert(value);
    });
};

export { login };
