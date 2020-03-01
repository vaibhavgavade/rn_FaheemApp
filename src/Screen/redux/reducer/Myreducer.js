import {API_FETCHING_SUCCESSFULL_FETCHING} from '../action/ActionData';
import {API_FETCHING_UNSUCCESSFULL} from '../action/ActionData';
import {API_FETCHING_STARTED} from '../action/ActionData';
import {API_SUCESSFULL_SECONDPAGE} from '../action/ActionData';

const INITIAL_STATE = {
  data: [],
  Ldata: [],
  err: {},
  loading: false,
};

export const MyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_FETCHING_STARTED: {
      return {
        ...state,
        loading: (state.loading = true),
      };
    }
    case API_FETCHING_SUCCESSFULL_FETCHING: {
      console.log('vaibhav gavade', action.payload);
      return {
        ...state,
        data: action.payload,
        loading: (state.loading = false),
      };
    }

    case API_SUCESSFULL_SECONDPAGE: {
      return {
        ...state,
        Ldata: action.payload,
        loading: (state.loading = false),
      };
    }
    case API_FETCHING_UNSUCCESSFULL: {
      return {
        ...state,
        err: action.payload,
        loading: (state.loading = true),
      };
    }

    default: {
      return state;
    }
  }
};
