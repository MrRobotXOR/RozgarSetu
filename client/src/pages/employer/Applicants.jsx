import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

import {
  getEmployerApplicants,
  updateApplicationStatus,
} from "../../services/applicationService";

const Applicants = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const navigate = useNavigate();

  const fetchApplications = async () => {
    try {
      const data = await getEmployerApplicants();
      setApplications(data.applications || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatus = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);

      fetchApplications();

      if (
        selectedApplication &&
        selectedApplication._id === id
      ) {
        setSelectedApplication({
          ...selectedApplication,
          status,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout role="employer">
      <h1 className="text-3xl font-bold mb-8">
        Applicants
      </h1>

      <div className="space-y-5">
        {applications.map((application) => (
          <div
            key={application._id}
            className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
          >
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-teal-700 text-white flex items-center justify-center text-2xl font-bold">
                {application.worker?.name
                  ?.charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  {application.worker?.name}
                </h2>

                <p className="text-gray-500">
                  {application.job?.title}
                </p>

                <p className="text-sm mt-1">
                  Status :
                  <span
                    className={`ml-2 font-semibold ${
                      application.status ===
                      "accepted"
                        ? "text-green-600"
                        : application.status ===
                          "rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {application.status}
                  </span>
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setSelectedApplication(application)
              }
              className="bg-teal-700 text-white px-5 py-2 rounded-lg hover:bg-teal-800"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* PROFILE MODAL */}

      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-5">

          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">

            {/* Header */}

            <div className="bg-gradient-to-r from-teal-700 to-teal-500 text-white p-8">

              <div className="flex items-center gap-5">

                <div className="w-24 h-24 rounded-full bg-white text-teal-700 flex items-center justify-center text-4xl font-bold">
                  {selectedApplication.worker?.name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    {selectedApplication.worker?.name}
                  </h2>

                  <p className="mt-2">
                    {selectedApplication.job?.title}
                  </p>

                  <div className="mt-2">

                    {selectedApplication.worker
                      ?.isAvailable ? (
                      <span className="bg-green-500 px-3 py-1 rounded-full text-sm">
                        🟢 Available
                      </span>
                    ) : (
                      <span className="bg-red-500 px-3 py-1 rounded-full text-sm">
                        🔴 Busy
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </div>

            <div className="p-8 space-y-8">

              <div>

                <h3 className="text-xl font-bold mb-3">
                  About
                </h3>

                <p className="text-gray-600">
                  Experienced{" "}
                  {selectedApplication.job?.title}
                  {" "}looking for work opportunities.
                </p>

              </div>

              <div>

                <h3 className="text-xl font-bold mb-3">
                  Skills
                </h3>

                <div className="flex flex-wrap gap-2">

                  {selectedApplication.worker?.skill
                    ? selectedApplication.worker.skill
                        .split(",")
                        .map((skill, index) => (
                          <span
                            key={index}
                            className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full"
                          >
                            {skill.trim()}
                          </span>
                        ))
                    : (
                      <span className="text-gray-500">
                        No skills added
                      </span>
                    )}

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold">
                    📍 Location
                  </p>

                  <p>
                    {selectedApplication.worker
                      ?.location || "-"}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold">
                    💼 Experience
                  </p>

                  <p>
                    {
                      selectedApplication.worker
                        ?.experience
                    }{" "}
                    Years
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold">
                    💰 Expected Salary
                  </p>

                  <p>
                    ₹
                    {
                      selectedApplication.worker
                        ?.expectedSalary
                    }
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="font-semibold">
                    📞 Phone
                  </p>

                  <p>
                    {selectedApplication.worker
                      ?.phone || "-"}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 md:col-span-2">
                  <p className="font-semibold">
                    📧 Email
                  </p>

                  <p>
                    {
                      selectedApplication.worker
                        ?.email
                    }
                  </p>
                </div>

              </div>

              <div className="border rounded-xl p-5">

                <p>
                  <strong>Applied Job :</strong>{" "}
                  {
                    selectedApplication.job
                      ?.title
                  }
                </p>

                <p className="mt-2">
                  <strong>Status :</strong>{" "}

                  <span
                    className={`font-semibold ${
                      selectedApplication.status ===
                      "accepted"
                        ? "text-green-600"
                        : selectedApplication.status ===
                          "rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {selectedApplication.status}
                  </span>

                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <button
                  onClick={() =>
                    handleStatus(
                      selectedApplication._id,
                      "accepted"
                    )
                  }
                  className="flex-1 bg-green-600 text-white py-3 rounded-xl"
                >
                  Accept
                </button>

                <button
                  onClick={() =>
                    handleStatus(
                      selectedApplication._id,
                      "rejected"
                    )
                  }
                  className="flex-1 bg-red-600 text-white py-3 rounded-xl"
                >
                  Reject
                </button>

                <button
                  onClick={() =>
                    navigate(
                      `/chat/${selectedApplication.worker._id}`
                    )
                  }
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl"
                >
                  Chat
                </button>

              </div>

              <button
                onClick={() =>
                  setSelectedApplication(null)
                }
                className="w-full mt-4 border py-3 rounded-xl hover:bg-gray-100"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}
    </DashboardLayout>
  );
};

export default Applicants;