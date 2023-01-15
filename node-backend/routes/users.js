var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", function (req, res, next) {
  let token = req.body.credential;
  let CLIENT_ID = req.body.clientId;
  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(CLIENT_ID);
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload["sub"];

    console.log(payload);
  }
  verify().catch(console.error);

  res.send("respond with a resource");
});

module.exports = router;
