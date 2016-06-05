class API {}

API.WRITE_ENDPOINT = "/home/write";

API.writeCode = function (code) {
  return $.post(
    API.WRITE_ENDPOINT,
    { command: code },
  );
}

export default API;
