import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import { FONTS } from "../../Theme/Fonts";
import COLORS from "../../Theme/Colors";
import images from "../../assets/images";

Data = [
  {
    image: images.notificationdp,
    title: "Jenny Wilson",
    time: "2m",
    description: "Lorem ipsum dolor sit amet, nsectetur.",
  },
  {
    image: images.notificationdp2,
    title: "Kathryn Murphy",
    time: "5m",
    description: "Lorem ipsum dolor sit amet, nsectetur.",
  },
  {
    image: images.notificationdp,
    title: "Jane Cooper",
    time: "22h",
    description: "Lorem ipsum dolor sit amet, nsectetur.",
  },
];

const dataRender = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={{ height: 60, width: 60 }} />
      <View style={{ padding: 10 }}>
        <Text style={{ ...FONTS.Bold15, color: COLORS.PRIMARY }}>
          {item.title}
        </Text>
        <Text style={{ ...FONTS.Medium12, color: COLORS.LOREMTEXT }}>
          {item.time}
        </Text>
        <Text style={{ ...FONTS.Medium12, color: COLORS.LOREMTEXT }}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const Notifications = ({ navigation }) => {
  return (
    <Container scroll={true}>
      <HeaderBackButton navigation={navigation} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <Text style={[FONTS.Bold20, { color: COLORS.PRIMARY }]}>
          Notification
        </Text>
        <Text style={[FONTS.Bold20, { color: COLORS.PRIMARY, paddingTop: 10 }]}>
          Today
        </Text>
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList
            data={Data}
            renderItem={dataRender}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={[FONTS.Bold20, { color: COLORS.PRIMARY, paddingTop: 10 }]}>
          December 12 2022
        </Text>
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList
            data={Data}
            renderItem={dataRender}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </InnerContainer>
    </Container>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  cardContainer: {
    top: 2,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    elevation: 3,
    padding: 10,
    bottom: 20,
    marginVertical: 8,
  },
});
