import {
  SEND_CODE,
  RECEIVE_RESULT
} from '../constants/action-types';

function sendCodeType() {
  return {
    type: SEND_CODE
  };
}

function receiveResultType(data) {
  return {
    type: RECEIVE_RESULT,
    data: data
  };
}

export function sendCode(text) {
  AppWebSocket.activeStream.send({ code: text });
  return dispatch => {
    dispatch(sendCodeType());
  };
}

export function receiveResult(data) {
  return receiveResultType(data);
}
