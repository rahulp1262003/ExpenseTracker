import { StyleSheet, Text, TextInput, View } from "react-native"
import { GloableStyles } from "../../constants/style";

function Input({ label, style,textInputConfig }) {

  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.inputText} >{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GloableStyles.colors.Blue005
  },
  input: {
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: GloableStyles.colors.Blue002,
    borderRadius: 10,
    fontSize: 18,
    color: GloableStyles.colors.Blue005
  },
  inputMultiline: {
    minHeight: 120,
    textAlignVertical: 'top'
  },
});