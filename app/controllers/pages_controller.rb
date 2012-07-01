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
    user.time = params[:time]
  	user.save
  end

  def users
    @success = 0
    @fail = 0
    @clicks = 0
    @time = 0
  
    User.all.each do |user|
      if user.clicks.nil?
        @fail += 1
      else
        @success += 1
        @clicks += user.clicks
        @time += user.time
      end
    end

    @ratio = Integer(Float(@success) / Float(@success + @fail) * 100)
    @clicks = Float(@clicks) / Float(@success)
    @time = Float(@time) / Float(@success) / 1000.0
  end

  def reset
    User.delete_all
  end
end
