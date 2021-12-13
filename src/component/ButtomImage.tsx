import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Color from '../constant/Color';

const ButtomImage = ({data = {}, onPress = () => console.log('pressed')}) => {
  //shdow style
  const shadowStyle = {};
  return (
    <TouchableOpacity style={{paddingHorizontal: wp(2)}} onPress={onPress}>
      <Image
        source={{uri: data.img}}
        resizeMode="contain"
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
    borderWidth: 1,
    borderColor: Color.borderDarkColor,
    shadowColor: Color.borderLightColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default ButtomImage;
