import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FONTS } from "../../Theme/Fonts";
import COLORS from "../../Theme/Colors";

const TermsCondition = ({ navigation }) => {
  return (
    <Container>
      <HeaderBackButton navigation={navigation} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <View>
          <Text style={[FONTS.Bold17, { paddingTop: hp(3), color: "#491A15" }]}>
            Terms & Conditions
          </Text>
          <Text
            style={[
              COLORS.LOREMTEXT,
              FONTS.Light14,
              { paddingTop: hp(3), lineHeight: 25 },
            ]}
          >
            Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
            eiusmod tempor. Lorem ipsum dolor sit amet, nsectetur adipiscing
            elit, sed do eiusmod tempor.{"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet, nsectetur adipiscing
            elit, sed do eiusmod tempor sit amet, nsectetur adipiscing elit, sed
            do eiusmod temporsit amet, nsectetur adipiscing elit, sed do eiusmod
            tempor.{"\n"}
            {"\n"}
            Amet, nsectetur adipiscing elit, sed do eiusmod tempor
          </Text>
        </View>
      </InnerContainer>
    </Container>
  );
};

export default TermsCondition;

const styles = StyleSheet.create({});
