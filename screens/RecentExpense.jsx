import { useContext } from "react"
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpense() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expnsesPeriod="Last 7 Days" />
  )
}

export default RecentExpense