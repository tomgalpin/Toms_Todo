class List < ActiveRecord::Base
  attr_accessible :title, :user_id

  has_many :tasks
  belongs_to :user
end
