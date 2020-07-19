import React, { Component } from "react";
import { connect } from "react-redux";
import { getAppointmentsAction } from "../redux/actions/appointmentAction";
import { withRouter } from "react-router-dom";
import AppointmentsTable from "../components/AppointmentsTable";
import Button from "@material-ui/core/Button";
import FlashOn from "@material-ui/icons/FlashOn";
import Grain from "@material-ui/icons/Grain";
import { Link } from "react-router-dom";

class Appointments extends Component {
  componentDidMount() {
    this.props.getAppointmentsAction();
  }
  render() {
    return (
      <div>
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
        <AppointmentsTable />
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
    getAppointmentsAction: () => dispatch(getAppointmentsAction()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Appointments)
);
