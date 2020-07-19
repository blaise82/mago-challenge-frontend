import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersAction } from "../redux/actions/usersAction";
import { withRouter } from "react-router-dom";
import UsersTable from "../components/UsersTable";

class Home extends Component {
  componentDidMount() {
    this.props.getUsersAction();
  }
  render() {
    return (
      <div>
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
