import axios from "axios";

const login = (userId: string, password: string) => {
  return axios
    .post(`${process.env.SERVER}/login`, {
      password,
      userId
    })
    .then(value => {
      return value;
    });
};

const grade = (cookie: string, userNo: string) => {
  return axios
    .post(`${process.env.SERVER}/grade`, {
      cookie,
      userNo
    })
    .then(value => {
      return value.data;
    });
};

export { login };
export { grade };
