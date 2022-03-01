import axios from 'axios';

const ADD_DATA = 'spaceX/missionReducer/ADD_DATA';
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

// eslint-disable-next-line no-unused-vars
export const fetchData = () => async (dispatch) => {
  const missions = await axios.get(url);
  dispatch(addData(missions.data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
