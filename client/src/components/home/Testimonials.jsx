const features = [
  {
    icon: "🛡️",
    title: "Verified Workers",
    desc: "Every worker is verified to ensure safe and trusted hiring.",
  },
  {
    icon: "⚡",
    title: "Fast Hiring",
    desc: "Post a job and connect with skilled workers in minutes.",
  },
  {
    icon: "📍",
    title: "Nearby Jobs",
    desc: "Find jobs and workers near your location with ease.",
  },
  {
    icon: "💬",
    title: "Real-time Chat",
    desc: "Instant messaging between employers and workers.",
  },
  {
    icon: "📱",
    title: "Easy to Use",
    desc: "A simple and user-friendly platform for everyone.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    desc: "Your data is protected with secure authentication and privacy.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-gray-900">
            Why Choose RozgarSetu?
          </h2>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Making hiring faster, safer, and easier for workers and employers
            across India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-indigo-500/10 transition duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-blue-100 flex items-center justify-center text-5xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;