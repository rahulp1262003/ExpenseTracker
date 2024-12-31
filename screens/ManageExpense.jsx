import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native"

import IconButton from "../components/UI/IconButton";
import { GloableStyles } from "../constants/style";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {

  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(
        editedExpenseId,
        {
          description: 'Test',
          amount: 29.99,
          date: new Date()
        }
      );
    } else {
      expensesCtx.addExpense({
        description: 'Test!!!',
        amount: 19.99,
        date: new Date()
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.rootContainer}>
      <ExpenseForm submitButtonlabel={isEditing ? 'Update' : 'Add'} onCancel={cancelHandler}  />
      {isEditing && (
        <View style={styles.deleteContainer} >
          <IconButton color={GloableStyles.colors.Red} icon="delete" size={30} onPress={deleteExpenseHandler} />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  rootContainer:{
    padding: 16
  },
  deleteContainer: {
    marginTop: 20,
    marginHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: GloableStyles.colors.Blue003,
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

});