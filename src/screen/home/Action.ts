export const LOAD_HOME_DATA = 'LOAD_HOME_DATA';
export const LOAD_HOME_DATA_ATTEMPT = 'LOAD_HOME_DATA_ATTEMPT';
export const LOAD_HOME_DATA_SUCCESS = 'LOAD_HOME_DATA_SUCCESS';
export const LOAD_HOME_DATA_FAILURE = 'LOAD_HOME_DATA_FAILURE';
export const LOAD_HOME_DATA_CANCEL = 'LOAD_HOME_DATA_CANCEL';

export const loadHomeDataAction = () => {
  return {
    type: LOAD_HOME_DATA_ATTEMPT,
  };
};


export const SAVE_DATA = "SAVE_DATA";

export const saveDataAction = (payload:any) => {
  return {
    type: SAVE_DATA,
    payload
  };
};
export const REMOVE_DATA = "REMOVE_DATA";

export const removeDataAction = (payload:any) => {
  return {
    type: REMOVE_DATA,
    payload
  };
};