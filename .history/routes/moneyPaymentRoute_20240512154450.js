const router = require("express").Router();

const moneyPaymentController = require("../controllers/moneyPaymentControllers");

router.post("/addGroup", moneyPaymentController.addGroup);
router.put("/updateMember", moneyPaymentController.updateMember);
router.put("/addMember", moneyPaymentController.addMember);
router.delete("/deleteMember", moneyPaymentController.deleteMember);
router.put("/addPayList", moneyPaymentController.addPayList);
router.put("/updatePayList", moneyPaymentController.updatePayList);
router.delete("/deletePayList", moneyPaymentController.deletePayList);
router.delete("/deleteGroup", moneyPaymentController.deleteGroup);
router.get("/calculateGroup/:groupId", moneyPaymentController.calculateGroup);

module.exports = router;
