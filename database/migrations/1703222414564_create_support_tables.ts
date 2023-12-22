import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class SupportRequests extends BaseSchema {
  protected tableName = "support_requests";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id").primary();
      table.string("message_title", 255);
      table
        .integer("created_by")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users");
      table.text("messaage_text");
      table.string("uploaded_file", 255);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
