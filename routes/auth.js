const {
    login,
    register,
    getAllUsers,
    setAvatar,
    logOut,
  } = require("../controllers/userController");
  
  const router = require("express").Router();
  
  router.post("/login", login);
  router.post("/register", register);
  router.get("/allusers/:id", getAllUsers);
  router.post("/setavatar/:id", setAvatar);
  router.get("/logout/:id", logOut);

  // import { BASE_URL } from '../constant';
  // const router = require("express").Router();
  
  // router.post(`${BASE_URL}/login`, login);
  // router.post(`${BASE_URL}/register`, register);
  // router.get(`${BASE_URL}/allusers/:id`, getAllUsers);
  // router.post(`${BASE_URL}/setavatar/:id`, setAvatar);
  // router.get(`${BASE_URL}/logout/:id`, logOut);
  
  module.exports = router;