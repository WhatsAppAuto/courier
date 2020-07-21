import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Conversations extends BaseSchema {
  protected tableName = 'conversations';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('user1_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('set null');
      table
        .uuid('user2_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('set null');
      table.timestamps(true);
      table.unique(['user1_id', 'user2_id']);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
