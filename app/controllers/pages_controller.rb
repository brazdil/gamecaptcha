class PagesController < ApplicationController
  def captcha
  	@user_key = (0...50).map{65.+(rand(25)).chr}.join;
  	user = User.new(:key => @user_key)
  	user.save
  end

  def signed_up
  	user = User.find_by_key(params[:user_key])
  	user.email = params[:email]
  	user.clicks = params[:clicks]
  	user.save
  end
end
