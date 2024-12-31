import { StyleSheet, View } from "react-native"

import Input from "./Input"
import { useState } from "react"

function ExpenseForm() {

    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    })

    const inputnChangehandler = (inputIdentifire, enteredValues) => {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifire]: enteredValues
            };
        })
    }

    return (
        <View>
            <View style={styles.inputContainer}>
                <Input
                    label="Amount"
                    style={styles.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputnChangehandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }} />
                <Input
                    label="Date"
                    style={styles.rowInput2}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputnChangehandler.bind(this, 'date'),
                        value: inputValues.date
                    }} />
            </View>
            <Input
                label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputnChangehandler.bind(this, 'description'),
                    value: inputValues.description
                }} />
        </View>
    )
}

export default ExpenseForm

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
        marginRight: 6,
    },
    rowInput2: {
        flex: 1,
        marginLeft: 6
    }
});