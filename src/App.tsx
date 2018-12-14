import * as React from "react";

import { withStyles, WithStyles } from "@material-ui/core/styles";

interface IAppStates {}

const styles = {};

type IAppProps = WithStyles<keyof typeof styles>;

class App extends React.Component<IAppProps, IAppStates> {
  public render() {
    return <div />;
  }
}

export default withStyles(styles)(App);
