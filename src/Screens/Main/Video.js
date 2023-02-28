import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import images from "../../assets/images";
import { FONTS } from "../../Theme/Fonts";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import COLORS from "../../Theme/Colors";
import Video from "react-native-video";

const Videos = ({ navigation }) => {
  return (
    <Container scroll={true}>
      <HeaderBackButton navigation={navigation} headerlogo={true} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <View>
          <Video
            source={images.video}
            style={styles.image}
            muted={false}
            repeat={true}
            resizeMode={"cover"}
            volume={1.0}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
          />

          <TouchableOpacity>
            <Image source={images.like} style={styles.like} />
          </TouchableOpacity>
        </View>

        <Text
          style={[
            COLORS.LOREMTEXT,
            FONTS.Light14,
            { paddingTop: hp(1), lineHeight: 25 },
          ]}
        >
          Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod
          tempor. Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
          eiusmod tempor.{"\n"}
          {"\n"}
          Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod
          tempor Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
          eiusmod tempor sit amet, nsectetur adipiscing elit, sed do eiusmod
          temporsit amet, nsectetur adipiscing elit, sed do eiusmod tempor.
          {"\n"}
          {"\n"}
          Amet, nsectetur adipiscing elit, sed do eiusmod tempor
        </Text>
      </InnerContainer>
    </Container>
  );
};

export default Videos;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 253,
    borderRadius: 10,
  },
  like: {
    height: 36,
    width: 36,
    marginRight: 20,
    alignSelf: "flex-end",
    bottom: hp(10),
  },
});
