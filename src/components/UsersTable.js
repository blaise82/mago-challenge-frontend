import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  pending: {
    textTransform: "uppercase",
    color: "white",
    background: "#FEC400",
    border: "none",
    opacity: "0.79",
  },
  rejected: {
    textTransform: "uppercase",
    color: "white",
    background: "#F12B2C",
    border: "none",
    opacity: "0.79",
  },
  link: {
    textDecoration: "none",
  },
  approved: {
    textTransform: "uppercase",
    color: "white",
    background: "#29CC97",
    border: "none",
    opacity: "0.79",
  },
  progress: {
    position: "absolute",
    marginRight: "auto",
    marginLeft: "auto",
    left: 0,
    right: 0,
  },
}));

const UsersTable = () => {
  const users = useSelector((state) => state.users);
  let rows = {};
  try {
    if (users.loading == "none") {
      rows = users.data;
      console.log("rows", rows);
    }
  } catch (error) {
    console.log(error.message);
  }

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <Toolbar>
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          All Subscribed Farmers
        </Typography>
      </Toolbar>
      <Table className={classes.table} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align="center">User Id</TableCell>
            <TableCell align="center">Names</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Livestock</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Send</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length >= 1 ? (
            (rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.id} hover style={{ cursor: "pointer" }}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.names}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.phone}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.type}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.points}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Link
                    className={classes.link}
                    to={{
                      pathname: "/send-single",
                      state: { phone: row.phone, names: row.names },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      Send Message
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))
          ) : users.loading == "block" ? (
            <TableRow>
              <TableCell colspan="6" align="center">
                <CircularProgress
                  variant="indeterminate"
                  disableShrink
                  size={24}
                  thickness={4}
                />
              </TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell colspan="6" align="center">
                There is not subscribed user yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;
