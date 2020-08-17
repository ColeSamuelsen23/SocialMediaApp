import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Card from "@material-ui/core/Card";
dayjs.extend(relativeTime);

const styles = {
  paper: {
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    padding: 5,
  },
  img: {
    width: 50,
  },
  header: {},
  text1: {
    color: "#231f59",
    textAlign: "center",
  },
  card: {
    padding: 5,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "#112647",
  },
  card2: {
    padding: 5,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "#e0d124",
  },
};

class Achievments extends Component {
  render() {
    var achievments, listofachievments;

    if (this.props.user.userData) {
      achievments = this.props.user.userData.achievments;
      listofachievments = achievments.map((achievment) => (
        <ListItem key={achievment.goalid}>
          <ListItemText
            primary={achievment.goal}
            secondary={dayjs(achievment.accomplishedAt.toString()).fromNow()}
          />
          <hr></hr>
        </ListItem>
      ));
    }

    return (
      <div>
        <Paper style={styles.paper}>
          <Grid container>
            <Grid item md={12}>
              <Grid item md={12}>
                <Card style={styles.card}>
                  <Card>
                    <Typography style={styles.text1} variant="h4">
                      Accomplished
                    </Typography>
                  </Card>
                </Card>
              </Grid>
            </Grid>

            <Grid item md={12}>
              <Card style={styles.card2}>
                <Card>
                  <List>{listofachievments}</List>
                </Card>
              </Card>
            </Grid>
            <hr></hr>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Achievments.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Achievments);
