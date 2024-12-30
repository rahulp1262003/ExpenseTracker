import { createContext, useReducer } from "react";

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
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ discription, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { discription, amount, date }) => { }
});

const expensesReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: id }, ...state]
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state
    }
}

const ExpensesContextProvider = ({ children }) => {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    }

    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;