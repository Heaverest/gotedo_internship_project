import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from '@ioc:Adonis/Core/Validator';
import SupportRequest from "App/Models/SupportRequest";
import User from "App/Models/User";

export default class SupportRequestsController {
  public async index({ response,view }: HttpContextContract) {
    //const support = await SupportRequest.all();
    //return response.json(support);
    return view.render("RequestForm")
    
  }

  public async store({ request, response }: HttpContextContract) {
    const supportRequestSchema = schema.create({
       firstName: schema.string(),
      lastName: schema.string(),
      email: schema.string(),
      messageTitle: schema.string(),
      messageContent: schema.string(),
      requestImg:schema.string()
    })

    const payload = await request.validate({ schema: supportRequestSchema })

    // const { messageTitle, messageText, email } = request.only([
    //   "messageTitle",
    //   "messageText",
    //   "email",
    //   "requestImg"
    // ]);
    // console.log({ messageTitle, messageText, email });
    return payload

    // const user = await User.findByOrFail("email", email);
    // const support = await SupportRequest.create({
    //   messageTitle,
    //   messageText,
    //   createdBy: user.id,
    // });

    // return response.json({ support });
  }

  // public async show({ params, response }: HttpContextContract) {
  //   const support = await SupportRequest.findOrFail(params.id);
  //   return response.json(support);
  // }

  public async update({ params, request, response }: HttpContextContract) {
    const { messageTitle, messageText, email } = request.only([
      "messageTitle",
      "messageText",
      "email",
      "requestImg"
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
