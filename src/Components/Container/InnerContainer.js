import { StyleSheet, Text, View } from "react-native";
import React from "react";
import COLORS from "../../Theme/Colors";
import { SIZES } from "../../Theme/Fonts";

const InnerContainer = ({ style, children }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default InnerContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.COTAINER,
    borderTopLeftRadius: SIZES.base * 4,
    borderTopRightRadius: SIZES.base * 4,
    paddingHorizontal: 40,
    paddingVertical: 40,
  },
});
