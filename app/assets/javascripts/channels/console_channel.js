App.cable.subscriptions.create("ConsoleChannel", {
  received: (data) => {
    return console.log(data);
  }
});
