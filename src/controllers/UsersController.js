import CreateUserService from '../services/CreateUserService';

export default class UsersController {
  async index(request, response) {
    try {
      const { name, email, password } = request.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, password });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}
