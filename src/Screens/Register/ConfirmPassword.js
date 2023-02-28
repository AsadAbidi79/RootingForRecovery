import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppButton from "../../Components/Buttons/App-Button";
import BackButton from "../../Components/Buttons/BackButton";
import Container from "../../Components/Container/Container";
import InnerContainer from "../../Components/Container/InnerContainer";
import Logo from "../../Components/ImageView/Logo";
import InputField from "../../Components/Inputs/InputField";
import CommonStyles from "../../Utils/CommonStyles";

export default function ConfirmPassword({ navigation }) {
  return (
    <Container scroll={true}>
      <BackButton navigation={navigation} />
      <Logo />
      <InnerContainer>
        <Text style={CommonStyles.title}>Forgot Password</Text>
        <Text style={CommonStyles.fieldTitle}>New Password</Text>
        <InputField
          Lefticon={true}
          name="lock"
          type={"evilIcons"}
          icon={true}
          otherProps={{ placeholder: "**********", secureTextEntry: true }}
        />
        <Text style={[CommonStyles.fieldTitle, { paddingTop: hp(2) }]}>
          Confirm Password
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
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            paddingBottom: hp(1),
            paddingTop: hp(4),
          }}
        >
          <AppButton
            title={"Reset Password"}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </InnerContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});
