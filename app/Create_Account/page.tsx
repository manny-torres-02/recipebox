"use client";
import React, { useState } from "react";


export default function create_account() {
  const [email, setEmail] = useState();
  const [password, setNewPassword] = useState();
  // const;

  const handleSignup = async () => {
    try {
      const user
    }

  return (
    <div>
      <form>
        <input type="text" value={email} placeholder="email" />
        <input type="text" value={password} placeholder="password" />
        <button type="submit"> Signup </button>
      </form>
    </div>
  );
}
