import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../../Theme/Colors";
import Icon from "../../Theme/Icons";
import { FONTS } from "../../Theme/Fonts";

const Filter = ({ navigation }) => {
  const [filterButton, setFilterButton] = useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFilterButton(!filterButton);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.input]}>
        <Icon
          name={"search"}
          type={"evilicons"}
          color={COLORS.PRIMARY}
          size={30}
        />
        <TextInput placeholder="All" style={{ width: "100%" }} />
      </View>

      <View>
        <TouchableOpacity onPress={toggleExpand} style={styles.filterbtn}>
          <Icon
            name={"sliders-h"}
            type={"fontAwesome5"}
            color={COLORS.PRIMARY}
            size={30}
          />
        </TouchableOpacity>
      </View>
      {filterButton && (
        <View style={styles.filterView}>
          <View style={{ paddingRight: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Video")}>
              <Text style={styles.text}>Videos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 5 }}
              onPress={() => navigation.navigate("Article")}
            >
              <Text style={styles.text}>Articals</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ paddingTop: 5 }}
              onPress={() => navigation.navigate("ViewAll")}
            >
              <Text style={styles.text}>All</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    paddingLeft: 10,
    width: "80%",
    height: 55,
    borderWidth: 0.5,
    borderColor: "rgba(71, 27, 27, 0.2)",
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    bottom: 20,
    marginHorizontal: 5,
  },
  text: {
    color: COLORS.PRIMARY,
    ...FONTS.Medium15,
  },
  filterbtn: {
    backgroundColor: COLORS.WHITE,
    padding: 12,
    borderRadius: 10,
    borderColor: "rgba(71, 27, 27, 0.2)",
    borderWidth: 0.5,
  },
  filterView: {
    position: "absolute",
    right: 5,
    top: 60,
    marginVertical: 5,
    backgroundColor: COLORS.WHITE,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
});
