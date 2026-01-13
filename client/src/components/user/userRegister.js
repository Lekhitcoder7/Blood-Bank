import React, { useState } from "react";
import Axios from "axios";

// CSS
import "../../assets/css/UserRegister.css";

const UserRegister = () => {
  const [userUserName, setuserUsername] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPlace, setuserPlace] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userGender, setuserGender] = useState("");
  const [userBloodGroup, setuserBloodGroup] = useState("");

  // ✅ FORM SUBMIT HANDLER
  const submituserRegister = async (e) => {
    e.preventDefault(); // 🔥 page reload stop

    try {
      const response = await Axios.post(
        "http://localhost:5003/reg/usr", // 👉 deploy ke baad yahin URL change hoga
        {
          userFName,
          userAge,
          userGender,
          userBloodGroup,
          userPhone,
          userMail,
          userPlace,
          userUserName,
          userPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Registration failed!");
    }
  };

  return (
    <div className="user-register">
      <h2>DONAR REGISTER</h2>

      {/* ✅ onSubmit FORM pe */}
      <form className="userReg-form" onSubmit={submituserRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={userFName}
          onChange={(e) => setuserFName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Age"
          value={userAge}
          onChange={(e) => setuserAge(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Gender (M/F)"
          value={userGender}
          onChange={(e) => setuserGender(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Blood Group"
          value={userBloodGroup}
          onChange={(e) => setuserBloodGroup(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={userMail}
          onChange={(e) => setuserMail(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Phone Number"
          value={userPhone}
          onChange={(e) => setuserPhone(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Place"
          value={userPlace}
          onChange={(e) => setuserPlace(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="User Name"
          value={userUserName}
          onChange={(e) => setuserUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setuserPassword(e.target.value)}
          required
        />

        {/* ✅ button type submit */}
        <button type="submit">REGISTER</button>
      </form>
    </div>
  );
};

export default UserRegister;
