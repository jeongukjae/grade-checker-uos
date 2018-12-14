import * as React from "react";

import { Switch, Route } from "react-router-dom";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";

import Grades from "./routes/grades";
import MenuAppBar from "./components/MenuAppBar";

interface IAppStates {}

const styles = {
  root: {
    margin: 20,
    padding: "16px 10px"
  }
};

type IAppProps = WithStyles<keyof typeof styles>;

class App extends React.Component<IAppProps, IAppStates> {
  public render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <MenuAppBar auth={false} />
        <Paper className={classes.root} elevation={2}>
          <Switch>
            <Route exact path="/" component={Grades} />
          </Switch>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles)(App);
