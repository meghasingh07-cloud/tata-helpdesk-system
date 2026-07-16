import React from "react";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Aaritrika Chowdhury",
    email: "aaritrika@example.com",
    phone: "+91 9876543210",
    department: "IT Department",
    role: "User",
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Department:</strong> {user.department}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <button>Edit Profile</button>
    </div>
  );
}

export default Profile;