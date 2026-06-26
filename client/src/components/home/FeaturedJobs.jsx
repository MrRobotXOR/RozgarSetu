import { useNavigate } from "react-router-dom";

const jobs = [
  {
    title: "Electrician",
    company: "ABC Electricals",
    location: "Pune",
    salary: "₹22,000 / month",
    type: "Full Time",
    urgent: true,
    verified: true,
    icon: "⚡",
  },
  {
    title: "Driver",
    company: "Speed Logistics",
    location: "Mumbai",
    salary: "₹18,500 / month",
    type: "Full Time",
    urgent: false,
    verified: true,
    icon: "🚚",
  },
  {
    title: "Shop Helper",
    company: "Shree Mart",
    location: "Nashik",
    salary: "₹14,000 / month",
    type: "Part Time",
    urgent: true,
    verified: false,
    icon: "🛒",
  },
];

const FeaturedJobs = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/signup"); // change if needed
  };

  const handleViewAll = () => {
    navigate("/signup"); // change if needed
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            FEATURED JOBS
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-gray-900">
            Latest Jobs Hiring Now
          </h2>

          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            Discover verified jobs from trusted employers across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl border border-gray-200 p-7 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-indigo-500/10 transition duration-500"></div>

              <div className="relative z-10">

                {/* Top badges */}
                <div className="flex justify-between items-center">
                  {job.urgent ? (
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full">
                      ⚡ Urgent
                    </span>
                  ) : (
                    <span></span>
                  )}

                  {job.verified && (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      ✔ Verified
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="mt-6 w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  {job.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {job.title}
                </h3>

                {/* Company */}
                <p className="text-gray-500 mt-1">{job.company}</p>

                {/* Details */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{job.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>💰</span>
                    <span className="font-semibold text-green-600">
                      {job.salary}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>🕒</span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleApply}
                  className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Apply Now →
                </button>
              </div>

              {/* bottom line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <button
            onClick={handleViewAll}
            className="px-8 py-4 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View All Jobs →
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;