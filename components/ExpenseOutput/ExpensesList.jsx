import { FlatList, Text } from "react-native"

function renderdExpensesItems(itemData) {
  return <Text>{itemData.item.description}</Text>
}

function ExpensesList({ expenses }) {
  return (
    <FlatList data={expenses} renderItem={renderdExpensesItems} keyExtractor={(item) => item.id} />
  )
}

export default ExpensesList