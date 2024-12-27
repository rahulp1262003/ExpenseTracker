import { View } from 'react-native'

import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

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
    }
]

function ExpensesOutput({ expenses, expnsesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expnsesPeriod} />
            <ExpensesList />
        </View>
    )
}

export default ExpensesOutput