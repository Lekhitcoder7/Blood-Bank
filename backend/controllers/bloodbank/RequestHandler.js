

import sendEmail from "../../utils/sendEmail.js";


const RequestHandler = (app, db) => {

  // CREATE BLOOD REQUEST / REGISTER
  app.post("/api/request", (req, res) => {
    const { name, email, blood_group } = req.body;

    if (!name || !email || !blood_group) {
      return res.status(400).json({ message: "All fields required" });
    }

    const sql =
      "INSERT INTO blood_requests (name, email, blood_group) VALUES (?, ?, ?)";

    db.query(sql, [name, email, blood_group], async (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Database error" });
      }

      // 🔥 EMAIL YAHAN JAYEGI
      await sendEmail(email, name);

      res.status(201).json({
        message: "Request created & email sent",
      });
    });
  });

};
export default RequestHandler;
