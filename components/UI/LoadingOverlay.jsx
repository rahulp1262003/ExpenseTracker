import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GloableStyles } from "../../constants/style";

function LodingOverlay() {
	return (
		<View style={styles.container}>
			<ActivityIndicator
				size="large"
				color={GloableStyles.colors.Blue004}
			/>
		</View>
	);
}

export default LodingOverlay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		backgroundColor: GloableStyles.colors.Blue001,
	},
});
