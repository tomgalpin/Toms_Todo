class ChangeIsCompletedToIsCompletedToTasks < ActiveRecord::Migration
  def change
    rename_column :tasks, :is_completed?, :is_completed
  end
end
