import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatsCard from "../../components/layout/StatsCard";
import PageHeader from "../../components/layout/PageHeader";
import { getMyApplications } from "../../services/applicationService";

const WorkerDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const data = await getMyApplications();
      setApplications(data.applications);
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const acceptedCount = applications.filter(
    (app) => app.status === "accepted"
  ).length;

  const pendingCount = applications.filter(
    (app) => app.status === "pending"
  ).length;

  return (
    <DashboardLayout role="worker">

      {/* HEADER */}
      <div className="animate-fade-in">
        <PageHeader
          title="Worker Dashboard"
          subtitle="Track your job applications in real time"
        />
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-28 rounded-2xl bg-slate-200 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <>
          {/* STATS GRID */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="transform hover:scale-105 transition duration-300">
              <StatsCard
                title="Applications"
                value={applications.length}
              />
            </div>

            <div className="transform hover:scale-105 transition duration-300">
              <StatsCard
                title="Accepted"
                value={acceptedCount}
              />
            </div>

            <div className="transform hover:scale-105 transition duration-300">
              <StatsCard
                title="Pending"
                value={pendingCount}
              />
            </div>

          </div>

          {/* EXTRA SECTION (Premium feel boost) */}
          <div className="mt-10 bg-white rounded-3xl shadow-md border p-6 hover:shadow-xl transition">

            <h3 className="text-xl font-bold text-teal-700 mb-3">
              Quick Insights
            </h3>

            <p className="text-gray-500">
              You have {pendingCount} pending applications. Keep applying to increase your chances.
            </p>

            <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-500"
                style={{
                  width:
                    applications.length === 0
                      ? "0%"
                      : `${(acceptedCount / applications.length) * 100}%`,
                }}
              />
            </div>

          </div>

        </>
      )}

    </DashboardLayout>
  );
};

export default WorkerDashboard;