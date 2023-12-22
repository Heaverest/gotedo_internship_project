import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("first_name", 255);
      table.string("last_name", 255);
      table.string("email", 255).unique();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
