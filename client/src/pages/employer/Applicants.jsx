import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import {
  getEmployerApplicants,
  updateApplicationStatus,
} from "../../services/applicationService";

const Applicants = () => {
  const [applications, setApplications] = useState([]);

  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const data = await getEmployerApplicants();

      console.log(
        "EMPLOYER APPLICANTS:",
        data
      );

      setApplications(data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateApplicationStatus(
        id,
        status
      );

      fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout role="employer">
      <h1 className="text-3xl font-bold mb-6">
        Applicants
      </h1>

      <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application._id}
            className="bg-white p-5 rounded-xl shadow flex justify-between"
          >
            <div>
              <h3 className="font-bold">
                {application.worker?.name}
              </h3>

              <p>
                Job: {application.job?.title}
              </p>

              <p>
                Status: {application.status}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  handleStatus(
                    application._id,
                    "accepted"
                  )
                }
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Accept
              </button>

              <button
                onClick={() =>
                  handleStatus(
                    application._id,
                    "rejected"
                  )
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reject
              </button>

              <button
                onClick={() =>
                  navigate(
                    `/chat/${application.worker?._id}`
                  )
                }
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Applicants;