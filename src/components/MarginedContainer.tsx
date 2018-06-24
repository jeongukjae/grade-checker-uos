import * as React from 'react';

import { withStyles, WithStyles } from '@material-ui/core/styles';

interface MarginedContainerProps {
  children: any;
}

const style = {
  root: {
    margin: '10px 15px',
  }
}

const MarginedContainer = (props: MarginedContainerProps & WithStyles<keyof typeof style>) => (
  <div className={props.classes.root}>
    {...props.children}
  </div>
);

export default withStyles(style)(MarginedContainer);
