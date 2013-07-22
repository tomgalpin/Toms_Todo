class User < ActiveRecord::Base
  has_secure_password

  attr_accessible :username, :email, :password, :password_confirmation

  has_many :lists
  has_many :tasks, :through => :lists

  validates_confirmation_of :password
  validates_presence_of :password, :on => :create
  validates_presence_of :username
  validates_presence_of :email
  validates_uniqueness_of :email
end
