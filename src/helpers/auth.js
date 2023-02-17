import { getCookie } from 'cookies-next';

async function auth() {
  const cookie = getCookie('auth');
  console.log(cookie)
  window.location.href = "/login"
}

module.exports = auth;
