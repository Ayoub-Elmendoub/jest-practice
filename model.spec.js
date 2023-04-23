import Model from "./model";

describe("Model: ", () => {
  it("instantiated successfully ", () => {
    const model = new Model();
    expect(model).toBeInstanceOf(Model);
  });

  it("have the correct structure ", () => {
    const model = new Model();
    expect(model).toEqual(expect.objectContaining({
      $collection: expect.any(Array),
      record: expect.any(Function),
      all: expect.any(Function),
      find: expect.any(Function),
      update: expect.any(Function),
    }));
  });
});
