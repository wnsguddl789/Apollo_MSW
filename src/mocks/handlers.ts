import { graphql } from 'msw';

const user = {
  avatar: 'https://avatars.githubusercontent.com/u/33216504?v=4',
  name: 'Park JunHyeong',
  age: 27,
  gender: 'male',
};

export const handlers = [
  graphql.mutation('Login', (req, res, ctx) => {
    const { username } = req.variables;

    return res(
      ctx.data({
        login: {
          username,
        },
      })
    );
  }),

  graphql.query('fetchUserInfo', (req, res, ctx) => {
    return res(
      ctx.data({
        user,
      })
    );
  }),
];
