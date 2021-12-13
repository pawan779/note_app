import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FAB({onPress}) {
  return (
    <TouchableOpacity style={styles.fabContainer} onPress={onPress}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'tomato',
  },
});
