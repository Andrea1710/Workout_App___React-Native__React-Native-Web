import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Router } from "./Router";

export const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Router />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  wrapper: {
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425
  }
});
