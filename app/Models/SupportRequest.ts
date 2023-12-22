import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";

export default class SupportRequest extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public messageTitle: string;

  @column()
  public firstName: string;

  @column()
  public lastName: string;

  @column()
  public messageText: string;


  @column()
  public email: string;

  @column()
  public file_uploaded: string;

  @belongsTo(() => User, { localKey: "email" })
  public user: BelongsTo<typeof User>;
}
