class SessionsController < ApplicationController
  def new
  end

  # def create
  #   user = User.find_by_email params[:email]
  #   if user&.authenticate params[:password]
  #     session[:user_id] = user.id
  #     flash[:success] = "Logged In!"
  #     redirect_to root_path
  #   else
  #     flash[:danger] = "Wrong Credentials"
  #     redirect_to new_session_path
  #   end
  # end
  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:user_id] = @user.id
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "Successfully Signed Out"
    redirect_to root_path
  end

  protected

  def auth_hash
    request.env["omniauth.auth"]
  end
end
