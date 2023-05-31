import { Request, Response } from 'express'
import UserService from '../services/UserService'

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { username, email, password, confirmPassword } = req.body

      await UserService.create(username, email, password,confirmPassword)
      
      return res.status(201).json({message: "Usuário criado com sucesso!"})
    } catch (error: any) {
      return res.status(400).json({message: error.message})
    }
  }
}

export default new UserController();
