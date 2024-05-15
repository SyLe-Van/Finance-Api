const router = require("express").Router();

const moneyPaymentController = require("../controllers/moneyPaymentControllers");

router.post("/addGroup", moneyPaymentController.addGroup);
router.put("/updateMember", moneyPaymentController.updateMember);
router.put("/addMember", moneyPaymentController.addMember);
router.delete("/deleteMember", moneyPaymentController.deleteMember);
router.put("/addPayList/:groupId", moneyPaymentController.addPayList);
router.put("/updatePayList/:groupId", moneyPaymentController.updatePayList);
router.delete("/deletePayList/:groupId", moneyPaymentController.deletePayList);
router.delete(
  "/deleteGroup/:userId/:groupId",
  moneyPaymentController.deleteGroup
);
router.get("/getAllGroups/:userId", moneyPaymentController.getAllGroups);
router.get("/calculateGroup/:groupId", moneyPaymentController.calculateGroup);
router.get(
  "/getOneGroupID/:userId/:groupId",
  moneyPaymentController.getGroupInfo
);
module.exports = router;
