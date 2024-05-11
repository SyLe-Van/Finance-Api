const router = require("express").Router();

const financeController = require("../controllers/financeControllers.js");

router.post("/register", financeController.register);
router.post("/login", financeController.login);
router.get("/getUser/:id", financeController.getUser);
router.put("/updateUser/:id", financeController.updatePremium);

module.exports = router;
