import axios from "axios";

const login = (userId: string, password: string) => {
  return axios
    .post(
      "http://localhost:5000/login",
      {
        password,
        userId
      }
    )
    .then(value => {
      return value;
    });
};

const grade = (cookie: string, userNo: string) => {
  return axios
    .post(
      "http://localhost:5000/grade",
      {
        cookie,
        userNo
      }
    )
    .then(value => {
      return value.data;
    });
};

export { login };
export { grade };
