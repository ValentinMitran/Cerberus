const router = require("express").Router();
const verifyToken = require("../utils/verifyToken");
const jwt = require("jsonwebtoken");
const Ad = require("./../models/Store/Ads");

router.post("/ads", verifyToken, async (req, res) => {
  const decoded = jwt.decode(req.header("authToken"));

  const ad = new Ad({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    username: decoded.username,
  });

  try {
    await ad.save();
    res.send("Success");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/ads", verifyToken, async (req, res) => {
  try {
    const ads = await Ad.find({}, {});
    res.send(ads);
  } catch (err) {
    res.status(404).send();
  }
});

router.post("/getAd", verifyToken, async (req, res) => {
  try {
    const ads = await Ad.findOne({ _id: req.body.adId });
    res.send(ads);
  } catch (err) {
    res.status(404).send();
  }
});


module.exports = router;
