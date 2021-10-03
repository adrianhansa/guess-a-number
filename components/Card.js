import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "80%",
    alignItems: "center",
    shadowColor: "green",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor: "white",
    marginTop: 10,
    padding: 25,
    shadowOffset: { height: 2, width: 0 },
  },
});

export default Card;
