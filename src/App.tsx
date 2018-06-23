import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles, WithStyles } from '@material-ui/core/styles';

import MenuAppBar from './components/MenuAppBar';

const styles = {
};

type AppProps = WithStyles<keyof typeof styles>;

class App extends React.Component<AppProps> {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />

        <MenuAppBar auth={true} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
