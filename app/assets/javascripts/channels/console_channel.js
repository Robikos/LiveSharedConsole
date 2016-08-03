$(function() {
  if (gon.room_id) {
    return AppWebSocket.activeStream = AppWebSocket.cable.subscriptions.create(
    {
      channel: "ConsoleChannel",
      id: gon.room_id
    },
    {
      received: (function(_this) {
        return function(data) {
          return console.log(data);
        };
      })(this)
    });
  }
});
