//= require action_cable
//= require_self
//= require_tree ./channels

var AppWebSocket = {};

AppWebSocket.cable = ActionCable.createConsumer();
