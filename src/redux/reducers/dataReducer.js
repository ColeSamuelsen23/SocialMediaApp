import {
  DELETE_POST,
  SET_POSTS,
  LOADING_DATA,
  SET_GOAL,
  SET_DAILY_GOAL,
  POST_RESPONSE,
  ADD_ACHIEVMENT
} from "../types";

const initialState = {
  dailygoal: {},
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state
      };
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case ADD_ACHIEVMENT:
      return {
        ...state
      };
    case SET_DAILY_GOAL:
      return {
        ...state
      };
    case SET_GOAL:
      return {
        ...state,
        dailygoal: action.payload,
        loading: false
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case POST_RESPONSE:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
}
