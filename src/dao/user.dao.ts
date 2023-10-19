import { UserInput } from "../types/dataTypes";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

async function createUser(userInput: UserInput) {
  const repository = AppDataSource.getRepository(User);
  const newUserData = repository.create(userInput);
  const result = await repository.save(newUserData);
  return result;
}

async function getUserByEmail(email: string) {
  const repository = AppDataSource.getRepository(User);
  const user = await repository.findOne({
    where: { email: email },
    select: { id: true, email: true, password: true },
  });
  return user;
}

async function findUser(userId: number) {
  const repository = AppDataSource.getRepository(User);
  const user = await repository.findOne({ where: { id: userId }, select: {id: true} });
  return user;
}

async function getProfile(userId: number) {
  const repository = AppDataSource.getRepository(User);
  const user = await repository.findOne({ where: { id: userId }, select: {id: true, nickname: true, profileImage: true} });
  return user;
}

export default {
  createUser,
  getUserByEmail,
  findUser,
  getProfile,
};
