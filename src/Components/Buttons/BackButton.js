import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from '../../Theme/Icons';
import COLORS from '../../Theme/Colors';

const BackButton = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} activeOpacity={0.5} onPress={goBack}>
        <Icon
          name={'arrowleft'}
          type={'ant-design'}
          color={COLORS.PRIMARY}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btn: {
    width: 50,
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
