import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../components/UI/IconButton";
import LoadingOverlay from "../components/UI/IconButton";
import { GloableStyles } from "../constants/style";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpenses, updateExpense } from "../util/http";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState();

	const expensesCtx = useContext(ExpensesContext);

	const editedExpenseId = route.params?.expenseId;
	const isEditing = !!editedExpenseId;

	const selectedExpense = expensesCtx.expenses.find(
		(expense) => expense.id === editedExpenseId
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: isEditing ? "Edit Expense" : "Add Expense",
		});
	}, [navigation, isEditing]);

	async function deleteExpenseHandler() {
		setIsSubmitting(true);
		try {
			await deleteExpense(editedExpenseId);
			expensesCtx.deleteExpense(editedExpenseId);
			navigation.goBack();
		} catch (error) {
			setError('Could not delete the expense - try again later !');
			setIsSubmitting(false);
		}
	}

	function cancelHandler() {
		navigation.goBack();
	}

	async function confirmHandler(expenseData) {
		setIsSubmitting(true);
		try {
			if (isEditing) {
				expensesCtx.updateExpense(editedExpenseId, expenseData);
				await updateExpense(editedExpenseId, expenseData);
			} else {
				const id = await storeExpenses(expenseData);
				expensesCtx.addExpense({ ...expenseData, id: id });
			}
			navigation.goBack();
		} catch (error) {
			setError('Could not save data - please try again later!');
			setIsSubmitting(false);
		}
	}
	function errorHandler() {
		setError(null)
	}

	if (error && !isSubmitting) {
		return <ErrorOverlay message={error} onConfirm={errorHandler} />
	}

	if (isSubmitting) {
		return <LoadingOverlay />;
	}

	return (
		<View style={styles.rootContainer}>
			<ExpenseForm
				submitButtonlabel={isEditing ? "Update" : "Add"}
				onCancel={cancelHandler}
				onSubmit={confirmHandler}
				defaultValues={selectedExpense}
			/>
			{isEditing && (
				<View style={styles.deleteContainer}>
					<IconButton
						color={GloableStyles.colors.Red}
						icon="delete"
						size={30}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
}

export default ManageExpense;

const styles = StyleSheet.create({
	rootContainer: {
		padding: 16,
	},
	deleteContainer: {
		marginTop: 20,
		marginHorizontal: 15,
		borderTopWidth: 1,
		borderTopColor: GloableStyles.colors.Blue003,
		paddingTop: 5,
		justifyContent: "center",
		alignItems: "center",
	},
});
