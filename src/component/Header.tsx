import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default Header = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
        onPress={onPress}>
        <Icon name="arrow-left" color="#000" size={35} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 5}}>
          Notes
        </Text>
      </TouchableOpacity>
    </View>
  );
};
