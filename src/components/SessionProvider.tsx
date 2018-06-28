import * as React from 'react';

const SessionContext = React.createContext('light');

class SessionProvider extends React.Component {
  state = {theme: 'light'}
  render() {
    return (
      <SessionContext.Provider value={this.state.theme}>
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}

function withTheme(Component: React.ComponentType) {
  return function ThemedComponent(props: any) {
    return (
      <SessionContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </SessionContext.Consumer>
    );
  };
}

export { withTheme };

export default SessionProvider;
