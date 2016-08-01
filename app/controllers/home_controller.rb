class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    gon.current_user = current_user
    @rooms = Room.all
  end
end
