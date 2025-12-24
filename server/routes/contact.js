const express = require("express");
const router = express.Router();
const Message = require("../models/Message"); // This imports your blueprint

// The POST route - This "posts" data to the database
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1. Create a new message using the blueprint
    const newMessage = new Message({ name, email, message });

    // 2. Save it to the Cloud (using await because it takes time)
    await newMessage.save();

    // 3. Send a success message back to React
    res.status(201).json({ success: true, message: "Message saved!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = router;
