import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import PostResponse from "./Response";
import { addAchievment } from "../redux/actions/dataActions";

import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const styles = {
  Card: {
    padding: 5,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "#112647",
  },
  Button1: {
    backgroundColor: "#ffffff",
  },
  Button2: {
    backgroundColor: "#ffffff",
    marginLeft: "auto",
  },
  icon1: {
    color: "#112647",
  },
  icon2: {
    color: "#e0d124",
  },
};

class Postbar extends Component {
  handleClick = (id, goal) => {
    this.props.addAchievment({ goalid: id, goal: goal });
  };

  render() {
    var authenticated = this.props.user.authenticated;
    var id = this.props.goal.id;

    //This Goal is sent from parent component through props, not through Redux

    var goal = this.props.goal.body;

    return (
      <Card style={styles.Card}>
        <Grid container>
          <PostResponse goalid={goal}>
            <Typography>New Post</Typography>
          </PostResponse>
          <Button
            style={styles.Button2}
            disabled={!authenticated}
            onClick={() => {
              this.handleClick(id, goal);
            }}
          >
            <EmojiEventsIcon style={styles.icon2}></EmojiEventsIcon>
            <Typography>Achieved</Typography>
          </Button>
        </Grid>
      </Card>
    );
  }
}
Postbar.propTypes = {
  user: PropTypes.object.isRequired,
  addAchievment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  addAchievment,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Postbar));
