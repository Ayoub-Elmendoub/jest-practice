export interface UserDetails {
  firstName: string;
  lastName: string;
}

export default class User {
  private firstName;
  private lastName;
  constructor(details: UserDetails) {
    const { firstName, lastName } = details;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}
