class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    gon.current_user = current_user
  end

  def write
    command = params[:command]
    `echo "#{command}" > public/actual_code.rb`
    output = `ruby public/actual_code.rb`

    render json: { response: output }
  end
end
