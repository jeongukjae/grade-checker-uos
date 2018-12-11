import * as React from "react";

import { withStyles, WithStyles } from "@material-ui/core/styles";

interface IMarginedContainerProps {
  children: any;
}

const style = {
  root: {
    margin: "5px 7px",
    overflow: "scroll"
  }
};

const MarginedContainer = (
  props: IMarginedContainerProps & WithStyles<keyof typeof style>
) => <div className={props.classes.root}>{...props.children}</div>;

export default withStyles(style)(MarginedContainer);
