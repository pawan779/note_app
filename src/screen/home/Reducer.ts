import {Reducer} from 'react';
import {
  LOAD_HOME_DATA,
  LOAD_HOME_DATA_FAILURE,
  LOAD_HOME_DATA_SUCCESS,
  REMOVE_DATA,
  SAVE_DATA,
} from './Action';

const initialState = {
  response: {},
  noteData:[]
};

export const HomeReducer: Reducer<any, any> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case LOAD_HOME_DATA_SUCCESS:
      return {
        ...state,
        response: action.payload,
      };
    case SAVE_DATA:
      return {
        ...state,
        noteData: action.payload,
      };
    case REMOVE_DATA:
      let newData = [...state.noteData];
      let index = newData.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        newData.splice(index, 1);
      }
      return {
        ...state,
        noteData: newData,
      };
    default:
      return state;
  }
};
