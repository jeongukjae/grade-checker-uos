import * as React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { IGrade } from "../store/modules/grades";

export const GradeRow: React.StatelessComponent<IGrade> = (props: IGrade) => (
  <TableRow>
    <TableCell>{props.subject}</TableCell>
    <TableCell>{props.grade}</TableCell>
    <TableCell>{props.mark}</TableCell>
    <TableCell>{props.professor}</TableCell>
    <TableCell>{props.div}</TableCell>
  </TableRow>
);
