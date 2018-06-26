import * as React from "react";

import update from "immutability-helper";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles, WithStyles } from "@material-ui/core/styles";

import MarginedContainer from "./components/MarginedContainer";
import MenuAppBar from "./components/MenuAppBar";

import { login } from "./lib/api";

interface AppStates {
  user?: {};
  data: {
    [key: string]: string;
  };
}

const styles = {
  root: {
    margin: 20,
    padding: "16px 10px"
  },
  submit: {
    marginTop: "15px"
  }
};

type AppProps = WithStyles<keyof typeof styles>;

class App extends React.Component<AppProps, AppStates> {
  state = {
    data: {
      password: "",
      userId: ""
    },
    user: undefined
  };

  handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      data: update(this.state.data, { [name]: { $set: e.target.value } })
    });
    e.preventDefault();
  };

  onLogin = () => {
    login(this.state.data.userId, this.state.data.password).then(value => {
      // tslint:disable-next-line:no-console
      let cookie = value.data.JSESSIONID;

      return cookie;
    }).catch((reason) => {
      alert(`로그인 실패 ${reason}`);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <MenuAppBar auth={true} />
        <Paper className={classes.root} elevation={4}>
          <MarginedContainer>
            <Typography variant="title">로그인</Typography>
            <MarginedContainer>
              <TextField
                value={this.state.data.userId}
                label="아이디"
                placeholder="아이디"
                fullWidth={true}
                margin="dense"
                onChange={this.handleChange("userId")}
              />
              <TextField
                value={this.state.data.password}
                label="비밀번호"
                placeholder="비밀번호"
                fullWidth={true}
                margin="dense"
                type="password"
                onChange={this.handleChange("password")}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onLogin}
              >
                로그인
              </Button>
            </MarginedContainer>
          </MarginedContainer>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
