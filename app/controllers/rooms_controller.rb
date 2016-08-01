class RoomsController < ApplicationController
  before_action :authenticate_user!, :assign_current_user_gon

  def new
    @room = Room.new
  end

  def create
    @room = Room.new(room_params)
    flash[:error] = "Cannot create a new room." unless @room.save
    redirect_to root_path
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

  def room_params
    params.require(:room).permit(:name)
  end
end
