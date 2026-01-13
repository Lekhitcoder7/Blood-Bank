import sendEmail from "../../utils/sendEmail.js";


const UserRegisterHandler = (app, db) => {
  app.post("/reg/usr", async (req, res) => {
    try {
      console.log("BODY =>", req.body);

      const {
        userFName,
        userAge,
        userGender,
        userBloodGroup,
        userPhone,
        userMail,
        userPlace,
      } = req.body;

      const sqlInsertUser = `
        INSERT INTO user_details
        (userFName, userAge, userGender, userBloodGroup, userPhone, userMail, userPlace)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;

      const [result] = await db.query(sqlInsertUser, [
        userFName,
        userAge,
        userGender,
        userBloodGroup,
        userPhone,
        userMail,
        userPlace,
      ]);

      // ✅ EMAIL SEND (NEW ADDITION)
      await sendEmail(userMail, userFName);

      return res.status(201).json({
        success: true,
        message: "User registered & confirmation email sent",
        userId: result.insertId,
      });

    } catch (error) {
      console.error("REGISTER ERROR:", error);
      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  });
};

export default UserRegisterHandler;
