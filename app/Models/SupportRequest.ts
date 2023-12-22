import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";

export default class SupportRequest extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public messageTitle: string;

  @column()
  public messageText: string;

  @column()
  public createdBy: string;

  @column()
  public uploadedFile: string;

  @belongsTo(() => User, { localKey: "createdBy" })
  public user: BelongsTo<typeof User>;
}
