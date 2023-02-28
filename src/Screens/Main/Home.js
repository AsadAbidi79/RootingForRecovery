import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "../../Components/Header-Bar/Header";
import Container from "../../Components/Container/Container";
import InnerContainer from "../../Components/Container/InnerContainer";
import images from "../../assets/images";
import CommonStyles from "../../Utils/CommonStyles";
import Card from "../../Components/Cards/Card";

let colors = [
  "rgba(188, 47, 1, 0.5)",
  "rgba(226, 111, 2, 0.5)",
  "rgba(232, 146, 23, 0.5)",
];
const data = [
  {
    image: images.card1,
    title: "Sobriety Tracker",
    id: 1,
  },
  {
    image: images.applogo,
    title: "Support Group",
    id: 2,
  },
  {
    image: images.card1,
    title: "Sobriety Tracker",
    id: 3,
  },
  {
    image: images.card1,
    title: "Sobriety Tracker",
    id: 4,
  },
  {
    image: images.card1,
    title: "Sobriety Tracker",
    id: 5,
  },
];

const Home = ({ navigation }) => {
  const dataRender = ({ item, index }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate("SobrietyTrackerDetail")}
          activeOpacity={0.8}
          style={[
            styles.cards,
            { backgroundColor: colors[index % colors.length] },
          ]}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={{ paddingTop: 20 }}>{item.title}</Text>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <Container>
      <Header navigation={navigation} headertitle={true} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <View>
          <FlatList
            data={data}
            renderItem={dataRender}
            keyExtractor={(item, index) => index}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.videoDetails}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Text style={CommonStyles.text}> Videos/</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={CommonStyles.text}> Articals </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={CommonStyles.text}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 30}}>
          <Card navigation={navigation} />
        </View>
      </InnerContainer>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    height: 126,
    width: 162,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    height: 58,
    width: 58,
    resizeMode: "contain",
  },
  videoDetails: {
    flexDirection:'row',
    justifyContent: "space-between",
    backgroundColor: "rgba(179, 139, 107, 0.2)",
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
});
