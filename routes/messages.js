const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();
// import { BASE_URL } from '../constant';

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

// router.post(`${BASE_URL}/addmsg/`, addMessage);
// router.post(`${BASE_URL}/getmsg/`, getMessages);

module.exports = router;