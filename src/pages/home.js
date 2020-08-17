import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Post from '../components/Post';
import DailyGoal from '../components/DailyGoal.js';
import { connect } from 'react-redux';
import { getPosts , getDailyGoal} from '../redux/actions/dataActions';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import PostBar from '../components/Postbar';
import Achievments from '../components/Achievments'

const styles = {
    paper : {
        marginTop:20,
        padding:5,
        textalign:'top'

    }
}

class home extends Component {
    
    componentDidMount(){
        this.props.getPosts();
        this.props.getDailyGoal();
} 
    render() {
        var recentPosts, goal;
        const { posts, dailygoal } = this.props.data;
        
        if(dailygoal.body) {
            goal = <DailyGoal goal = {dailygoal} ></DailyGoal>
        }

        if(posts != null){
            recentPosts = posts.map((post) => <Post key={post.postId} post={post}/>);
        }

        return (
            <div>
                <Grid container>
                    <Grid item md={12} style={{textAlign:'center'}}>
                        {goal}
                    </Grid>
                    <Grid item md={8}>
                        <Paper style={styles.paper}>
                        <PostBar goal = {dailygoal}></PostBar>
                         {recentPosts}
                        </Paper>
                    </Grid>
                    <Grid item md={4}>
                        <Achievments></Achievments>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    getDailyGoal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    data: state.data
  });
  
  export default connect(
    mapStateToProps,
    { getPosts ,getDailyGoal }
  )(home);
