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
import { connect } from 'react-redux';
import { signupUser} from '../redux/actions/userActions';

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



class signup extends Component {
    
    handleSubmit = (event) => {

        event.preventDefault();
        this.setState({loading:true});

        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle:this.state.confirmPassword
        };
        this.props.logoutUser(newUserData, this.props.history);
    }
    handleChange = (event) => {
        console.log("yepp");
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    constructor(props) {
        super();
    
        this.state = {
             email: '',
             password: '',
             confirmPassword: '',
             handle: ''
        }
    }
    

    render() {
        const { classes, UI: {loading} } = this.props;

        return (
            <Grid container className={classes.form}>
                <Grid item sm/>

                <Grid item sm>
                    <img src = {Logo} width = "150" className = {classes.image} alt='img not found :('></img>
                    <Typography variant = "h3">SignUp</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>

                        <TextField onChange ={this.handleChange}
                        id ="handle"
                        name="handle" 
                        type="text" 
                        label="Username" 
                        className={classes.textfield}
                        value = {this.state.handle} fullWidth>
                        </TextField>

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

                        <TextField onChange ={this.handleChange} 
                        id ="confirmPassword" 
                        name="confirmPassword"
                        type="password" 
                        label="Confirm Password" 
                        className={classes.textfield} value = {this.state.confirmPassword} fullWidth>
                        </TextField>

                        <Button type ="submit"
                         variant = "contained" 
                         color = "primary" 
                         className={classes.button}
                         disabled= {loading}>
                         Sign Up
                         {loading && (
                            <CircularProgress size = {25} className={classes.progress}/>     
                         )}
                         </Button>
                        <div>
                            Have an Account? <Link href="./login">Login</Link>
                        </div>
                    </form>
                </Grid>

                <Grid item sm/>
            </Grid>
        )
    }
}

signup.protoTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStatetoProps = (state) => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStatetoProps, { signupUser })(withStyles(styles)(signup));
