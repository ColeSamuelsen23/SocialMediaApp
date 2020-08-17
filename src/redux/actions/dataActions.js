import {
  DELETE_POST,
  SET_POSTS,
  LOADING_DATA,
  SET_GOAL,
  SET_DAILY_GOAL,
  LOADING_UI,
  POST_RESPONSE,
  CLEAR_ERRORS,
  SET_ERRORS,
  ADD_ACHIEVMENT,
} from "../types";
import axios from "axios";

export const deletePost = (postId) => (dispatch) => {
  axios
    .delete(
      `https://us-central1-socialapp-35d2e.cloudfunctions.net/api/post/${postId}`
    )
    .then(() => {
      dispatch({ type: DELETE_POST, payload: postId });
    });
};

export const setDailyGoal = () => (dispatch) => {
  console.log("setDailyGoal");
  axios
    .get(
      `https://cors-anywere.herokuapp.com/https://us-central1-socialapp-35d2e.cloudfunctions.net/api/setgoal`
    )
    .then(() => {
      dispatch({ type: SET_DAILY_GOAL });
      dispatch(getDailyGoal());
      console.log("worked");
    });
};

export const getPosts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://cors-anywere.herokuapp.com/https://us-central1-socialapp-35d2e.cloudfunctions.net/api/posts"
    )
    .then((res) => {
      dispatch({
        type: SET_POSTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_POSTS,
        payload: [],
      });
    });
};

// Post a Response
export const postResponse = (newPost) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(
      "https://cors-anywere.herokuapp.com/https://us-central1-socialapp-35d2e.cloudfunctions.net/api/post",
      newPost
    )
    .then((res) => {
      dispatch({
        type: POST_RESPONSE,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
      });
    });
};

// Add Achievment
export const addAchievment = (newAchievment) => (dispatch) => {
  axios
    .post(
      "https://cors-anywere.herokuapp.com/https://us-central1-socialapp-35d2e.cloudfunctions.net/api/addachievment",
      newAchievment
    )
    .then((res) => {
      dispatch({
        type: ADD_ACHIEVMENT,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
      });
    });
};

export const getDailyGoal = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(
      "https://cors-anywere.herokuapp.com/https://us-central1-socialapp-35d2e.cloudfunctions.net/api/dailygoal"
    )
    .then((res) => {
      dispatch({
        type: SET_GOAL,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_GOAL,
        payload: [],
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
