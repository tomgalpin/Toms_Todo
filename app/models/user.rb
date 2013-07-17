class User < ActiveRecord::Base
  attr_accessible :username, :email, :email_confirmation

  has_many :lists
  has_many :tasks, :through => :lists
end
