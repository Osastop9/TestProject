import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ onPress, label }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "rgba(166, 130, 255, 1)",
        height: 45,
        width: "auto",
        paddingHorizontal: 100,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
