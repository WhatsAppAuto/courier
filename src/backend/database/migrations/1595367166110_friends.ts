import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Friends extends BaseSchema {
  protected tableName = 'friends';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('friend_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.primary(['user_id', 'friend_id']);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
