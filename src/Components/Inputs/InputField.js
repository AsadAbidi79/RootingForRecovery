import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import COLORS from "../../Theme/Colors";
import { SIZES } from "../../Theme/Fonts";
import Icon from "../../Theme/Icons";

export default function InputField({
  Righticon,
  value,
  onChangeText,
  icon,
  customStyles,
  otherProps,
  Lefticon,
  name,
  type,
  color,
  size,
}) {
  const [passwordHide, setpasswordHide] = useState(true);

  return (
    <View style={{}}>
      <TextInput
        placeholderTextColor={COLORS.PLACEHOLDER}
        style={[customStyles, , styles.input]}
        value={value}
        onChangeText={onChangeText}
        {...otherProps}
      />
      {Lefticon && (
        <Icon
          name={name}
          type={type}
          color={COLORS.PRIMARY}
          size={20}
          style={{ position: "absolute", paddingTop: 15, paddingLeft: 10 }}
        />
      )}
      {Righticon && (
        <Icon
          name={"edit-3"}
          type={"feather"}
          color={COLORS.PRIMARY}
          size={25}
          style={styles.Righticon}
        />
      )}

      {icon && (
        <TouchableOpacity
          style={styles.Righticon}
          onPress={() => setpasswordHide(!passwordHide)}
        >
          {passwordHide ? (
            <Feather name="eye" size={22} color={"gray"} />
          ) : (
            <Feather name="eye-off" size={22} color={"gray"} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: SIZES.h40,
    height: 55,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  Righticon: {
    position: "absolute",
    alignSelf: "flex-end",
    padding: 15,
  },
});
