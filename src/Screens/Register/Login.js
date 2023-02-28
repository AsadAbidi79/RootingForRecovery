import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppButton from "../../Components/Buttons/App-Button";
import Container from "../../Components/Container/Container";
import InnerContainer from "../../Components/Container/InnerContainer";
import Logo from "../../Components/ImageView/Logo";
import InputField from "../../Components/Inputs/InputField";
import { FONTS } from "../../Theme/Fonts";
import CommonStyles from "../../Utils/CommonStyles";

export default function Login({ navigation }) {
  return (
    <Container scroll={true}>
      <Logo />
      <InnerContainer>
        <Text style={CommonStyles.fieldTitle}>Email</Text>

        <InputField
          otherProps={{ placeholder: "Email" }}
          Lefticon={true}
          name="user"
          type={"feather"}
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
            secureTextEntry: true,
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={[
              CommonStyles.fieldTitle,
              FONTS.Regular12,
              { alignSelf: "flex-end", textDecorationLine: "underline" },
            ]}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>

        <View
          style={{ justifyContent: "flex-end", flex: 1, paddingBottom: hp(5) }}
        >
          <AppButton
            title={"Login Now"}
            onPress={() => navigation.navigate("Main")}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={CommonStyles.text}>Don’t have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={[CommonStyles.text, FONTS.Bold13]}>Sign up here</Text>
          </TouchableOpacity>
        </View>
      </InnerContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});
