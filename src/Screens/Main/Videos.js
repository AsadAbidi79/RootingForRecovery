import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import AppButton from '../../Components/Buttons/App-Button';
import InputField from '../../Components/Inputs/InputField';
import Icons from '../../Theme/Icons';
import Container from '../../Components/Container/Container';
import InnerContainer from '../../Components/Container/InnerContainer';
import {ScrollView} from 'react-native-gesture-handler';
import Images from '../../assets/images';
import COLORS from '../../Theme/Colors';

export default function VideosA(props) {
  return (
    <ScrollView>
      <Container>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => props.navigation.navigate('SearchScreen')}>
            <Image source={Images.back} style={styles.back} />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Image source={Images.icon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Image source={Images.bell} style={styles.bell} />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Image source={Images.player} style={styles.Video} />
        </View>
        <InnerContainer>
          <View style={{padding: 10,width:"100%"}}>
            <Text style={styles.Text}>
              Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
              eiusmod tempor. Lorem ipsum dolor sit amet, nsectetur adipiscing
              elit, sed do eiusmod tempor.
            </Text>
            <Text style={styles.Text}>
              Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, nsectetur adipiscing
              elit, sed do eiusmod tempor sit amet, nsectetur adipiscing elit,
              sed do eiusmod temporsit amet, nsectetur adipiscing elit, sed do
              eiusmod tempor.
            </Text>
            <Text style={styles.Text}>Amet, nsectetur adipiscing elit, sed do eiusmod tempor</Text>
          </View>
        </InnerContainer>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Video: {
    width: 295,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    marginTop: 40,
    marginBottom: 50,
    borderRadius: 10,
  },
  back: {
    height: 12,
    width: 18,
    margin: 10,
  },

  icon: {
    height: 30,
    width: 100,
  },
  bell: {
    margin: 15,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  Text: {
    marginTop:20,
    fontSize:15,
  },
});
