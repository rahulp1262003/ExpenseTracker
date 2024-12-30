import { StyleSheet, Text, View } from 'react-native'

import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GloableStyles } from '../../constants/style'

function ExpensesOutput({ expenses, expnsesPeriod, fallbackText }) {

    let content = <Text style={styles.fallbackText}>{fallbackText}</Text>
    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expnsesPeriod} />
            {content}
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
    fallbackText: {
        fontSize: 17,
        color: GloableStyles.colors.Blue004,
        marginTop: 32,
        textAlign: 'center'
    },
});