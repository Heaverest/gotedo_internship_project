import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class SupportRequests extends BaseSchema {
  protected tableName = "support_requests";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("messageTitle", 255);
      table
        .integer("createdBy")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      table.text("messaageText");
      table.string("uploadedFile", 255);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
