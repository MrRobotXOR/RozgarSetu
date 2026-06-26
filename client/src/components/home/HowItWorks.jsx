const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Account",
    desc: "Sign up in just a few seconds and get started.",
  },
  {
    number: "02",
    icon: "📝",
    title: "Complete Profile",
    desc: "Add your skills, experience, and location.",
  },
  {
    number: "03",
    icon: "🔍",
    title: "Search Jobs",
    desc: "Browse nearby jobs that match your skills.",
  },
  {
    number: "04",
    icon: "🎉",
    title: "Get Hired",
    desc: "Connect with employers and start working.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            HOW IT WORKS
          </span>

          <h2 className="text-5xl font-extrabold mt-6 text-gray-900">
            Find Your Job in 4 Easy Steps
          </h2>

          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            RozgarSetu makes finding jobs and hiring workers simple, fast,
            and secure.
          </p>

        </div>

        {/* Steps */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {steps.map((step, index) => (

            <div
              key={index}
              className="group relative bg-white rounded-3xl border border-gray-200 p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >

              {/* Hover Gradient */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-indigo-500/10 transition duration-500"></div>

              <div className="relative z-10">

                {/* Number */}

                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="text-5xl mt-6 group-hover:scale-125 transition duration-500">
                  {step.icon}
                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7">
                  {step.desc}
                </p>

              </div>

              {/* Bottom Line */}

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-500"></div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;