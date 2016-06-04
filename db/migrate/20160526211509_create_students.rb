class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.integer :weight
      t.integer :height
      t.string :color
      t.float :gpa
      t.integer :group

      t.timestamps null: false
    end
    add_index :students, :group
    Student.reset_column_information
  end
end
