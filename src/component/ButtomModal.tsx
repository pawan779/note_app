import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Share,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ButtomModal({data, onDeletePress}) {
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={onDeletePress}>
        <Icon name="delete" color="red" size={35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Share.share({message: data.content})}>
        <Icon name="share-variant" color="#fff" size={35} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.8)',
    width: widthPercentageToDP(45),
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
