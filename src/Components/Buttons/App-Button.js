import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../Theme/Colors";
import { SIZES } from "../../Theme/Fonts";
import CommonStyles from "../../Utils/CommonStyles";

export default function AppButton({ customStyles, title, onPress, disabled }) {
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.btn,
        customStyles,
        // {backgroundColor: disabled ? COLORS.DISABLED : COLORS.PRIMARY},
      ]}
    >
      <Text style={{ color: "#FBFBFB" }}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingLeft: SIZES.base,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
});
