import { StyleSheet, View } from 'react-native'

import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GloableStyles } from '../../constants/style'


function ExpensesOutput({ expenses, expnsesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expnsesPeriod} />
            <ExpensesList expenses={expenses} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: GloableStyles.colors.Blue001
    },
});