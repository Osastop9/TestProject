import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const FeatureButton = ({ icon, label, color, onPress }) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, { backgroundColor: color }]}>
        {icon}
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 60,
    borderRadius: 5,
  },
  text: {
    fontSize: 10,
    marginTop: 10,
  },
});

export default FeatureButton;
