import axios from 'axios';

const ADD_DATA = 'spaceX/missionReducer/ADD_DATA';
const CHANGE_RESERVED_STATUS = 'spaceX/missionReducer/CHANGE_RESERVED_STATUS';
const url = 'https://api.spacexdata.com/v3/missions';
const initialState = [];

const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const changeReservedStatus = (id) => ({
  type: CHANGE_RESERVED_STATUS,
  id,
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
    case CHANGE_RESERVED_STATUS:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    default:
      return state;
  }
};

export default reducer;
