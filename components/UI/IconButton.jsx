import { Pressable, StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { GloableStyles } from "../../constants/style";

function IconButton({ icon, color, size, onPress }) {
    return (
        <View style={styles.rootContainer} >
            <Pressable
                style={styles.pressIcon}
                android_ripple={{ color: GloableStyles.colors.Ripple }}
                onPress={onPress}
            >
                <View style={styles.iconContainer}>
                    <Icon name={icon} size={size} color={color} />
                </View>
            </Pressable>
        </View>
    )
}

export default IconButton

const styles = StyleSheet.create({
    rootContainer: {
        overflow: 'hidden',
        borderRadius: 50,
        marginRight: 10,
    },
    iconContainer: {
        padding: 6,
    },
});