import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

const Screen = ({ children }) => {
  return (
    <View>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Screen;
