import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../Components/Container/Container";
import BackButton from "../../Components/Buttons/BackButton";
import images from "../../assets/images";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import COLORS from "../../Theme/Colors";
import InnerContainer from "../../Components/Container/InnerContainer";
import InputField from "../../Components/Inputs/InputField";
import AppButton from "../../Components/Buttons/App-Button";

const Profile = ({ navigation }) => {
  return (
    <Container scroll={true}>
      <BackButton navigation={navigation} />
      <View style={styles.profileContainer}>
        <Image source={images.drawerprofile} style={styles.profilimage} />
        <TouchableOpacity>
          <Image source={images.editprofile} style={styles.editprofile} />
        </TouchableOpacity>
      </View>
      <InnerContainer>
        <Text style={CommonStyles.title}>Profile</Text>
        <Text style={CommonStyles.fieldTitle}>User Name</Text>
        <InputField
          Righticon={true}
          Lefticon={true}
          name="user"
          type={"feather"}
          otherProps={{ placeholder: "ivan" }}
        />
        <Text style={CommonStyles.fieldTitle}>Email</Text>
        <InputField
          Righticon={true}
          otherProps={{ placeholder: "Email" }}
          Lefticon={true}
          name="user"
          type={"feather"}
        />
        <Text style={[CommonStyles.fieldTitle, { paddingTop: hp(2) }]}>
          Mobile Number
        </Text>
        <InputField
          Righticon={true}
          Lefticon={true}
          name="mobile"
          type={"entypo"}
          otherProps={{
            placeholder: "(123) 456 - 7890",
          }}
        />

        <View
          style={{ justifyContent: "flex-end", flex: 1, paddingTop: hp(4) }}
        >
          <AppButton
            title={"Save"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>
      </InnerContainer>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: "center",
    paddingTop: hp(5),
  },
  profilimage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderColor: COLORS.PRIMARY,
  },
  editprofile: {
    height: 35,
    width: 35,
    alignItems: "flex-end",
    marginLeft: hp(20),
    bottom: hp(8),
  },
});
