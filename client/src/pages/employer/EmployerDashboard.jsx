import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatsCard from "../../components/layout/StatsCard";
import PageHeader from "../../components/layout/PageHeader";

import { getMyJobs } from "../../services/jobService";
import { getEmployerApplicants } from "../../services/applicationService";

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const jobsData = await getMyJobs();
      const applicantsData =
        await getEmployerApplicants();

      setJobs(jobsData.jobs || []);
      setApplicants(
        applicantsData.applications || []
      );
    } catch (error) {
      console.error(
        "Dashboard Error:",
        error
      );
    }
  };

  const hiredCount =
    applicants.filter(
      (app) =>
        app.status === "accepted"
    ).length;

  return (
    <DashboardLayout role="employer">
      <PageHeader
        title="Employer Dashboard"
        subtitle="Track your jobs and applicants"
      />

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Jobs"
          value={jobs.length}
        />

        <StatsCard
          title="Applicants"
          value={applicants.length}
        />

        <StatsCard
          title="Hired"
          value={hiredCount}
        />
      </div>

      <Link
        to="/workers"
        className="inline-block mt-6 bg-teal-700 text-white px-5 py-3 rounded hover:bg-teal-800 transition"
      >
        Browse Workers
      </Link>
    </DashboardLayout>
  );
};

export default EmployerDashboard;