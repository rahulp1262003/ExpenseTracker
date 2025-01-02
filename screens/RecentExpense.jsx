import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fatchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function RecentExpense() {
	const [isFatching, setIsFatching] = useState(true);
	const [error, setError] = useState();
	const expensesCtx = useContext(ExpensesContext);

	useEffect(() => {
		async function getExpenses() {
			setIsFatching(true);
			try {
				const expenses = await fatchExpenses();
				expensesCtx.setExpenses(expenses);
			} catch (error) {
				setError('Cou;d not fetch expenses !');
			}
			setIsFatching(false);
		}

		getExpenses();
	}, []);

	function errorHandler() {
		setError(null);
	}

	if (error && !isFatching) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />
	}

	if (isFatching) {
		return <LoadingOverlay />;
	}

	const recentExpenses = expensesCtx.expenses.filter((expense) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 7);
		return expense.date >= date7DaysAgo && expense.date <= today;
	});
	return (
		<ExpensesOutput
			expenses={recentExpenses}
			expnsesPeriod="Last 7 Days"
			fallbackText="No expenses registered for the last 7 days."
		/>
	);
}

export default RecentExpense;
