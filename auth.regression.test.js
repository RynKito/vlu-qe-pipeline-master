// auth.regression.test.js
// QUALITY GATE 2 - REGRESSION TEST
// Kiểm tra đầy đủ các trường hợp ngoại lệ của hàm login

const { login } = require("./auth");

describe("Regression Test - Login function", () => {

  test("Login with correct username and password returns true", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("Login with wrong password returns false", () => {
    expect(login("admin", "wrongpass")).toBe(false);
  });

  test("Login with empty username returns false", () => {
    expect(login("", "123")).toBe(false);
  });

  test("Login with empty password returns false", () => {
    expect(login("admin", "")).toBe(false);
  });

  test("Login with special characters in password returns false", () => {
    expect(login("admin", "!@#$%^&*()")).toBe(false);
  });

  test("Login with locked account returns false", () => {
    expect(login("locked_user", "123")).toBe(false);
  });

  test("Login with non-existent username returns false", () => {
    expect(login("unknown_user", "123")).toBe(false);
  });
});
