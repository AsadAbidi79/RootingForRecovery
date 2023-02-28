import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import InnerContainer from "../../Components/Container/InnerContainer";
import COLORS from "../../Theme/Colors";
import { FONTS } from "../../Theme/Fonts";
import images from "../../assets/images";

const Directions = ({ navigation }) => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  return (
    <Container>
      <HeaderBackButton navigation={navigation} />
      <View style={{ flex: 1, marginTop: 60 }}>
        <MapView
          style={styles.map}
          initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
        >
          <Marker title="Santa Ana" coordinate={position} />
        </MapView>
        <InnerContainer style={styles.container}>
          <Text
            style={[FONTS.Bold17, { color: COLORS.PRIMARY, paddingLeft: 20 }]}
          >
            Santa Ana
          </Text>
          <Text
            style={[
              FONTS.Medium15,
              {
                color: COLORS.PRIMARY,
                paddingLeft: 20,
                paddingBottom: 25,
                paddingTop: 5,
              },
            ]}
          >
            2972 Westheimer Rd. Santa Ana,{"\n"}Illinois 85486
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.PRIMARY,
              flexDirection: "row",
              height: 44,
              width: 144,
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 12,
            }}
          >
            <Image
              source={images.Direction}
              style={{
                height: 22,
                width: 22,
                marginLeft: 12,
                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                color: COLORS.WHITE,
                ...FONTS.Medium15,
                paddingLeft: 10,
              }}
            >
              Directions
            </Text>
          </TouchableOpacity>
        </InnerContainer>
      </View>
    </Container>
  );
};

export default Directions;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    position: "absolute",
    backgroundColor: "#fff",
    elevation: 5,
    width: "100%",
    bottom: 0,
    paddingHorizontal: 10,
  },
});
