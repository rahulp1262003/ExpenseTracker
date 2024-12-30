import { Pressable, StyleSheet, View, Text } from "react-native"
import { GloableStyles } from "../../constants/style";

function Button({ children, onPress, mode, style }) {
    return (
        <View style={style}>
            <Pressable
                style={[styles.button, mode === 'flat' && styles.flat]}
                onPress={onPress}
                android_ripple={{ color: GloableStyles.colors.Ripple }}
            >
                <View>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: GloableStyles.colors.Blue003,
        borderRadius: 12
    },
    buttonText: {
        padding: 16,
        color: GloableStyles.colors.Blue005,
        fontSize: 18,
        textAlign: 'center'
    },
    flat: {
        backgroundColor: 'transparent',
    },
    flatText: {
        color: GloableStyles.colors.Blue004
    },
});