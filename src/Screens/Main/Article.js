import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import images from "../../assets/images";
import { FONTS } from "../../Theme/Fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import COLORS from "../../Theme/Colors";

const Article = ({ navigation }) => {
  return (
    <Container scroll={true}>
      <HeaderBackButton navigation={navigation} headerlogo={true} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <View>
          <Image source={images.Articlepic} style={styles.image} />
          <TouchableOpacity>
            <Image source={images.like} style={styles.like} />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[FONTS.Bold17, { paddingTop: hp(3), color: COLORS.PRIMARY }]}
          >
            Drug Prevention
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

export default Article;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 157,
    borderRadius: 10,
    resizeMode: "cover",
  },
  like: {
    height: 36,
    width: 36,
    marginRight: 20,
    alignSelf: "flex-end",
    bottom: hp(6),
  },
});
