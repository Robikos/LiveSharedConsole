//= require action_cable
//= require_self
//= require_tree ./channels

let App = {};

App.cable = ActionCable.createConsumer();
