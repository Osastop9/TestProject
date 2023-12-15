import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { WalletIcon } from "../../assets/icons";

const OptionsButton = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.options}>
        {icon}
        <Text style={styles.optionTxt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: "row",
    justifyContent: "center",
  },
  optionTxt: {
    color: "#FFFFFF",
    marginLeft: 5,
  },
});

export default OptionsButton;
