import { User } from "../models/User";
import { Project } from "../models/Project";
import { Post } from "../models/Post";
import { IUser } from "../dtos/UserDTOS";

class UserRepository {
  public async create(user: IUser) {
    return await User.create({...user})
  }

  public async findByUsername(username: string): Promise<any> {
    return await User.findOne({ where: { username: username } });
  }

  public async findByEmail(email: string) {
    return await User.findOne({ where: { email: email } })
  }

}

export default new UserRepository();
