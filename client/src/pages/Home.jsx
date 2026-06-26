import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import Categories from "../components/home/Categories";
import HowItWorks from "../components/home/HowItWorks";
import FeaturedJobs from "../components/home/FeaturedJobs";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Find Jobs &
                <span className="text-teal-700">
                  {" "}Workers Near You
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                India's local hiring platform for
                electricians, plumbers, drivers,
                helpers and small businesses.
              </p>

              <div className="mt-8 flex gap-4">
                <button className="bg-teal-700 text-white px-6 py-3 rounded-lg">
                  Find Jobs
                </button>

                <button className="border px-6 py-3 rounded-lg">
                  Hire Workers
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="workers"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Home Sections */}
      <Categories />
      <HowItWorks />
      <FeaturedJobs />
      <WhyChooseUs />
      <Testimonials />

      <Footer />
    </>
  );
};

export default Home;