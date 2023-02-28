import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import InnerContainer from "../../Components/Container/InnerContainer";
import { FONTS } from "../../Theme/Fonts";
import COLORS from "../../Theme/Colors";
import InputField from "../../Components/Inputs/InputField";
import { heightPercentageToDP } from "react-native-responsive-screen";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import AppButton from "../../Components/Buttons/App-Button";

const AddNewTracker = ({ navigation }) => {
  return (
    <Container>
      <HeaderBackButton headerlogo={true} navigation={navigation} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <Text style={[FONTS.Bold20, { color: COLORS.PRIMARY }]}>
          Add Tracker
        </Text>

        <View
          style={{ paddingHorizontal: 20, marginTop: heightPercentageToDP(6) }}
        >
          <Text style={CommonStyles.fieldTitle}>Name of the Substance</Text>
          <InputField
            otherProps={{ placeholder: "Cocaine" }}
            Lefticon={true}
            name="user"
            type={"feather"}
          />
          <Text
            style={[
              CommonStyles.fieldTitle,
              { paddingTop: heightPercentageToDP(2) },
            ]}
          >
            Select Date
          </Text>
          <InputField
            size={30}
            Lefticon={true}
            name="calendar-month-outline"
            type={"material-community"}
            otherProps={{
              placeholder: "Dec 08 2022",
            }}
          />

          <View
            style={{
              justifyContent: "flex-end",

              height: "60%",
              paddingBottom: heightPercentageToDP(5),
            }}
          >
            <AppButton
              title={"Start Tracker"}
              onPress={() => navigation.navigate("SobrietyTrackerDetail")}
            />
          </View>
        </View>
      </InnerContainer>
    </Container>
  );
};

export default AddNewTracker;

const styles = StyleSheet.create({});
