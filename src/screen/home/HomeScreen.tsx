import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FAB from '../../component/FAB';
import NotesCard from '../../component/NotesCard';
import {removeDataAction} from './Action';

export const HomeScreen = (props: any) => {
  console.log('HomeScreen', props.home.noteData);
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <FlatList
            // horizontal
            contentContainerStyle={styles.flatlistSty}
            data={props.home.noteData}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <Text style={styles.emptyTxt}>
                No notes found. Press on + button to add new notes
              </Text>
            )}
            renderItem={({item}) => (
              <NotesCard
                data={item}
                onPress={() =>
                  props.navigation.navigate('NoteScreen', {
                    data: {
                      ...item,
                      isNew: false,
                    },
                  })
                }
                props={props}
              />
            )}
          />
        </View>
        <FAB
          onPress={() =>
            props.navigation.navigate('NoteScreen', {
              data: {
                id:
                  Math.random().toString(32) + Math.floor(Math.random() * 100),
                isNew: true,
              },
            })
          }
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
    actions: bindActionCreators({removeDataAction}, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  flatlistSty: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emptyTxt: {
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
