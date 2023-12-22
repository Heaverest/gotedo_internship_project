import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SupportRequests extends BaseSchema {
  protected tableName = "support_requests";
  

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstName')
      table.string('lastName')
      table.string('email').unique()
      table.string('message_title')
      table.string('message_text')
      table.string('file_uploaded')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
