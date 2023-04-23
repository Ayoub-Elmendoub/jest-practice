interface UserDetails {
  firstName: string;
  lastName: string;
}

class User {
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

describe("User: ", () => {
  it("name returns full name", () => {
    const user = new User({ firstName: "Jane", lastName: "Doe" });
    expect(user.name).toBe("Jane Doe");
  });
});
