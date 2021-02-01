class AddAdminIdToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :admin_id, :integer
  end
end
