import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const user = await User.all();
    return response.json(user);
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(["firstName", "lastName", "email"]);
    console.log(data);
    const user = await User.create(data);

    return response.json({ user });
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    return response.json(user);
  }

  public async update({ params, request, response }: HttpContextContract) {
    const data = request.only(["firstName", "lastName", "email"]);
    const user = await User.findOrFail(params.id);
    await user.merge(data).save();

    return response.json(user);
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    await user.delete();
    return response.json(user);
  }
}
