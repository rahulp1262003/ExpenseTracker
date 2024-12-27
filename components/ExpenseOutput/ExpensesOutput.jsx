import { StyleSheet, View } from 'react-native'

import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GloableStyles } from '../../constants/style'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.69,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 99.19,
        date: new Date('2021-1-17')
    },
    {
        id: 'e3',
        description: 'A pair of shirt',
        amount: 100.14,
        date: new Date('2022-6-14')
    },
    {
        id: 'e4',
        description: 'Some Bananas',
        amount: 5.33,
        date: new Date('2021-4-14')
    },
    {
        id: 'e5',
        description: 'A book',
        amount: 59.33,
        date: new Date('2021-8-16')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.69,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 99.19,
        date: new Date('2021-1-17')
    },
    {
        id: 'e8',
        description: 'A pair of shirt',
        amount: 100.14,
        date: new Date('2022-6-14')
    },
    {
        id: 'e9',
        description: 'Some Bananas',
        amount: 5.33,
        date: new Date('2021-4-14')
    },
    {
        id: 'e10',
        description: 'A book',
        amount: 59.33,
        date: new Date('2021-8-16')
    }
]

function ExpensesOutput({ expenses, expnsesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expnsesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
        backgroundColor: GloableStyles.colors.Blue001
    },
});