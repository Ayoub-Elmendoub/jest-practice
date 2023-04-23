import Model from "./model";

describe("Model: ", () => {
  it("instantiated successfully ", () => {
    const model = new Model();
    expect(model).toBeInstanceOf(Model);
  });
});
