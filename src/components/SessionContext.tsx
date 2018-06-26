import * as React from 'react';

const ThemeContext = React.createContext('light');

class ThemeProvider extends React.Component {
  state = {theme: 'light'}
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

function withTheme(Component: React.Component<any, any>) {
  return function ThemedComponent(props: any) {
    return (
      <ThemeContext.Consumer>
        {theme => <Component {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
}

export { withTheme };

export default ThemeProvider;
