import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class SupportRequests extends BaseSchema {
  protected tableName = "support_requests";

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .string("created_by", 255)
        .unsigned()
        .notNullable()
        .references("email")
        .inTable("users");
    });
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table
        .integer("created_by")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
    });
  }
}
