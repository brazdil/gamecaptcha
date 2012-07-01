class User < ActiveRecord::Base
  attr_accessible :clicks, :email, :key, :time
end
