import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import COLORS from "../../Theme/Colors";

export default function Container({ children, scroll, style }) {
  return (
    <>
      {scroll ? (
        <ScrollView contentContainerStyle={[styles.container2, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
  container2: {
    flexGrow: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR,
  },
});
