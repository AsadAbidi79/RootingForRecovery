import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppButton from "../../Components/Buttons/App-Button";
import BackButton from "../../Components/Buttons/BackButton";
import Container from "../../Components/Container/Container";
import InnerContainer from "../../Components/Container/InnerContainer";
import Logo from "../../Components/ImageView/Logo";
import InputField from "../../Components/Inputs/InputField";
import { FONTS } from "../../Theme/Fonts";
import CommonStyles from "../../Utils/CommonStyles";

export default function Signup({ navigation }) {
  return (
    <Container scroll={true}>
      <BackButton navigation={navigation} />
      <Logo style={{ paddingVertical: hp("3") }} />

      <InnerContainer>
        <Text style={CommonStyles.title}>Signup</Text>
        <Text style={CommonStyles.fieldTitle}>User Name</Text>
        <InputField
          Lefticon={true}
          name="user"
          type={"feather"}
          otherProps={{ placeholder: "ivan" }}
        />
        <Text style={[CommonStyles.fieldTitle, { paddingTop: hp(2) }]}>
          Mobile Number
        </Text>
        <InputField
          Lefticon={true}
          name="mobile"
          type={"entypo"}
          otherProps={{
            placeholder: "(123) 456 - 7890",
          }}
        />
        <Text style={[CommonStyles.fieldTitle, { paddingTop: hp(2) }]}>
          Password
        </Text>
        <InputField
          Lefticon={true}
          name="lock"
          type={"evilIcons"}
          icon={true}
          otherProps={{
            placeholder: "**********",
          }}
        />

        <View
          style={{ justifyContent: "flex-end", flex: 1, paddingTop: hp(3) }}
        >
          <AppButton title={"Submit"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: hp(2),
          }}
        >
          <Text style={CommonStyles.text}>Already have account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={[
                CommonStyles.text,
                FONTS.Bold13,
                { textDecorationLine: "underline" },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </InnerContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});
