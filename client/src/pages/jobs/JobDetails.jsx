import Navbar from "../../components/common/Navbar";

const JobDetails = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white shadow rounded-xl p-8">

          <h1 className="text-4xl font-bold">
            Electrician
          </h1>

          <p className="mt-3">
            Pune
          </p>

          <p className="text-teal-700 text-xl mt-2">
            ₹18000 / month
          </p>

          <p className="mt-6 text-gray-600">
            Looking for an experienced electrician
            for residential projects.
          </p>

          <button className="mt-6 bg-teal-700 text-white px-6 py-3 rounded-lg">
            Apply Now
          </button>

        </div>

      </div>
    </>
  );
};

export default JobDetails;