import { useContext } from "react"
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context"

function AllExpenses() {

  const expensesCtx = useContext(ExpensesContext)

  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expnsesPeriod="Total" />
  )
}

export default AllExpenses