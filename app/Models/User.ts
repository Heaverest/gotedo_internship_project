import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import SupportRequest from "./SupportRequest";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public firstName: string;

  @column()
  public lastName: string;

  @column()
  public email: string;

  @hasMany(() => SupportRequest, { foreignKey: "createdBy" })
  public supportRequests: HasMany<typeof SupportRequest>;
}
