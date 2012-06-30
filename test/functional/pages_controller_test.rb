require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get captcha" do
    get :captcha
    assert_response :success
  end

end
