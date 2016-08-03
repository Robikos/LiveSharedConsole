Live Shared Console README
===========================

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

# Used technologies

* Ruby on Rails 5.0.0beta4
* PostgreSQL
* ActionCable
* ReactJS
* `react_webpack_rails` gem

# Project setup

To run project follow the steps:
1. `bundle install`
2. `rake db:setup`

# Run the app

1. `npm run start-hot-dev`
2. `rails s`

Eventually run `redis-server` if there are probles with that.

Project uses `npm` and `webpack` for handling react assets.
