import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import WorkerDashboard from "../pages/worker/WorkerDashboard";
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import WorkerProfile from "../pages/worker/WorkerProfile";
import Applications from "../pages/worker/applications";
import NearbyJobs from "../pages/worker/NearbyJobs";

import SearchJobs from "../pages/jobs/SearchJobs";
import JobDetails from "../pages/jobs/JobDetails";

import SearchWorkers from "../pages/worker/SearchWorkers";
import WorkerDetails from "../pages/worker/WorkerDetails";

import PostJob from "../pages/employer/PostJob";
import ManageJobs from "../pages/employer/ManageJobs";
import Applicants from "../pages/employer/Applicants";

import ChatPage from "../pages/chat/ChatPage";
import Messages from "../pages/chat/Messages";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      {/* Worker Routes */}

      <Route
        path="/worker/dashboard"
        element={
          <ProtectedRoute role="worker">
            <WorkerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/worker/profile"
        element={
          <ProtectedRoute role="worker">
            <WorkerProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/worker/applications"
        element={
          <ProtectedRoute role="worker">
            <Applications />
          </ProtectedRoute>
        }
      />

      <Route
        path="/worker/nearby-jobs"
        element={
          <ProtectedRoute role="worker">
            <NearbyJobs />
          </ProtectedRoute>
        }
      />

      {/* Employer Routes */}

      <Route
        path="/employer/dashboard"
        element={
          <ProtectedRoute role="employer">
            <EmployerDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/post-job"
        element={
          <ProtectedRoute role="employer">
            <PostJob />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/manage-jobs"
        element={
          <ProtectedRoute role="employer">
            <ManageJobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/employer/applicants"
        element={
          <ProtectedRoute role="employer">
            <Applicants />
          </ProtectedRoute>
        }
      />

      {/* Public Routes */}

      <Route
        path="/jobs"
        element={<SearchJobs />}
      />

      <Route
        path="/jobs/:id"
        element={<JobDetails />}
      />

      <Route
        path="/workers"
        element={<SearchWorkers />}
      />

      <Route
        path="/workers/:id"
        element={<WorkerDetails />}
      />
      <Route
  path="/messages"
  element={<Messages />}
/>

     <Route
 path="/chat/:userId"
 element={<ChatPage />}
/>

    </Routes>
  );
};

export default AppRoutes;