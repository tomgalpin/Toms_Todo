class Task < ActiveRecord::Base
  attr_accessible :list_id, :content, :order_num, :due_date, :is_completed

  belongs_to :list
end
