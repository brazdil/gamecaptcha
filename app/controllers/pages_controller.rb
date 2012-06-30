class PagesController < ApplicationController
  def captcha
  end

  def signed_up
  	user = User.new(:email => params[:email], :clicks => params[:clicks])
  	user.save
  end
end
