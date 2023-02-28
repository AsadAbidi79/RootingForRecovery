import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import { FONTS } from "../../Theme/Fonts";
import COLORS from "../../Theme/Colors";
import { heightPercentageToDP } from "react-native-responsive-screen";
import AppButton from "../../Components/Buttons/App-Button";

const SobrietyTrackerDetail = ({ navigation }) => {
  return (
    <Container>
      <HeaderBackButton navigation={navigation} headerlogo={true} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <Text style={[FONTS.Bold20, { color: COLORS.PRIMARY }]}>
          Sobriety Tracker Detail
        </Text>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ ...FONTS.Regular15, color: COLORS.PRIMARY }}>
              Name of the Substance:{" "}
            </Text>
            <Text style={{ ...FONTS.Bold15, color: COLORS.PRIMARY }}>
              Cocaine
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              width: "100%",
              flexDirection: "row",
              paddingTop: 15,
            }}
          >
            <Text style={{ ...FONTS.Regular15, color: COLORS.PRIMARY }}>
              Sober Since:
            </Text>
            <Text style={{ ...FONTS.Bold15, color: COLORS.PRIMARY }}>
              Dec 08, 2022
            </Text>
          </View>
          <Text
            style={{
              paddingTop: heightPercentageToDP(3),
              ...FONTS.Medium12,
              color: COLORS.BLACK,
            }}
          >
            Sobriety Streak, 20 Days
          </Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            height: "60%",
            paddingBottom: heightPercentageToDP(5),
          }}
        >
          <AppButton
            title={"Restart Tracker"}
            onPress={() => navigation.navigate("AddNewTracker")}
          />
          <AppButton
            customStyles={{ marginTop: 10 }}
            title={"Mark as Complete"}
            onPress={() => navigation.navigate("History")}
          />
        </View>
      </InnerContainer>
    </Container>
  );
};

export default SobrietyTrackerDetail;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: heightPercentageToDP(4),
    paddingVertical: 5,
    elevation: 3,
    padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
