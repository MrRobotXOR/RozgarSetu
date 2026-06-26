import { useEffect, useState } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { getMyApplications } from "../../services/applicationService";

const Applications = () => {

  const [applications, setApplications] =
    useState([]);

  useEffect(() => {

    const fetchApplications =
      async () => {

        try {

          const data =
            await getMyApplications();

          setApplications(
            data.applications
          );

        } catch (error) {

          console.log(error);

        }

      };

    fetchApplications();

  }, []);

  return (

    <DashboardLayout role="worker">

      <h1 className="text-4xl font-bold mb-8">
        My Applications
      </h1>

      <div className="space-y-5">

        {applications.map(
          (application) => (

            <div
              key={application._id}
              className="bg-white p-5 rounded-xl shadow"
            >

              <h3 className="font-bold text-xl">
                {application.job?.title}
              </h3>

              <p>
                {application.job?.location}
              </p>

              <p
                className={
                  application.status === "accepted"
                    ? "text-green-600"
                    : application.status === "rejected"
                    ? "text-red-600"
                    : "text-yellow-600"
                }
              >
                Status: {application.status}
              </p>

            </div>

          )
        )}

      </div>

    </DashboardLayout>

  );
};

export default Applications;