class PagesController < ApplicationController
  def captcha
  end

  def signed_up
  	@number_of_clicks = params[:clicks]
  end
end
