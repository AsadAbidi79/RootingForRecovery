import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import images from "../../assets/images";
import { FONTS } from "../../Theme/Fonts";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { NavigationContainer } from "@react-navigation/native";

cardData = [
  {
    id: 1,
    imageRight: images.VideoCard,
    title: "Drug Prevention",
    secondTitle: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet,nsectetur adipiscing elit, sed do eiusmod tempor...",
    imageLeft: images.VideoArrow,
  },
  {
    id: 2,
    imageRight: images.Video,
    title: "Drug Prevention",
    secondTitle: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet,nsectetur adipiscing elit, sed do eiusmod tempor...",
    imageLeft: images.VideoArrow,
  },
  {
    id: 3,
    imageRight: images.VideoCard,
    title: "Drug Prevention",
    secondTitle: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet,nsectetur adipiscing elit, sed do eiusmod tempor...",
    imageLeft: images.VideoArrow,
  },
  {
    id: 4,
    imageRight: images.VideoCard,
    title: "Drug Prevention",
    secondTitle: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet,nsectetur adipiscing elit, sed do eiusmod tempor...",
    imageLeft: images.VideoArrow,
  },
  {
    id: 5,
    imageRight: images.VideoCard,
    title: "Drug Prevention",
    secondTitle: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet,nsectetur adipiscing elit, sed do eiusmod tempor...",
    imageLeft: images.VideoArrow,
  },
];

const Card = ({ navigation }) => {
  const cardRender = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Article")}
        style={{
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <View style={styles.cardView}>
          <Image
            source={item.imageRight}
            style={{
              height: 104,
              width: 85,
            }}
          />
          <View>
            <Text style={[CommonStyles.cardTitle, { paddingLeft: 10 }]}>
              {item.title}
            </Text>
            <Text style={[FONTS.Regular11, { color: "#000", paddingLeft: 10 }]}>
              {item.secondTitle}
            </Text>
            <Text
              style={[
                CommonStyles.text,
                {
                  color: "#7C7C7C",
                  paddingTop: 10,
                  width: heightPercentageToDP(28),
                  paddingLeft: 10,
                },
              ]}
            >
              {item.description}
            </Text>
          </View>
          <TouchableOpacity   onPress={() => navigation.navigate("SearchScreen")}
          style={{ justifyContent: "flex-end" }}>
            <Image
              source={item.imageLeft}
              style={{
                height: 59,
                width: 30,
                alignItems: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ paddingBottom: heightPercentageToDP(5) }}>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id}
        renderItem={cardRender}
        showsVerticalScrollIndicator={false}
        navigation={navigation}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    elevation: 2,
    padding: 8,
    bottom: 15,
    top: 3,
  },
});
