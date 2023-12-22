import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SupportRequest from "App/Models/SupportRequest";

export default class SupportRequestsController {
  public async index({ response }: HttpContextContract) {
    const support = await SupportRequest.all();
    return response.json(support);
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const { messageTitle, messageText, email } = request.only([
      "messageTitle",
      "messageText",
      "email",
    ]);
    console.log({ messageTitle, messageText, email });
    const support = await SupportRequest.create({
      messageTitle,
      messageText,
      createdBy: email,
    });

    return response.json({ support });
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
