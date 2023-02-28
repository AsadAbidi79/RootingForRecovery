import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header-Bar/Header";
import InnerContainer from "../../Components/Container/InnerContainer";
import COLORS from "../../Theme/Colors";
import { FONTS } from "../../Theme/Fonts";
import HistoryCard from "../../Components/Cards/HistoryCard";

const History = ({ navigation }) => {
  return (
    <Container>
      <Header headertitle={true} navigation={navigation} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <View style={styles.historyContainer}>
          <Text style={[FONTS.Bold22, { color: COLORS.PRIMARY }]}>History</Text>
          <TouchableOpacity
            style={styles.AddBtn}
            onPress={() => navigation.navigate("AddNewTracker")}
          >
            <Text style={{ color: COLORS.WHITE }}>Add New Tracker</Text>
          </TouchableOpacity>
        </View>
        <HistoryCard navigation={navigation} />
      </InnerContainer>
    </Container>
  );
};

export default History;

const styles = StyleSheet.create({
  historyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  AddBtn: {
    backgroundColor: COLORS.PRIMARY,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
    width: "40%",
    height: 50,
  },
});
