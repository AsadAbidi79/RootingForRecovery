import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppButton from "../../Components/Buttons/App-Button";
import BackButton from "../../Components/Buttons/BackButton";
import Container from "../../Components/Container/Container";
import InnerContainer from "../../Components/Container/InnerContainer";
import Logo from "../../Components/ImageView/Logo";
import CommonStyles from "../../Utils/CommonStyles";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from "react-native-confirmation-code-field";
import COLORS from "../../Theme/Colors";
const CELL_COUNT = 4;

export default function Otp({ navigation }) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({ index, symbol, isFocused }) => {
    let textChild = null;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="-"
          isLastFilledCell={isLastFilledCell({ index, value })}
        >
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };
  return (
    <Container scroll={true}>
      <BackButton navigation={navigation} />
      <Logo style={{ paddingVertical: hp("12") }} />
      <InnerContainer>
        <Text style={CommonStyles.title}>Enter Your Code</Text>
        <Text style={[CommonStyles.fieldTitle, { textAlign: "center" }]}>
          We have sent you a 4-digit code to ...@.com
        </Text>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
        <TouchableOpacity>
          <Text
            style={[
              CommonStyles.text,
              { textAlign: "center", paddingTop: hp(1) },
            ]}
          >
            Resend Code
          </Text>
        </TouchableOpacity>

        <View
          style={{ justifyContent: "flex-end", flex: 1, paddingTop: hp(3) }}
        >
          <AppButton
            title={"Submit"}
            onPress={() => navigation.navigate("ConfirmPassword")}
          />
        </View>
      </InnerContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    padding: 15,
  },
  cell: {
    width: 50,
    height: 55,
    lineHeight: 40,
    fontSize: 24,
    borderWidth: 0.5,
    textAlign: "center",
    borderRadius: 15,
    padding: 10,
    color: COLORS.TEXT_COLOR,
    backgroundColor: "white",
    borderColor: COLORS.PRIMARY,
  },
  focusCell: {
    borderColor: COLORS.PRIMARY,
  },
});
