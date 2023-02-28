import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import { FONTS } from "../../Theme/Fonts";
import COLORS from "../../Theme/Colors";
import MapView from "react-native-maps";
import AppButton from "../../Components/Buttons/App-Button";
import { Marker } from "react-native-maps";

const SupportGroupFinder = ({ navigation }) => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  return (
    <Container>
      <HeaderBackButton navigation={navigation} />
      <InnerContainer style={{ paddingHorizontal: 0 }}>
        <Text
          style={[FONTS.Bold17, { color: COLORS.PRIMARY, paddingLeft: 20 }]}
        >
          Support Group Finder
        </Text>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 2,
            paddingTop: 20,
          }}
        >
          <MapView
            style={{
              flex: 1,
            }}
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
            <Marker
              title="Yor are here"
              description="This is a description"
              coordinate={position}
            />
          </MapView>
        </View>
        <View style={{ paddingHorizontal: 40, paddingBottom: 20 }}>
          <AppButton
            title={"Refresh Location"}
            onPress={() => navigation.navigate("Directions")}
          />
        </View>
      </InnerContainer>
    </Container>
  );
};

export default SupportGroupFinder;

const styles = StyleSheet.create({});
