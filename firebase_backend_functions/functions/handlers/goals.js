const { db } = require("../util/admin");

exports.getGoals = (req, res) => {
  db.collection("Goals")
    .get()
    .then(data => {
      let goals = [];
      data.forEach(doc => {
        goals.push({
          body: doc.data().body
        });
      });
      return res.json(goals);
    })
    .catch(err => {
      return res.json(err);
    });
};

// Gets Current Daily Goal

exports.getDailyGoal = (req, res) => {
  db.collection("dailygoal")
    .get()
    .then(data => {
      let dailygoal;
      let dailygoals = [];
      data.forEach(doc => {
        dailygoals.push({
          id: doc.data().id,
          body: doc.data().body
        });
      });
      dailygoal = dailygoals[0];
      return res.json(dailygoal);
    })
    .catch(err => {
      return res.json(err);
    });
};

exports.setDailyGoal = (req, res) => {
  // Removes Currently Set Daily Goal(s)

  db.collection("dailygoal")
    .get()
    .then(function(querySnapshot) {
      // Once we get the results, begin a batch
      var batch = db.batch();

      // For each doc, add a delete operation to the batch
      querySnapshot.forEach(function(doc) {
        batch.delete(doc.ref);
      });

      // Commit the batch
      return batch.commit();
    });

  db.collection("Goals")
    .get()
    .then(data => {
      let goals = [];
      data.forEach(doc => {
        goals.push({
          id: doc.id,
          body: doc.data().body
        });
      });

      //Returns a random number between 0 and max.

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      //Choosing random index for new goal.
      let randomgoal;

      randomindex = getRandomInt(goals.length);
      randomgoal = goals[randomindex];

      //Adds randomly selected goal to the "dailygoal" collection

      db.collection("dailygoal").add(randomgoal);

      return res.json({ randomgoal });
    });
};

exports.getRandomGoal = (req, res) => {
  db.collection("Goals")
    .get()
    .then(data => {
      let goals = [];
      let randomgoal;
      data.forEach(doc => {
        goals.push({
          body: doc.data().body
        });
      });

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      randomindex = getRandomInt(goals.length);
      randomgoal = goals[randomindex];
      return res.json({ randomgoal });
    })
    .catch(err => {
      return res.json(err);
    });
};
