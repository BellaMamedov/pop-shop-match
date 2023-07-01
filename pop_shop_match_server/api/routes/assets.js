const express = require("express");
const Asset = require("../models/asset.js");

const router = express.Router();
//CREATE
router.post("/", async (req, res) => {
  const newAsset = new Asset(req.body);

  try {
    const savedAsset = await newAsset.save();
    res.status(200).json(savedAsset);
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedAsset = await Asset.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedAsset);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE
router.delete("/:id", async (req, res) => {
    try {
     await Asset.findByIdAndDelete(
        req.params.id,
      );
      res.status(200).json("Asset has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
//GET
router.get("/:id", async (req, res) => {
    try {
      const asset = await Asset.findById(
        req.params.id
      );
      res.status(200).json(asset);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GETALL
  router.get("/", async (req, res) => {
    try {
      const assets = await Asset.find(
        req.params.id
      );
      res.status(200).json(assets);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
