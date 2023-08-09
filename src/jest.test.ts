describe('testing jest implementation', () => {
  test("returns undefined by default", () => {
    const mock = jest.fn();
  
    let result = mock("foo");
  
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("foo");
  });
  
  test("mock implementation", () => {
    const mock = jest.fn(x => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("also mock implementation", () => {
    const mock = jest.fn().mockImplementation(x => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  
    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
  });

  test("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  test("mock promise resolution", () => {
    const mock = jest.fn();
    mock.mockResolvedValue("bar");
  
    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });  
  
  afterEach(() => {
    // clear all mocks to make sure that they won't be passed to any tests out of this file
    jest.clearAllMocks();
  });  
});