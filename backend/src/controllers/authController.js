import db from "../config/db.js";

export const loginUser = (req, res) => {
  const { username, password } = req.body;

  // basic validation
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username and password required",
    });
  }

  const sql =
    "SELECT * FROM user_login WHERE userUserName = ? AND userPassword = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({
        success: false,
        message: "Database error",
      });
    }

    if (result.length > 0) {
      return res.json({
        success: true,
        message: "Login successful",
        user: result[0],
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
  });
};
