import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import UserRepository from '../repositories/UserRepository'
import { IUser } from '../dtos/UserDTOS'
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET || ""

class UserService {
  public async create(
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<any> {
    if(!username || !email || !password || !confirmPassword) {
      throw new Error("Preencha todos os campos!")
    }
  
    if(password !== confirmPassword) {
      throw new Error("As senhas não coincidem!")
    }
    // check if user exists by name and by email
    
    const user = await UserRepository.findByUsername(username) 
    if(user) {
      throw new Error("Já existe um usuário cadastrado com esse nome.")
    }

    const userEmail = await UserRepository.findByEmail(email)
    if(userEmail) {
      throw new Error("Já existe um usuário cadastrado com esse email.")
    }

    // Encrypt password (GENERATE HASH)
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser: IUser = {
      username: username,
      email: email,
      password: passwordHash
    }

    await UserRepository.create(newUser)
    
    return newUser
  }

}

export default new UserService();
