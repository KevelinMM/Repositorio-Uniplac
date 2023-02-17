import { setCookie } from 'cookies-next';

async function createCookie(content) {
  setCookie('auth', content, { maxAge: 18000 }); // 18000 - 5horas
  return true
}

module.exports = createCookie;
