class AddGroupColumnToStudents < ActiveRecord::Migration
  def change
    add_column :students, :group, :integer
  end
end
