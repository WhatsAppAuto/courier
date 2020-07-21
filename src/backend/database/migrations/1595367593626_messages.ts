import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Messages extends BaseSchema {
  protected tableName = 'messages';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('conversation_id')
        .references('id')
        .inTable('conversations')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('set null');
      table
        .uuid('response_to')
        .references('id')
        .inTable(this.tableName)
        .onUpdate('cascade')
        .onDelete('set null');
      table.boolean('is_starred').defaultTo(false);
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
