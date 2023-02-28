import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Filter from "../../Components/Filters/Filter";
import Card from "../../Components/Cards/Card";
import { FONTS } from "../../Theme/Fonts";

const SavedItem = ({ navigation }) => {
  return (
    <Container>
      <HeaderBackButton navigation={navigation} headerlogo={true} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <Filter navigation={navigation} />
        <Text
          style={[
            
            FONTS.SemiBold20,
            { paddingTop: hp(3), color: "#491A15", paddingBottom: hp(1) },
          ]}
        >
          Saved Items
        </Text>
        <View style={{ paddingBottom: 70 }}>
          <Card navigation={navigation} />
        </View>
      </InnerContainer>
    </Container>
  );
};

export default SavedItem;

const styles = StyleSheet.create({});
