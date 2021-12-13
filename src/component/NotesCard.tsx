import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WebView from 'react-native-webview';
import RenderHtml from 'react-native-render-html';
import ButtomModal from './ButtomModal';

export default function NotesCard({data, onPress, ...props}) {
  console.log('helloProps', props.props);
  const [showModal, setShowModal] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => setShowModal(!showModal)}
      delayLongPress={500}
      onPress={() => {
        onPress();
        setShowModal(false);
      }}>
      <RenderHtml
        source={{html: data.content}}
        tagsStyles={{
          p: {fontSize: 10, margin: 0, padding: 0},
          h1: {fontSize: 10},
          h2: {fontSize: 10},
          li: {fontSize: 10},
          ul: {margin: 2, padding: 2},
        }}
        ignoredDomTags={['style', 'img']}
        ignoredStyles={['fontSize', 'textAlign', 'margin']}
      />

      {showModal && (
        <ButtomModal
          data={data}
          onDeletePress={() => {
            props.props.actions.removeDataAction(data.id);
            setShowModal(false);
          }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(45),
    height: 150,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    overflow: 'hidden',
    padding: 4,
  },
});
