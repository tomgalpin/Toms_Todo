class HomeController < ApplicationController
  def index
    @days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    @users = User.all
  end

  def switch_day
    @selected_day_of_week = params[:selected_day_of_week]
    @previous_day = params[:previous_day_of_week]

  end
end
