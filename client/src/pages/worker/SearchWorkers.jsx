import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWorkers } from "../../services/workerService";

const SearchWorkers = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const data = await getWorkers();
        setWorkers(data.workers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Available Workers
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {workers.map((worker) => (

          <div
            key={worker._id}
            className="bg-white p-6 rounded-xl shadow"
          >

            <h3 className="text-xl font-bold">
              {worker.name}
            </h3>

            <p>
              Skill: {worker.skill || "Not Added"}
            </p>

            <p>
              Experience: {worker.experience} Years
            </p>

            <p>
              Location: {worker.location || "Not Added"}
            </p>

            <p>
              Salary: ₹{worker.expectedSalary}
            </p>

            <Link
              to={`/workers/${worker._id}`}
              className="inline-block mt-4 bg-teal-700 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
};

export default SearchWorkers;