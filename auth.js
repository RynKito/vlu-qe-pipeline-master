// auth.js
// Hàm login đơn giản dùng cho mục đích kiểm thử (QE Lab 01)

function login(username, password) {
  // Tài khoản hợp lệ giả lập
  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "123";

  // Danh sách tài khoản bị khóa (giả lập)
  const LOCKED_USERS = ["locked_user"];

  if (!username || username.trim() === "") {
    return false; // username rỗng -> luôn thất bại
  }

  if (!password || password.trim() === "") {
    return false; // password rỗng -> luôn thất bại
  }

  if (LOCKED_USERS.includes(username)) {
    return false; // tài khoản bị khóa -> luôn thất bại
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    return true; // đăng nhập đúng
  }

  return false; // sai username/password
}

module.exports = { login };
