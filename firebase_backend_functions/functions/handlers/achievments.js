const { db } = require("../util/admin");

exports.achieveGoal = (req, res) => {
  const acievedocument = db
    .collection("achievments")
    .where("handle", "==", req.user.handle)
    .where("goalid", "==", req.body.goalid);

  const goalDocument = db.doc(`/Goals/${req.body.goalid}`);

  let goalData;

  goalDocument
    .get()
    .then(doc => {
      if (doc.exists) {
        goalData = doc.data();
        goalData.goalId = doc.id;
        return acievedocument.get();
      } else {
        return res.status(404).json({ error: "Goal not found" });
      }
    })
    .then(data => {
      if (data.empty) {
        return db
          .collection("achievments")
          .add({
            goalid: req.body.goalid,
            handle: req.user.handle,
            goal: req.body.goal,
            accomplishedAt: new Date().toISOString()
          })
          .then(() => {
            return res.json(goalData);
          });
      } else {
        return res.status(400).json({ error: "goal already achieved" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};
