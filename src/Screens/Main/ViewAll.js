import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../Components/Container/Container";
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";
import InnerContainer from "../../Components/Container/InnerContainer";
import Filter from "../../Components/Filters/Filter";
import Card from "../../Components/Cards/Card";

const ViewAll = ({ navigation }) => {
  return (
    <Container>
      <HeaderBackButton navigation={navigation} headerlogo={true} />
      <InnerContainer style={{ paddingHorizontal: 20 }}>
        <Filter navigation={navigation} />
        <Card />
      </InnerContainer>
    </Container>
  );
};

export default ViewAll;

const styles = StyleSheet.create({});
