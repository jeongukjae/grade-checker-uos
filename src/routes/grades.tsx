import * as React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";

import { GradeRow } from "../components/GradeRow";
import MarginedContainer from "../components/MarginedContainer";

class Grades extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <MarginedContainer>
          <Table>
            <TableHead>
              <GradeRow
                subject="과목"
                professor="교수"
                div="구분"
                grade="학점"
                mark="성적"
              />
            </TableHead>
            <TableBody />
          </Table>
        </MarginedContainer>
      </React.Fragment>
    );
  }
}

export default Grades;
