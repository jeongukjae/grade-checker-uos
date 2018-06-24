import * as React from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles, WithStyles } from "@material-ui/core/styles";

import MarginedContainer from "./components/MarginedContainer";
import MenuAppBar from "./components/MenuAppBar";

// import { login } from './lib/api';

interface AppStates {
  user?: {};
  userId: string;
  password: string;
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
    password: "",
    user: undefined,
    userId: ""
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <MenuAppBar auth={true} />
        <Paper className={classes.root} elevation={4}>
          <Typography variant="title">로그인</Typography>
          <MarginedContainer>
            <TextField
              label="아이디"
              placeholder="아이디"
              fullWidth={true}
              margin="dense"
            />
            <TextField
              label="비밀번호"
              placeholder="비밀번호"
              fullWidth={true}
              margin="dense"
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              로그인
            </Button>
          </MarginedContainer>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
