import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {
  actions,
  defaultActions,
  RichEditor,
  RichToolbar,
} from 'react-native-pell-rich-editor';
import {SafeAreaView} from 'react-native-safe-area-context';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import HTMLView from 'react-native-htmlview';

import WebView from 'react-native-webview';
import Header from '../../component/Header';
import {saveDataAction} from './Action';

import moment from 'moment';
import {_launchImageLibrary} from '../../component/ImagePicker';

//video icon

const NoteScreen = (props: any) => {
  const strikethrough =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftraining.georgiapoisoncenter.org%2Fresource-center-3%2Fvideo%2F&psig=AOvVaw2W4YHc6KVZ3m2GLxDHAER4&ust=1639195688425000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDawvqt2PQCFQAAAAAdAAAAABAJ'; //icon for strikethrough
  const video =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftraining.georgiapoisoncenter.org%2Fresource-center-3%2Fvideo%2F&psig=AOvVaw2W4YHc6KVZ3m2GLxDHAER4&ust=1639195688425000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDawvqt2PQCFQAAAAAdAAAAABAJ';
  const RichText = useRef(); //reference to the RichEditor component
  const [article, setArticle] = useState('');

  // this function will be called when the editor has been initialized
  function editorInitializedCallback() {
    RichText.current?.registerToolbar(function (items: any) {
      // items contain all the actions that are currently active
      console.log(
        'Toolbar click, selected items (insert end callback):',
        items,
      );
    });
  }

  // Callback after height change
  function handleHeightChange(height: any) {
    // console.log("editor height change:", height);
  }

  async function onPressAddImage() {
    const image = await _launchImageLibrary();
    console.warn('image12', image.assets[0].uri);
    RichText.current?.insertImage(
      image.assets[0].uri,
      'width: 100%; height: 200px; resize-mode:"contain";',
    );
    // you can easily add images from your gallery
    // RichText.current?.insertImage(
    //   'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
    // );
  }

  // function insertVideo() {
  //   // you can easily add videos from your gallery
  //   RichText.current?.insertVideo(
  //     'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4',
  //   );
  // }

  const handleChange = (html: string) => {
    setArticle(html);
    let newData = [...props.home.noteData];
    console.warn('index', newData);
    let index;

    if (newData.length == 0) {
      index = -1;
    } else {
      index = newData.findIndex(i => i?.id == props.route.params.data.id);
    }

    if (index > -1) {
      newData[index].content = html;
    } else {
      newData.unshift({
        id: props.route.params.data.id,
        content: html,
        date: Date.now(),
      });
    }

    props.actions.saveDataAction(newData);
  };

  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />

        <Header onPress={() => props.navigation.goBack()} />

        <ScrollView
          style={styles.container}
          contentContainerStyle={{flexGrow: 1}}
          keyboardShouldPersistTaps="handled">
          {!props.route.params.data.isNew && (
            <Text style={styles.text1}>
              {moment(props.route.params.data.date).fromNow()}
            </Text>
          )}
          <RichEditor
            disabled={false}
            containerStyle={styles.editor}
            ref={RichText}
            style={styles.rich}
            placeholder={'Start Writing Here'}
            onChange={text => handleChange(text)}
            editorInitializedCallback={editorInitializedCallback}
            onHeightChange={handleHeightChange}
            initialContentHTML={
              props.route.params.data.isNew
                ? ''
                : props.route.params.data.content
            }
          />
        </ScrollView>
        <RichToolbar
          style={[styles.richBar]}
          editor={RichText}
          disabled={false}
          iconTint={'#f7b62e'}
          selectedIconTint={'#6fc1b8'}
          disabledIconTint={'#dedede'}
          onPressAddImage={onPressAddImage}
          iconSize={30}
          actions={[
            ...defaultActions,
            actions.setStrikethrough,
            actions.heading1,
            actions.insertImage,
            // 'insertVideo',
            actions.undo,
            actions.heading2,
          ]}
          // map icons for self made actions
          iconMap={{
            [actions.heading1]: ({tintColor}) => (
              <Text style={[styles.tib, {color: tintColor}]}>H1</Text>
            ),
            // [actions.setStrikethrough]: strikethrough,
            ['insertVideo']: video,
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  home: state.home,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({saveDataAction}, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteScreen);

const styles = StyleSheet.create({
  text1: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
    color: '#788685',
  },
  /********************************/
  /* styles for html tags */
  a: {
    fontWeight: 'bold',
    color: 'purple',
  },
  div: {
    fontFamily: 'monospace',
  },
  p: {
    fontSize: 30,
  },
  /*******************************/
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  editor: {
    backgroundColor: 'black',
  },
  rich: {
    minHeight: 300,
    flex: 1,
  },
  richBar: {
    minHeight: 50,
    backgroundColor: '#F5FCFF',
    paddingBottom: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  tib: {
    textAlign: 'center',
    color: '#515156',
  },
});
// view rawHomeScreen.js hosted with ❤ by GitHub /
