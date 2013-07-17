class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :list_id
      t.text :content
      t.integer :order_num
      t.date :due_date
      t.boolean :is_completed?

      t.timestamps
    end
  end
end
