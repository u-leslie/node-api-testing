const userService = require("../../src/services/userService");
const User = require("../../src/models/user");

jest.mock("../../src/models/user");

describe("User Service", () => {
  it("should create a new user", async () => {
    const mockUser = {
      save: jest.fn().mockResolvedValue({ name: "Anne Leslie" }),
    };
    User.mockImplementation(() => mockUser);

    const user = await userService.createUser({
      name: "Anne Leslie",
      email: "anneuhiriwe@gmail.com",
    });

    expect(mockUser.save).toHaveBeenCalled();
    expect(user.name).toBe("Anne Leslie");
  });
});
