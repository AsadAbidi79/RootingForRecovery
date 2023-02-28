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

export default function ForgotPassword({ navigation }) {
  return (
    <Container scroll={true}>
      <BackButton navigation={navigation} />
      <Logo style={{ paddingVertical: hp("12") }} />
      <InnerContainer>
        <Text style={CommonStyles.title}>Forgot Password</Text>
        <Text style={CommonStyles.fieldTitle}>Enter Email Id</Text>

        <InputField
          otherProps={{ placeholder: "ivan@gmail.com" }}
          Lefticon={true}
          name="user"
          type={"feather"}
        />

        <Text
          style={[
            CommonStyles.text,
            { textAlign: "center", paddingTop: hp(1) },
          ]}
        >
          A 4 digit code will be emailed to your{"\n"}
          email address{" "}
        </Text>

        <View
          style={{ justifyContent: "flex-end", flex: 1, paddingBottom: hp(1) }}
        >
          <AppButton
            title={"Submit"}
            onPress={() => navigation.navigate("Otp")}
          />
        </View>
      </InnerContainer>
    </Container>
  );
}

const styles = StyleSheet.create({});
