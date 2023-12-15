import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({
  placeholder,
  secure,
  keyboardType,
  autoCapitalize,
  onBlur,
  onChangeText,
  value,
  onSubmitEditing,
  error,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        placeholderTextColor={"#bdbdbd"}
        autoCapitalize={autoCapitalize}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        onSubmitEditing={onSubmitEditing}
      />
      {error && <Text style={styles.formError}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(244, 244, 244, 1)",
    height: 45,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  formError: {
    color: "red",
    fontSize: 10,
  },
  container: {
    marginBottom: 20,
  },
});

export default CustomInput;
