import axios from 'axios';

const SET_ROCKETS = 'spaceX/rocketsReducer/SET_ROCKETS';
const SET_RESERVED = 'spaceX/rocketsReducer/SET_RESERVED';
const SET_CANCELATION = 'spacex/rocketsReducer/SET_CANCELATION';
const URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROCKETS:
      return {...state, rockets: action.payload};
    case SET_RESERVED:
      return {...state, rockets: state.rockets.map((rocket) => (
            rocket.id === action.payload ? { ...rocket, reserved: true } : rocket
          ),
      ),
    };
    case SET_CANCELATION:
      return {...state, rockets: state.rockets.map((rocket) => (
            rocket.id === action.payload ? { ...rocket, reserved: false } : rocket
          ),
        ),
      };  
      default:
        return state;
  }
};

export const setRockets = (payload) => ({
  type: SET_ROCKETS,
  payload,
});

export const setReserved = (id) => ({
  type: SET_RESERVED,
  payload: id,
});

export const setCancelation = (id) => ({
  type: SET_CANCELATION,
  payload: id,
});

export const fetchRockets = (dispatch) => {
  axios.get(URL)
  .then((response) => {
    dispatch(setRockets(response.data));
  })
};

export default rocketsReducer;
