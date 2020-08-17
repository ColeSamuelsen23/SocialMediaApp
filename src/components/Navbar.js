import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/actions/userActions';
// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import { Typography } from '@material-ui/core';


class Navbar extends Component {


  handleLogout = () => {
    this.props.logoutUser();
  };

  render() 
  {
    const {user :{userData}}
     = this.props;

     var handle;

     if (userData) {handle = userData.credentials.handle}
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
                <Button component={Link} to="/login">
                  <HomeIcon color ="action"></HomeIcon>
              </Button>
            <Typography> {handle}</Typography>
              <Button color="inherit" onClick={this.handleLogout} style={{marginLeft: "auto"}}>
                <Typography>Logout</Typography>
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};


const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user
});

const mapActionsToProps = { logoutUser};

export default connect(mapStateToProps,mapActionsToProps)(Navbar);

