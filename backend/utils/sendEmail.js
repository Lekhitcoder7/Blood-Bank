import nodemailer from "nodemailer";

const sendEmail = async (to, name) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Blood Bank" <${process.env.EMAIL_USER}>`,
      to,
      subject: "Registration Successful ✅",
      html: `
        <h2>Hello ${name}</h2>
        <p>You have successfully registered in Blood Bank App.</p>
      `,
    });

    console.log("✅ Email sent successfully");
  } catch (error) {
    console.error("❌ Email error:", error.message);
    throw error;
  }
};

export default sendEmail;
