import axios from 'axios';

const ADD_DATA = 'spaceX/missionReducer/ADD_DATA';
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const fetchData = () => async (dispatch) => {
  const response = await axios.get(url);
  const missions = response.data.map((mission) => {
    const { description } = mission;
    const id = mission.mission_id;
    const name = mission.mission_name;
    return {
      id,
      description,
      name,
      reserved: false,
    };
  });
  dispatch(addData(missions));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
