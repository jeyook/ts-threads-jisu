import { UserInput } from "../types/dataTypes";
import getIsInputsEmpty from "../utils/getIsInputEmpty";
import throwError from "../utils/throwError";

async function createUser(body: UserInput) {
  const isInputEmpty = getIsInputsEmpty(body.email, body.nickname, body.password);
  if (isInputEmpty) throwError(400, "KEY_ERROR");
}

async function signInUser() {}

export default { createUser, signInUser };


