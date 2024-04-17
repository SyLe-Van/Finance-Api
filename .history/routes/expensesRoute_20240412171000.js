const router = require("express").Router();

const expensesController = require("../controllers/expensesControllers");

router.post("/addExpenses", expensesController.addExpenses);
router.delete(
  "/deleteExpenses/:userId/:expensesId",
  expensesController.deleteExpenses
);
router.get("/getExpense/:userId/:expensesId", expensesController.getExpense);
router.get("/getExpenses/:userId", expensesController.getExpenses);
router.get(
  "/getExpensesByCurrentMonth/:userId",
  expensesController.getExpensesByCurrentMonth
);
router.get(
  "/getExpensesByMonthAndYear/:userId/:month/:year",
  expensesController.getExpensesByMonthAndYear
);

router.get(
  "/getTotalExpensesMonthByYear/:userId/:year",
  expensesController.getTotalExpensesMonthByYear
);
router.put("/updateExpenses", expensesController.updateExpenses);
router.delete(
  "/deleteAllExpenses/:userId",
  expensesController.deleteAllExpenses
);
module.exports = router;
