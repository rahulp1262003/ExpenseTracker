import { Pressable, StyleSheet, View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native";

import { GloableStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ id, description, amount, date }) {

    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense',{
            expenseId: id
        });
    }

    return (
        <Pressable onPress={expensePressHandler}>
            <View style={styles.rootContainer}>
                <View style={styles.listContainer}>
                    <Text style={styles.listText}>{description}</Text>
                    <Text style={styles.listDate}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem

const styles = StyleSheet.create({
    rootContainer: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: GloableStyles.colors.Blue002,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listText: {
        fontSize: 19
    },
    listDate: {
        fontSize: 13
    },
    amountContainer: {
        minWidth: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: GloableStyles.colors.Blue001,
        borderRadius: 8,
        minWidth: 90
    },
    amountText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GloableStyles.colors.Black
    }
});