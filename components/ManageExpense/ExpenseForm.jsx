import { StyleSheet, View, Text } from "react-native"

import Input from "./Input"
import { useState } from "react"
import Button from "../UI/Button"
import { getFormattedDate } from "../../util/date"
import { GloableStyles } from "../../constants/style"

function ExpenseForm({ submitButtonlabel, onCancel, onSubmit, defaultValues }) {


    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(new Date(defaultValues.date)) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    })

    const inputnChangehandler = (inputIdentifire, enteredValues) => {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifire]: { value: enteredValues, isValid: true }
            };
        })
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        };


        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsVaalid = expenseData.description.trim().length > 0;


        if (!amountIsValid || !dateIsValid || !descriptionIsVaalid) {
            setInputs((currentInputs) => {
                return {
                    amount: {
                        value: currentInputs.amount.value,
                        isValid: amountIsValid
                    },
                    date: {
                        value: currentInputs.date.value,
                        isValid: dateIsValid
                    },
                    description: {
                        value: currentInputs.description.value,
                        isValid: descriptionIsVaalid
                    }
                };
            });

            return;
        }

        onSubmit(expenseData);
    }

    const formIsValid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return (
        <View>
            <View style={styles.inputContainer}>
                <Input
                    label="Amount"
                    invalid={!inputs.amount.isValid}
                    style={styles.rowInput}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: inputnChangehandler.bind(this, 'amount'),
                        value: inputs.amount.value
                    }} />
                <Input
                    label="Date"
                    invalid={!inputs.date.isValid}
                    style={styles.rowInput2}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: inputnChangehandler.bind(this, 'date'),
                        value: inputs.date.value
                    }} />
            </View>
            <Input
                label="Description"
                invalid={!inputs.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputnChangehandler.bind(this, 'description'),
                    value: inputs.description.value
                }}
            />
            {formIsValid && (<Text style={styles.errorText}>Invalid input values - please check your entered data </Text>)}
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonlabel}</Button>
            </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginTop: 10,
        marginHorizontal: 8,
        overflow: 'hidden',
        borderRadius: 12
    },
    errorText: {
        margin: 10,
        color: GloableStyles.colors.Red,
        textAlign: 'center',
        fontSize: 16
    },
});