import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
  protected tableName = "users";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("firstName", 255);
      table.string("lastName", 255);
      table.string("email", 255);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
