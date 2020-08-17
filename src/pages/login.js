import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Logo from '../imgs/loginimg.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


const styles = {

    form: {
        textAlign: 'center'
    },
    image: {

        margin:'60px auto 0px auto'
    },
    
    button: {
        margin:20,
        position: 'relative'
    },

    progress: {
        position: 'absolute'
    }
}

class login extends Component { 

    
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.loginUser(userData, this.props.history);
      };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    constructor(props) {
        super();
    
        this.state = {
             email: '',
             password: '',
             loading: false,
        }
    }
    

    render() {
        const {
            classes,
            UI: { loading }
          } = this.props;

        return (
            <Grid container className={classes.form}>
                <Grid item sm/>

                <Grid item sm>
                    <img src = {Logo} width = "150" className = {classes.image} alt='img not found:('></img>
                    <Typography variant = "h3">Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField onChange ={this.handleChange}
                        id ="email" 
                        name="email" 
                        type="email" 
                        label="Email" 
                        className={classes.textfield} 
                        value = {this.state.email} fullWidth>
 
                        </TextField>
                        <TextField onChange ={this.handleChange} 
                        id ="password" 
                        name="password"
                        type="password" 
                        label="Password" 
                        className={classes.textfield} value = {this.state.password} fullWidth>
 
                        </TextField>
                        <Button type ="submit"
                         variant = "contained" 
                         color = "primary" 
                         className={classes.button}
                         disabled= {loading}>
                         Login
                         {loading && (
                            <CircularProgress size = {25} className={classes.progress}/>     
                         )}
                         </Button>
                        <div>
                            Sign up <Link href="./signup">Here</Link>
                        </div>
                    </form>
                </Grid>

                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
  });
  
  const mapActionsToProps = {
    loginUser
  };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(login));
