import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import getStyles from "./styles";
import getGlobalStyles from "../../styles/globalStyles";
import Icon from "../Icon";

const AltAuth = ({ text, icon }) => {
  const styles = getStyles();
  const globalStyles = getGlobalStyles();

  return (
    <TouchableOpacity style={styles.card}>
      <Icon name={icon} />
      <Text style={styles.cardText}>{text}</Text>
      <View></View>
    </TouchableOpacity>
  );
};

export default AltAuth;
