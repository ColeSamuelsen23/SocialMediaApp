import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { setDailyGoal } from "../redux/actions/dataActions";
import PropTypes from "prop-types";

const styles = {
  paper: {
    padding: 20,
    backgroundColor: "#ffffff"
  },
  DailyGoal: {
    paddingBottom: 50,
    color: "#112647",
    fontweight: "bold"
  },
  Goal: {
    paddingBottom: 50,
    color: "#231f59",
    fontweight: "bold"
  },
  Star: {
    color: "#e0d124",
    paddingBottom: 20
  },
  NextButton: {
    backgroundColor: "#112647",
    marginBottom: "10px"
  },
  NextButtonIcon: {
    color: "#e0d124"
  }
};

class DailyGoal extends Component {
  handleButtonClick = () => {
    this.props.setDailyGoal();
  };

  render() {
    let goal = this.props.goal.body;

    return (
      <div>
        <Paper style={styles.paper} square>
          <Typography
            fontWeight="fontWeightBold"
            variant="h3"
            style={styles.DailyGoal}
          >
            Daily Goal
          </Typography>
          <div style={styles.Star}>
            <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
            <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
            <StarBorderOutlinedIcon></StarBorderOutlinedIcon>
          </div>

          <br></br>
          <Typography
            fontWeight="fontWeightBold"
            variant="h2"
            style={styles.Goal}
          >
            {goal}
          </Typography>
          <Button style={styles.NextButton} onClick={this.handleButtonClick}>
            <NavigateNextIcon style={styles.NextButtonIcon}></NavigateNextIcon>
          </Button>
        </Paper>
      </div>
    );
  }
}

DailyGoal.propTypes = {
  setDailyGoal: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = { setDailyGoal };

export default connect(mapStateToProps, mapActionsToProps)(DailyGoal);
