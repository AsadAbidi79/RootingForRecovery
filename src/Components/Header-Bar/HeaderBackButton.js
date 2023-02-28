import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "../../Theme/Icons";
import COLORS from "../../Theme/Colors";
import images from "../../assets/images";

const HeaderBackButton = ({ navigation, headerlogo }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon
          name={"arrowleft"}
          type={"ant-design"}
          color={COLORS.PRIMARY}
          size={30}
        />
      </TouchableOpacity>
      {headerlogo && (
        <Image
          source={images.HeaderImage}
          style={{ height: 60, width: 170, resizeMode: "contain" }}
        />
      )}
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Icon
          name={"notifications-outline"}
          type={"ionicon"}
          color={COLORS.PRIMARY}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBackButton;

const styles = StyleSheet.create({});
