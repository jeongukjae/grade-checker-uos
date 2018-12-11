import * as React from "react";

import update from "immutability-helper";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles, WithStyles } from "@material-ui/core/styles";

import MarginedContainer from "./components/MarginedContainer";
import MenuAppBar from "./components/MenuAppBar";

import { grade, login } from "./lib/api";

interface IAppStates {
  auth?: {
    userNo: string;
    cookie: string;
  };
  grade: any;
  user?: {};
  data: {
    [key: string]: string;
  };
}

const styles = {
  cell: {
    textAlign: "center" as "center",
    whiteSpace: "nowrap" as "nowrap"
  },
  root: {
    margin: 20,
    padding: "16px 10px"
  },
  submit: {
    marginTop: "15px"
  }
};

type IAppProps = WithStyles<keyof typeof styles>;

class App extends React.Component<IAppProps, IAppStates, {}> {
  public state: IAppStates = {
    auth: undefined,
    data: {
      password: "",
      userId: ""
    },
    grade: undefined,
    user: undefined
  };

  public render() {
    const { classes } = this.props;
    const grades = this.state.grade;

    return (
      <React.Fragment>
        <CssBaseline />

        <MenuAppBar
          auth={this.state.auth !== undefined}
          handleLogout={this.onLogout}
          handleRefresh={this.checkGrade}
        />
        <Paper className={classes.root} elevation={4}>
          {this.state.auth === undefined ? (
            <MarginedContainer>
              <Typography variant="title">로그인</Typography>
              <MarginedContainer>
                <form onSubmit={this.onSubmit}>
                  <TextField
                    value={this.state.data.userId}
                    label="아이디"
                    placeholder="아이디"
                    fullWidth={true}
                    margin="dense"
                    onChange={this.handleChange("userId")}
                  />
                  <TextField
                    value={this.state.data.password}
                    label="비밀번호"
                    placeholder="비밀번호"
                    fullWidth={true}
                    margin="dense"
                    type="password"
                    onChange={this.handleChange("password")}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    className={classes.submit}
                    onClick={this.onLogin}
                  >
                    로그인
                  </Button>
                </form>
              </MarginedContainer>
            </MarginedContainer>
          ) : (
            <React.Fragment>
              {grades !== undefined && grades.mainList !== undefined ? (
                Array.isArray(grades.mainList.list) ? (
                  <React.Fragment>
                    <Typography variant="subheading">
                      {grades.strMyShreg}
                    </Typography>
                    <Typography variant="body1">
                      총 입력된 학점: {grades.mainList.list[0].tot_pnt}
                      <br />
                      평균학점 : {grades.mainList.list[0].avg_mrks}
                      <br />
                      공개학점 : {grades.mainList.list[0].sum_pnt}
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Typography variant="subheading">
                      {grades.strMyShreg}
                    </Typography>
                    <Typography variant="body1">
                      총 입력된 학점: {grades.mainList.list.tot_pnt}
                      <br />
                      평균학점 : {grades.mainList.list.avg_mrks}
                      <br />
                      공개학점 : {grades.mainList.list.sum_pnt}
                    </Typography>
                  </React.Fragment>
                )
              ) : (
                <React.Fragment />
              )}
              <MarginedContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.cell}>과목</TableCell>
                      <TableCell className={classes.cell}>학점</TableCell>
                      <TableCell className={classes.cell}>성적</TableCell>
                      <TableCell className={classes.cell}>점수</TableCell>
                      <TableCell className={classes.cell}>구분</TableCell>
                      <TableCell className={classes.cell}>교수</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {grades !== undefined && grades.mainList !== undefined ? (
                      Array.isArray(grades.mainList.list) ? (
                        grades.mainList.list.map((list: any, idx: number) => {
                          return (
                            <TableRow key={idx}>
                              <TableCell
                                className={classes.cell}
                                padding="none"
                                component="th"
                                scope="row"
                              >
                                {list.curi_nm}
                              </TableCell>
                              <TableCell
                                className={classes.cell}
                                padding="none"
                              >
                                {list.class_no}
                              </TableCell>
                              <TableCell
                                className={classes.cell}
                                padding="none"
                              >
                                {list.conv_grade}
                              </TableCell>
                              <TableCell
                                className={classes.cell}
                                padding="none"
                              >
                                {list.mrks}
                              </TableCell>
                              <TableCell
                                className={classes.cell}
                                padding="none"
                              >
                                {list.cmp_div_nm}
                              </TableCell>
                              <TableCell
                                className={classes.cell}
                                padding="none"
                              >
                                {list.prof_no_nm}
                              </TableCell>
                            </TableRow>
                          );
                        })
                      ) : (
                        <TableRow key={1}>
                          <TableCell
                            className={classes.cell}
                            padding="none"
                            component="th"
                            scope="row"
                          >
                            {grades.mainList.list.curi_nm}
                          </TableCell>
                          <TableCell className={classes.cell} padding="none">
                            {grades.mainList.list.class_no}
                          </TableCell>
                          <TableCell className={classes.cell} padding="none">
                            {grades.mainList.list.conv_grade}
                          </TableCell>
                          <TableCell className={classes.cell} padding="none">
                            {grades.mainList.list.mrks}
                          </TableCell>
                          <TableCell className={classes.cell} padding="none">
                            {grades.mainList.list.cmp_div_nm}
                          </TableCell>
                          <TableCell className={classes.cell} padding="none">
                            {grades.mainList.list.prof_no_nm}
                          </TableCell>
                        </TableRow>
                      )
                    ) : (
                      <React.Fragment />
                    )}
                  </TableBody>
                </Table>
              </MarginedContainer>
            </React.Fragment>
          )}
        </Paper>
      </React.Fragment>
    );
  }

  private handleChange = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    this.setState({
      data: update(this.state.data, { [name]: { $set: e.target.value } })
    });
    e.preventDefault();
  };

  private onLogin = () => {
    login(this.state.data.userId, this.state.data.password)
      .then(value => {
        const cookie = value.data.JSESSIONID;
        const userNo = value.data.userNo;

        this.setState({ auth: { cookie, userNo }, data: {} });

        this.checkGrade();
      })
      .catch(reason => {
        alert(`로그인 실패 ${reason}`);
      });
  };

  private onLogout = () => {
    this.setState({ auth: undefined, grade: undefined });
  };

  private checkGrade = () => {
    this.setState({ grade: undefined });
    if (this.state.auth) {
      const { cookie, userNo } = this.state.auth;
      grade(cookie, userNo).then(value => {
        this.setState({ grade: value.root });
      });
    }
  };

  private onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
}

export default withStyles(styles)(App);
