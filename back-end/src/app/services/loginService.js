const md5 = require('md5');
const { generatorJwt } = require('../auth/generatorJwt');
const loginModel = require('../models/loginModel');

const loginService = {
  auth: async ({ email, password }) => {
    const passwordMd5 = md5(password);
    const user = await loginModel.auth({ email, password: passwordMd5 });
    if (user) {
      const token = generatorJwt(user);
      return { token, ...user };
    }
  },
};

module.exports = loginService;
