import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI Stuff
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
// Redux stuff
import { connect } from "react-redux";
import { postResponse } from "../redux/actions/dataActions";

const styles = {
  submitButton: {
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "#112647",
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%",
  },
  Button1: {
    backgroundColor: "#ffffff",
  },
};

class Response extends Component {
  state = {
    open: false,
    body: "",
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.UI.loading) {
      this.setState({ body: "" });
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postResponse(this.props.postId, { body: this.state.body });
  };

  render() {
    const {
      UI: { loading },
    } = this.props;

    return (
      <Fragment>
        <Button
          onClick={this.handleOpen}
          tip="Post a Comment!"
          style={styles.Button1}
        >
          <Typography>COMMENT</Typography>
          <AddCircleOutlineIcon />
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <Button tip="Close" onClick={this.handleClose}>
            <CloseIcon />
          </Button>
          <DialogTitle style={{ textAlign: "center" }}>
            How ya Been?
          </DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="body"
                type="text"
                label="Reply"
                multiline
                rows="3"
                placeholder="Hi"
                onChange={this.handleChange}
                fullWidth
              />
              <Button
                style={styles.submitButton}
                type="submit"
                variant="contained"
                disabled={loading}
              >
                {" "}
                <Typography style={{ color: "#ffffff" }}> SUBMIT </Typography>
                {loading && (
                  <CircularProgress style={styles.progressSpinner} size={30} />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

postResponse.propTypes = {
  postResponse: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { postResponse })(
  withStyles(styles)(Response)
);
