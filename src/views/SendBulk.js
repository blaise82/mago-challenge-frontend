import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/send.module.css";
import Svg from "../svg/send1.svg";
import Button from "@material-ui/core/Button";
import {
  sendBulkMessageAction,
  closeMessage,
} from "../redux/actions/bulkAction";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

class SendBulk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageError: "",
      messageStatus: false,
      phones: [],
    };
  }
  componentDidMount() {
    const users = this.props.usersState;
    const phones = [];
    console.log(users.data);
    if (users.data.length >= 1) {
      const data = users.data;
      console.log(data);
      data.filter(function (item) {
        console.log("item", item);
        phones.push(item.phone);
      });
      this.setState({
        phones: phones,
      });
    }
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      messageError: "",
      messageStatus: false,
    };
    if (this.state.message.length < 1) {
      isError = true;
      errors.messageStatus = true;
      errors.messageError = "Please provide a message";
    }
    if (this.state.message.length >= 1600) {
      isError = true;
      errors.messageStatus = true;
      errors.messageError = "Please provide a short message";
    }
    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };
  onSubmit = async (e) => {
    e.preventDefault();

    const error = this.validate();
    if (!error) {
      const send = {
        messageBody: this.state.message,
        numberList: this.state.phones,
      };
      await this.props.sendBulkMessageAction(send, this.props.history);
    }
  };

  render() {
    console.log("state here", this.state.phones);
    return (
      <div>
        <div className={styles.side}>
          <img className={styles.svg} src={Svg} alt="illustration" />
        </div>

        <div className={styles.side}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>
              Sending message to everyone who subscribed (Bulk message){" "}
            </h1>

            <form
              className={styles.form}
              autoComplete="off"
              onSubmit={(e) => this.onSubmit(e)}
            >
              <TextField
                className={styles.input}
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={10}
                error={this.state.messageStatus}
                helperText={this.state.messageError}
                variant="outlined"
                name="message"
                value={this.state.message}
                onChange={(e) => this.change(e)}
              />
              <br />
              <br />
              <Button
                className={styles.button}
                variant="contained"
                type="submit"
                color="secondary"
                disableElevation
              >
                {this.props.sendBulkState.loading === "block" ? (
                  <div className={styles.progress}>
                    <CircularProgress size={24} color="#4b7ba0" />
                  </div>
                ) : (
                  "Send bulk Message"
                )}
              </Button>
            </form>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={this.props.sendBulkState.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          message={
            <span id="message-id">{this.props.sendBulkState.error}</span>
          }
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={this.props.closeMessage}
            >
              <CloseIcon aria-label="Close" />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sendBulkState: state.sendBulk,
    usersState: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendBulkMessageAction: (data, history) =>
      dispatch(sendBulkMessageAction(data, history)),
    closeMessage: () => dispatch(closeMessage()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SendBulk)
);
