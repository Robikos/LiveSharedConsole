class RoomsController < ApplicationController
  before_action :authenticate_user!, :assign_current_user_gon

  def new
  end

  def create
  end

  def show
    gon.room_id = params[:id]
  end

  def destroy
  end

  private

  def assign_current_user_gon
    gon.current_user = current_user
  end
end
