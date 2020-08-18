const functions = require("firebase-functions");
const app = require("express")();
const { achieveGoal } = require("./handlers/achievments");
const {
  getGoals,
  getDailyGoal,
  setDailyGoal,
  getRandomGoal
} = require("./handlers/goals");
const {
  getAllPosts,
  postOnePost,
  getPost,
  deletePost
} = require("./handlers/posts");
const {
  loginuser,
  usersignup,
  getauthdetails,
  getUserDetails,
  addUserDetails
} = require("./handlers/users");

const FBAuth = require("./util/fbauth");

app.get("/goals", getGoals);
app.get("/dailygoal", getDailyGoal);
app.get("/setgoal", setDailyGoal);
app.get("/getrandomgoal", getRandomGoal);

// ===================================== //

app.post("/addachievment", FBAuth, achieveGoal);

// ===================================== //

app.get("/post/:postId", getPost);
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);
app.delete("/post/:postId", FBAuth, deletePost);

// ===================================== //

app.post("/signup", usersignup);
app.post("/loginuser", loginuser);

//-----------------------------------------//

app.post("/user", FBAuth, addUserDetails);
app.get("/getdetails", FBAuth, getauthdetails);
app.get("/user/:handle", getUserDetails);

exports.api = functions.https.onRequest(app);
