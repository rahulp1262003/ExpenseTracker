import { StyleSheet, Text, View } from "react-native"

import { GloableStyles } from "../../constants/style";

function ExpensesSummary({expenses, periodName}) {

    const expensesSum = expenses.reduce((sum, expense)=>{
        return sum + expense.amount
    },0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}> ${expensesSum.toFixed(2)} </Text>
        </View>

    )
}

export default ExpensesSummary

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: GloableStyles.colors.Blue003,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12
    },
    period:{
        fontSize: 16,
        color: GloableStyles.colors.Black
    },
    sum:{
        fontSize: 20,
        fontWeight: 'bold',
        color: GloableStyles.colors.Blue005
    },
});