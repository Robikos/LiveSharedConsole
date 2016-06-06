class API {}

API.WRITE_ENDPOINT = "/home/write";
API.LOGOUT_ENDPOINT = "/users/sign_out";

API.writeCode = function (code) {
  return $.post(
    API.WRITE_ENDPOINT,
    { command: code },
  );
}

API.logout = function() {
  return $.ajax({
    url: API.LOGOUT_ENDPOINT,
    type: 'DELETE'
  });
}

export default API;
