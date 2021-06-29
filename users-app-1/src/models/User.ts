export default class User {
  name: string;
  email: string;
  avatar: string;

  constructor(
    first_name: string,
    last_name: string,
    email: string,
    avatar: string
  ) {
    this.name = `${first_name} ${last_name}`;
    this.email = email;
    this.avatar = avatar;
  }
}
