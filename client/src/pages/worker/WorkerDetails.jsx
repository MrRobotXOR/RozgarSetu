import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";

import {
  getWorkerById,
} from "../../services/workerService";

const WorkerDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [worker, setWorker] =
    useState(null);

  useEffect(() => {

    const fetchWorker =
      async () => {

        try {

          const data =
            await getWorkerById(id);

          setWorker(
            data.worker
          );

        } catch (error) {

          console.log(error);

        }

      };

    fetchWorker();

  }, [id]);

  if (!worker) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white shadow rounded-xl p-8">

          <h1 className="text-4xl font-bold">
            {worker.name}
          </h1>

          <p className="mt-3">
            {worker.skill}
          </p>

          <p>
            {worker.location}
          </p>

          <p>
            Experience:
            {" "}
            {worker.experience}
            {" "}
            Years
          </p>

          <p>
            Expected Salary:
            ₹
            {worker.expectedSalary}
          </p>

          <button
            onClick={() =>
              navigate(
                `/chat/${worker._id}`
              )
            }
            className="mt-6 bg-teal-700 text-white px-6 py-3 rounded-lg"
          >
            Contact Worker
          </button>

        </div>

      </div>
    </>
  );
};

export default WorkerDetails;