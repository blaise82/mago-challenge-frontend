import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import styles from "../styles/send.module.css";
import Grid from "@material-ui/core/Grid";
import Svg from "../svg/send.svg";
import Button from "@material-ui/core/Button";

class SendMessage extends Component {
  render() {
    const { match, location, history } = this.props;
    const state = location.state;
    return (
      <div>
        <div className={styles.side}>
          <img className={styles.svg} src={Svg} alt="illustration" />
        </div>

        <div className={styles.side}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>Sending message to </h1>
            <p className={styles.name}> name: {state.names} </p>
            <p className={styles.name}> Phone: {state.phone} </p>

            <form className={styles.form} autoComplete="off">
              <TextField
                className={styles.input}
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={10}
                variant="outlined"
              />
              <br />
              <br />
              <Button
                className={styles.button}
                variant="contained"
                color="primary"
                disableElevation
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SendMessage);
