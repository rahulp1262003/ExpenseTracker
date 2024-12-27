import { FlatList, StyleSheet } from "react-native"

import ExpenseItem from "./ExpenseItem"

function renderdExpensesItems(itemData) {
  return <ExpenseItem {...itemData.item} />
}

function ExpensesList({ expenses }) {
  return (
    <FlatList style={{ marginTop: 10 }} data={expenses} renderItem={renderdExpensesItems} keyExtractor={(item) => item.id} />
  )
}

export default ExpensesList