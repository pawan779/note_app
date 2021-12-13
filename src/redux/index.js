import {combineReducers} from 'redux';
import {HomeReducer} from '../screen/home/Reducer';

const rootReducer = combineReducers({
  blank: (state = null) => state,
  home: HomeReducer,
});

export default rootReducer;
