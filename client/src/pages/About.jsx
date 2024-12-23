import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            At InfantCareCompass, we are committed to supporting parents and
            caregivers by offering comprehensive child care services, including
            24/7 consultations, insightful news, and educational resources.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {/* 24/7 Consultation */}
          <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">24/7 Consultation</h2>
            <p>
              We connect parents with pediatric experts for one-on-one virtual
              consultations, available around the clock. This ensures access to
              professional advice at any time, making it easier to handle both
              emergencies and routine health concerns from the comfort of your
              home.
            </p>
          </div>

          {/* Childcare Education */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Childcare Education</h2>
            <p>
              Our platform offers a library of expertly curated articles and
              educational content, guiding parents at every stage of their
              child’s development. From nutrition and safety to growth tips,
              we ensure you have the knowledge needed for excellent child care.
            </p>
          </div>

          {/* News Section */}
          <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">News and Updates</h2>
            <p>
              Stay informed with our regularly updated news section, featuring
              the latest developments in pediatric health, safety, and
              childcare practices. We make sure you’re equipped with accurate
              and timely information to make the best decisions for your
              family.
            </p>
          </div>

          {/* AI-Driven First Aid */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">AI-Driven First Aid</h2>
            <p>
              Our intelligent AI-powered first aid guide provides parents with
              step-by-step instructions for handling common infant health
              issues. Whether it’s a fever or minor injury, you can trust our
              tool to guide you until professional help is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;