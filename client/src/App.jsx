import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Agents from "./pages/Agents";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Login from "./user-frontend/Login/Login";
import Register from "./user-frontend/Register/Register";
import RaiseTicket from "./user-frontend/RaiseTicket/RaiseTicket";
import MyTickets from "./user-frontend/MyTickets/MyTickets";
import Notification from "./user-frontend/Notification/Notification";
import UserDashboard from "./user-frontend/Dashboard/UserDashboard";
import UserProfile from "./user-frontend/UserProfile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/raise-ticket" element={<RaiseTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/user-profile" element={<UserProfile />} />  
        <Route path="/user-dashboard" element={<UserDashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;