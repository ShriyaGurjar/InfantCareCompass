import React from "react";
import { motion } from "framer-motion";
import "./Pages.css";
// Animation Variants
const slideUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const popUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const HomePage = () => {
  return (
    <div className="bg-gray-50  text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[800px] relative hero_img "
      >
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-white px-6 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to InfantCare Compass
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A helping hand for parents everywhere, providing care, education, and connection.
          </motion.p>
          <motion.a
            href="#services"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Explore Services
          </motion.a>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 bg-gray-100 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          "Every child deserves a happy and healthy start in life."
        </motion.h2>
        <p className="text-lg text-gray-600">
          Our mission is to empower parents with knowledge, tools, and expert support to provide
          the best care for their children.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Service 1 */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
              variants={popUp}
            >
              <img
                src="https://res.cloudinary.com/dbnticsz8/image/upload/v1734934194/Infant%20care%20Compass/gheqjy0npqdkyhgqds43.png"
                alt="Vaccination Schedule"
                className="w-full object-contain mx-auto "
              />
              <h3 className="text-xl font-bold mb-2">Vaccination Schedule</h3>
              <p className="text-sm text-gray-600">
                Stay on top of your child's vaccinations with reminders and a detailed schedule.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
              variants={popUp}
            >
              <img
                src="https://res.cloudinary.com/dbnticsz8/image/upload/v1734935048/Infant%20care%20Compass/crqtr4wfu69wmqnulmja.png"
                alt="Book Consultation"
                className="w-full object-contain mx-auto "
              />
              <h3 className="text-xl font-bold mb-2">24/7 Consultation</h3>
              <p className="text-sm text-gray-600">
                Connect with pediatric experts anytime for personalized guidance and support.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
              variants={popUp}
            >
              <img
                src="https://res.cloudinary.com/dbnticsz8/image/upload/v1734935847/Infant%20care%20Compass/yf0tea4dqhjf4ww3hjcz.png"
                alt="Childcare Education"
                className="w-full h-52 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Childcare Education</h3>
              <p className="text-sm text-gray-600">
                Access curated articles and videos for every stage of your child's growth.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kids Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Celebrating Happy Childhood Moments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src="https://res.cloudinary.com/dbnticsz8/image/upload/v1734936845/Infant%20care%20Compass/rrhakzuhcryo7dewe57i.png" alt="Kids smiling" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src="https://res.cloudinary.com/dbnticsz8/image/upload/v1734936923/Infant%20care%20Compass/rx6c2iojkbym0u0nm8ph.png" alt="Playing kids" className="w-full h-64 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <img src="https://res.cloudinary.com/dbnticsz8/image/upload/v1734937330/Infant%20care%20Compass/ffktzdwhwkarwjhtvmnn.png" alt="Happy family" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Parents Are Saying
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              variants={slideUp}
            >
              <p className="text-gray-700 italic mb-4">
                "The vaccination tracker and consultation services saved us so much stress."
              </p>
              <h4 className="font-bold text-gray-800">- Alice W.</h4>
            </motion.div>

            <motion.div
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
              variants={slideUp}
            >
              <p className="text-gray-700 italic mb-4">
                "The articles are so helpful! I feel much more confident as a first-time parent."
              </p>
              <h4 className="font-bold text-gray-800">- John T.</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
