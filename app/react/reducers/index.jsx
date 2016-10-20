import {
  SEND_CODE,
  RECEIVE_RESULT,
} from '../constants/action-types';

export default function rootReducer(state = {content: [], current_user: null, room_id: null}, action) {
  switch (action.type) {
    case SEND_CODE:
      return state;
    case RECEIVE_RESULT:
      return {
        content: state.content.concat([action.data])
      };
    default:
      return state;
  }
}
