// auth.smoke.test.js
// QUALITY GATE 1 - SMOKE TEST
// Chỉ kiểm tra 1 chức năng sống còn: đăng nhập đúng phải thành công

const { login } = require("./auth");

test("Smoke Test - Login with correct credentials returns true", () => {
  expect(login("admin", "123")).toBe(true);
});
