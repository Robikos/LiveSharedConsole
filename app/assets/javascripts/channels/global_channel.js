App.cable.subscriptions.create("GlobalChannel", {
  received: (data) => {
    return console.log(data);
  }
});
