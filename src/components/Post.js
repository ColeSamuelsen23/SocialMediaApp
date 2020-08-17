import React, { Component } from 'react';
import withStyles  from '@material-ui/core/styles/withStyles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import {deletePost} from '../redux/actions/dataActions';

const styles = {
    Card:{
        padding: 5,
        marginRight:20,
        marginLeft:20,
        marginBottom:10
    }
}

class Post extends Component {

    handledelete = (postId) => {
        this.props.deletePost(postId);
      };


    render() {

        dayjs.extend(relativeTime);
        var disabledbutton;
        var userHandle, body, createdAt, postId;
        
        userHandle = this.props.post.userHandle;
        body = this.props.post.body;
        createdAt = this.props.post.createdAt.toString();
        postId = this.props.post.postId;

        const {user :{userData}} = this.props;
        var handle;
        if(userData)  {
            handle = userData.credentials.handle
            if(handle === userHandle){
                disabledbutton =  <IconButton onClick={() => { this.handledelete(postId)}} >
                              <DeleteIcon style={{marginRight: "auto"}}></DeleteIcon>
                            </IconButton>;
            }
        };
        

        
        
        return (
            <Card style={styles.Card}>
                <Grid container>
                    <Grid item md={11}>
                        <Typography variant="body1" color="primary">{userHandle}</Typography>
                        <Typography variant="body2">{body}</Typography>
                        <Typography variant="caption" color ="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                    </Grid>
                    <Grid item md={1}>
                        {disabledbutton}
                    </Grid>
                </Grid>
            </Card>
        
        )
    }
}
Post.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    user: state.user
  });
  
  const mapActionsToProps = {
    deletePost
  };
  
  export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(Post));