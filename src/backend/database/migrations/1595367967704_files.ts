import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Files extends BaseSchema {
  protected tableName = 'files';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.raw('uuid_generate_v4()'));
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade');
      table
        .uuid('message_id')
        .references('id')
        .inTable('messages')
        .onUpdate('cascade')
        .onDelete('cascade');
      table.string('name').notNullable();
      table.string('type', 20).notNullable();
      table.string('subtype', 20).notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
