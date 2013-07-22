class ApplicationController < ActionController::Base
  protect_from_forgery

  # before_filter :require_authentication
  # before_filter :require_admin_authentication

  def current_user
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end

  helper_method :current_user

  def require_authentication
    if current_user.nil?
      redirect_to  root_path, :alert => "You must be logged in."
    end
  end

  # def require_admin_authentication
  #   if !current_user.nil? && !current_user.is_admin?
  #     redirect_to root_path, :alert => "You must be logged in as an admin."
  #   end
  # end

end
