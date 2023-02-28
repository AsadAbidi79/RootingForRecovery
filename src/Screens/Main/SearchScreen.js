import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Images from '../../assets/images';
import Container from '../../Components/Container/Container';
import InnerContainer from '../../Components/Container/InnerContainer';
import COLORS from '../../Theme/Colors';
// import Icon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from '../../Screens/Main/Home';
import images from '../../assets/images';
import HeaderBackButton from "../../Components/Header-Bar/HeaderBackButton";


export default function SearchScreen({navigation}) {
  const [filterButton, setFilterButton] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFilterButton(!filterButton);
  };

  const Articles = [
    {
      id: '1',
      name: 'Drug Prevention',
      image: images.card1,
      paragrph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor...',
      heading: 'Loream ipusm',
      next: images.VideoArrow,
    },
    {
      id: '2',
      name: 'Drug Prevention',
      image: images.card1,
      paragrph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor...',
      heading: 'Loream ipusm',
      next: images.VideoArrow,
    },
    {
      id: '3',
      name: 'Drug Prevention',
      image: images.card1,
      paragrph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor...',
      heading: 'Loream ipusm',
   next: images.VideoArrow,
    },
    {
      id: '4',
      name: 'Drug Prevention',
      image: images.card1,
      paragrph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor...',
      heading: 'Loream ipusm',
      next: images.VideoArrow,
    },
    {
      id: '5',
      name: 'Drug Prevention',
      image: images.card1,
      paragrph:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor...',
      heading: 'Loream ipusm',
      next: images.VideoArrow,
    },
  ];
  const VideosA = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
      <View style={styles.CardA}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.head}>
          <Text style={{fontSize: 17, color: COLORS.TEXT_COLOR}}>
            {item.name}
          </Text>
          <Text>{item.heading}</Text>
          <View style={{width: '68%'}}>
            <Text style={styles.pra}>{item.paragrph}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View>
            <Image
              source={item.next}
              style={[styles.next, {resizeMode: 'contain'}]}
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <Container>
      <HeaderBackButton navigation={navigation} headerlogo={true} />
        <View style={styles.container}>
          <TouchableOpacity onPress={() =>  navigation.navigate('Home')}>
            <Image source={Images.back} style={styles.back} />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Image source={Images.icon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            <Image source={Images.bell} style={styles.bell} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchcontainer}>
          <View style={styles.input}>
            <Icon name={'search'} color={COLORS.PRIMARY} size={19} />
            <TextInput placeholder="All" style={{width: '100%'}} />
          </View>
        <View>
          <TouchableOpacity onPress={toggleExpand} style={styles.filterbtn}>
            <Icon name={'sliders-h'} color={COLORS.PRIMARY} size={20} />
          </TouchableOpacity>
        </View>
        {filterButton && (
          <View style={styles.filterView}>
            <View style={{paddingRight: 20}}>
              <TouchableOpacity
              onPress={() => {
                navigation.navigate("Video"), setFilterButton(false);
              }}
              >
                <Text style={styles.text}>Video</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingTop: 5}}
                onPress={() => {
                  navigation.navigate("Article"), setFilterButton(false);
                }}
              >
                <Text style={styles.text}>Article</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{paddingTop: 5}}
                // onPress={() => {
                //   navigation.navigate("ViewAll"), setFilterButton(false);
                // }}
              >
                <Text style={styles.text}>All</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        </View>

        <InnerContainer style={{paddingHorizontal: 15, paddingBotom: 10}}>
          <FlatList
            data={Articles}
            keyExtractor={item => item.id}
            renderItem={VideosA}
          />
        </InnerContainer>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: 'rgba(188, 47, 1, 0.5)',
    width: 150,
    height: 120,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  CardA: {
    backgroundColor: COLORS.WHITE,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    elevation: 3,
    margin: 5,
    alignItems: 'center',
  },
  PickerContainerer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    height: 50,
  },
  image: {
    width: 75,
    height: 100,
    borderRadius: 12,
  },
  head: {
    flexDirection: 'column',
    marginLeft: 12,
  },
  pra: {
    fontSize: 14,
    color: 'grey',
  },
  next: {
    height: 60,
    width: 54,
    marginRight: 50,
  },
  view: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 30,
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
  // Vector: {
  //   height: 25,
  //   width: 20,
  //   marginTop: 30,
  //   marginRight: 20,
  // },
  searchcontainer: {
    zIndex: 999,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  input: {
    paddingLeft: 10,
    width: '80%',
    height: 55,
    borderWidth: 0.5,
    borderColor: 'rgba(71, 27, 27, 0.2)',
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    bottom: 20,
    marginHorizontal: 5,
    marginBottom:12,
  },
  text: {
    color: COLORS.PRIMARY,
  },
  filterbtn: {
    backgroundColor: COLORS.WHITE,
    padding: 17,
    borderRadius: 10,
    borderColor: 'rgba(71, 27, 27, 0.2)',
    borderWidth: 0.5,
    marginHorizontal: 3,
    marginBottom:12,

  },
  filterView: {
    position: 'absolute',
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
