import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import COLORS from "../../Theme/Colors";
import images from "../../assets/images";
import Icon from "../../Theme/Icons";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { FONTS } from "../../Theme/Fonts";

const CustomDrawer = (props) => {
  const arr = [
    {
      title: "Home",
      icon: images.drawericon1,
      goto: () => props.navigation.navigate("Home"),
    },
    {
      title: "Sobriety Tracker",
      icon: images.drawericon2,
      goto: () => props.navigation.navigate("SobrietyTrackerDetail"),
    },
    {
      title: "Support Group Finder",
      icon: images.drawericon3,
      goto: () => props.navigation.navigate("SupportGroupFinder"),
    },
    {
      title: "OD Reversal Agent Locator",
      icon: images.drawericon4,
      goto: () => props.navigation.navigate("ODReversalAgentLocator"),
    },
    {
      title: "Saved Items",
      icon: images.drawericon5,
      goto: () => props.navigation.navigate("SavedItem"),
    },
    {
      title: "Privacy Policy",
      icon: images.drawericon6,
      goto: () => props.navigation.navigate("PrivacyPolicy"),
    },
    {
      title: "Terms & Conditions",
      icon: images.drawericon7,
      goto: () => props.navigation.navigate("TermsCondition"),
    },
    {
      title: "History",
      icon: images.drawericon8,
      goto: () => props.navigation.navigate("History"),
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={{
          backgroundColor: COLORS.PRIMARY,
          width: "85%",

          flex: 1,
        }}
      >
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Icon
              name={"close"}
              type={"ant-design"}
              color={COLORS.WHITE}
              size={30}
              style={{ padding: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "70%",
              paddingLeft: 20,
            }}
          >
            <Text style={{ color: "#D9D9D9", fontSize: 20 }}>John Doe</Text>
            <Text style={{ color: "#D9D9D9", fontSize: 16, paddingTop: 10 }}>
              johndoe@gmail.com
            </Text>
          </View>
          <View
            style={{
              backgroundColor: COLORS.PRIMARY,
              zIndex: 1,
              paddingTop: 20,
            }}
          >
            <Image
              source={images.drawerprofile}
              style={{ height: 70, width: 70, marginRight: 10 }}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate("EditProfile")}
            >
              <Image
                source={images.editprofile}
                style={{
                  height: 25,
                  width: 25,
                  alignItems: "flex-end",
                  marginRight: heightPercentageToDP(1),
                  alignSelf: "flex-end",
                  bottom: 25,
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={images.drawerIcon}
            style={{
              width: 130,
              position: "absolute",
              height: 130,
              right: -60,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 0.8 }}>
          {arr.map((ele, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                key={index.toString()}
                onPress={ele.goto}
              >
                <View
                  style={{
                    padding: 7,
                    margin: 10,
                    marginLeft: 10,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  <Image
                    source={ele.icon}
                    style={{
                      height: 22,
                      width: 22,
                      resizeMode: "contain",
                    }}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <Text
                      style={{
                        color: "#D9D9D9",
                        fontSize: 16,
                        paddingBottom: 10,
                      }}
                    >
                      {ele.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={{ padding: 20 }}>
            <View
              style={{
                backgroundColor: "#FBF9F4",
                height: 40,
                width: 125,
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: 8,
              }}
            >
              <Image
                source={images.drawericon9}
                style={{
                  height: 22,
                  width: 22,
                  resizeMode: "contain",
                }}
              />
              <Text style={{ ...FONTS.Regular15, color: COLORS.PRIMARY }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
