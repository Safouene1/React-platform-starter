interface User {
  accessToken: string;
}

export function authHeader() {
  const userJSON = localStorage.getItem('user');

  if (userJSON) {
    const user: User = JSON.parse(userJSON);

    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    }
  }

  return {};
}
