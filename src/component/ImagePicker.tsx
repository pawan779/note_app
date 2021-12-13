import React from 'react';
import {View, Text} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export const _launchImageLibrary = () =>
  launchImageLibrary({mediaType: 'photo', quality: 0.5}, async image => {
    if (image.didCancel) {
      console.log('Cancel');
    } else {
      return image;
    }
  });
