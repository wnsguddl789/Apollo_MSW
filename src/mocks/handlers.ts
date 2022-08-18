import { rest } from "msw";
import { UserType } from "../types/userRepository";

const users: UserType = {
  email: "wnsguddl789@gmail.com",
  password: "azxs4125",
  accessToken: "1312155467346sadas",
};

export const handlers = [
  rest.get("https://my.backend/users", (_req, res, ctx) => {
    return res(ctx.json<UserType>(users));
  }),

  rest.get("/users", (_req, res, ctx) => {
    return res(ctx.json<UserType>(users));
  }),
];
