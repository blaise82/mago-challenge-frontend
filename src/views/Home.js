import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../redux/actions/usersAction";
import { withRouter } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import Button from "@material-ui/core/Button";
import FlashOn from "@material-ui/icons/FlashOn";
import Grain from "@material-ui/icons/Grain";
import { Link } from "react-router-dom";

class Home extends Component {
  componentDidMount() {
    this.props.getUsersAction();
  }
  render() {
    return (
      <div>
        <Link to="/view-appointments">
          <Button
            variant="contained"
            color="primary"
            style={{
              float: "left",
              marginLeft: "10%",
              marginTop: "3vh",
              marginBottom: "3vh",
            }}
          >
            <Grain style={{ width: "25px" }} />
            View all appointments
          </Button>
        </Link>
        <Link to="/send-bulk">
          <Button
            variant="contained"
            color="secondary"
            style={{
              float: "right",
              marginRight: "10%",
              marginTop: "3vh",
              marginBottom: "3vh",
            }}
          >
            <FlashOn style={{ width: "25px" }} />
            send bulk message
          </Button>
        </Link>
        <br />
        <UsersTable />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersAction: () => dispatch(getUsersAction()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
