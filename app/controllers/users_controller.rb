class UsersController < ApplicationController
  skip_before_filter :require_login, :only => [:index, :new, :create, :activate]

  def activate
    if (@user = User.load_from_activation_token(params[:id]))
      @user.activate!
      redirect_to(login_path, :notice => 'User was successfully activated.')
    else
      not_authenticated
    end
  end

  def show
    @user = current_user

    @albums = Album.where(:user_id => @user.id)

  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      if params[:stripeToken] != nil
        customer = Stripe::Customer.create(
          :email => @user.email,
          :card => params[:stripeToken],
          :plan => "paid"
          )
      end
      # auto_login(@user)
      # UserMailer.registration_confirmation(@user).deliver
      redirect_to root_path, :notice => "Signed In!"
    else
      render :new
    end
  end
end

