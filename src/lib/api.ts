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

export { login };
