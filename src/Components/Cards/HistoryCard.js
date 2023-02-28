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
import COLORS from "../../Theme/Colors";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const cardData = [
  {
    id: 1,
    title: "Name of the Substance:      Cocaine",
    secondTitle: "Sober Since: ",
    date: "Dec 08, 2022",
    description: "Sobriety Streak,  20 Days",
    imageLeft: images.VideoArrow,
  },
  {
    id: 2,
    title: "Name of the Substance:      Cocaine",
    secondTitle: "Sober Since: ",
    date: "Dec 08, 2022",
    description: "Sobriety Streak,  20 Days",
    imageLeft: images.VideoArrow,
  },
  {
    id: 3,
    title: "Name of the Substance:      Cocaine",
    secondTitle: "Sober Since: ",
    date: "Dec 08, 2022",
    description: "Sobriety Streak,  20 Days",
    imageLeft: images.VideoArrow,
  },
  {
    id: 4,
    title: "Name of the Substance:      Cocaine",
    secondTitle: "Sober Since: ",
    date: "Dec 08, 2022",
    description: "Sobriety Streak,  20 Days",
    imageLeft: images.VideoArrow,
  },
  {
    id: 5,
    title: "Name of the Substance:      Cocaine",
    secondTitle: "Sober Since: ",
    date: "Dec 08, 2022",
    description: "Sobriety Streak,  20 Days",
    imageLeft: images.VideoArrow,
  },
];

const HistoryCard = ({ navigation }) => {
  const cardRender = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("SobrietyTrackerDetail")}
        style={{
          alignItems: "center",
          marginVertical: hp(1),
        }}
      >
        <View style={styles.cardView}>
          <View style={{ padding: hp(2) }}>
            <Text style={{ ...FONTS.Medium15, color: COLORS.PRIMARY }}>
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",

                justifyContent: "space-between",
                paddingTop: hp(2),
              }}
            >
              <Text style={[FONTS.Medium15, { color: COLORS.PRIMARY }]}>
                {item.secondTitle}
              </Text>
              <Text
                style={{
                  ...FONTS.SemiBold15,
                  color: COLORS.PRIMARY,
                }}
              >
                {item.date}
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.BLACK,
                paddingTop: hp(1),

                width: hp(25),
              }}
            >
              {item.description}
            </Text>
          </View>
          <TouchableOpacity>
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
    <View style={{ paddingBottom: hp(4) }}>
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

export default HistoryCard;

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // paddingVertical: hp(1),
    elevation: 2,
    bottom: 20,
    top: 3,
  },
});
