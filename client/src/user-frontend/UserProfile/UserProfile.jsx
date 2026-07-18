import UserLayout from "../components/UserLayout";
import "./UserProfile.css";

function Profile() {
  return (
    <UserLayout>
      <div className="profile-page">

        <h1>My Profile</h1>

        <div className="profile-card">

          <div className="profile-top">

            <div className="avatar">
              DU
            </div>

            <div>
              <h2>Demo User</h2>
              <p>Employee</p>
            </div>

          </div>

          <div className="profile-info">

            <div>
              <label>Employee ID</label>
              <p>EMP1025</p>
            </div>

            <div>
              <label>Email</label>
              <p>demo@example.com</p>
            </div>

            <div>
              <label>Department</label>
              <p>IT Support</p>
            </div>

            <div>
              <label>Phone</label>
              <p>+91 9876543210</p>
            </div>

          </div>

          <button>Edit Profile</button>

        </div>

      </div>
    </UserLayout>
  );
}

export default Profile;