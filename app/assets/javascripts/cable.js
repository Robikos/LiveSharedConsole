//= require action_cable
//= require_self
//= require_tree ./channels

let AppWebSocket = {};

AppWebSocket.cable = ActionCable.createConsumer();
