class UsersController < ApplicationController
  skip_before_filter :require_authentication, :only => [:new, :create]

  def show
    @user = current_user
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      # auto_login(@user)
      # UserMailer.registration_confirmation(@user).deliver
      redirect_to root_path, :notice => "Signed In!"
    else
      render :new
    end
  end
end

