import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SupportRequest from "App/Models/SupportRequest";
import User from "App/Models/User";

export default class SupportRequestsController {
  public async index({ response }: HttpContextContract) {
    const support = await SupportRequest.all();
    return response.json(support);
  }

  public async store({ request, response }: HttpContextContract) {
    const { messageTitle, messageText, email } = request.only([
      "messageTitle",
      "messageText",
      "email",
    ]);
    console.log({ messageTitle, messageText, email });

    const user = await User.findByOrFail("email", email);
    const support = await SupportRequest.create({
      messageTitle,
      messageText,
      createdBy: user.id,
    });

    return response.json({ support });
  }

  public async show({ params, response }: HttpContextContract) {
    const support = await SupportRequest.findOrFail(params.id);
    return response.json(support);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { messageTitle, messageText, email } = request.only([
      "messageTitle",
      "messageText",
      "email",
    ]);
    const user = await User.findOrFail("email", email);

    const support = await SupportRequest.findOrFail(params.id);

    await support
      .merge({ messageTitle, messageText, createdBy: user.id })
      .save();

    return response.json(user);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const support = await User.findOrFail(params.id);
    await support.delete();
    return response.json(support);
  }
}
