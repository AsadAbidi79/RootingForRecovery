import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import BackButton from "../../Components/Buttons/BackButton";
import images from "../../assets/images";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import COLORS from "../../Theme/Colors";
import InnerContainer from "../../Components/Container/InnerContainer";
import AppButton from "../../Components/Buttons/App-Button";

const Profile = ({ navigation }) => {
  return (
    <Container>
      <BackButton navigation={navigation} />
      <View style={styles.profileContainer}>
        <Image source={images.drawerprofile} style={styles.profilimage} />
      </View>
      <InnerContainer>
        <Text style={CommonStyles.title}>Profile</Text>
        <Text style={CommonStyles.fieldTitle}>User Name</Text>
        <Text style={{ paddingLeft: 10 }}>Ivan</Text>
        <Text style={[CommonStyles.fieldTitle, { paddingTop: hp(2) }]}>
          Email
        </Text>
        <Text style={{ paddingLeft: 10 }}>ivan.smith@gmail.com</Text>
        <Text style={[CommonStyles.fieldTitle, { paddingTop: hp(2) }]}>
          Mobile Number
        </Text>
        <Text style={{ paddingLeft: 10 }}>(123) 456 - 7890</Text>
        <View style={{ justifyContent: "flex-end", flex: 1 }}>
          <AppButton
            title={"Edit Profile"}
            onPress={() => navigation.navigate("Profile")}
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
    paddingBottom: hp(4),
    paddingTop: hp(5),
  },
  profilimage: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderColor: COLORS.PRIMARY,
  },
});
