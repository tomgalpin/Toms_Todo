class HomeController < ApplicationController
  def index
    @days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    @user = User.new
    @task = Task.new
  end

  def switch_day
    @selected_day_of_week = params[:selected_day_of_week]
    @previous_day = params[:previous_day_of_week]
    @task = Task.new
  end
end
