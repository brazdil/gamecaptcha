class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :key
      t.string :email
      t.integer :clicks

      t.timestamps
    end
  end
end
