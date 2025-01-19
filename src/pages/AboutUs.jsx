import React from "react";

const AboutUs = () => {
  return (
    <div className=" bg-gray-100 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800">About Us</h1>
          <p className="mt-4 text-lg  text-gray-600">
            Trusted Chartered Accountants Dedicated to Your Success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="src\assets\about.webp"
              alt="Office"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are a team of experienced Chartered Accountants dedicated to
              providing exceptional financial and business advisory services.
              Our mission is to empower businesses and individuals with the
              financial insights they need to thrive.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mt-8 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted and reliable accounting firm, delivering
              excellence in service and empowering our clients to achieve their
              financial goals.
            </p>

            <h2 className="text-2xl font-semibold text-purple-800 mt-8 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 text-gray-600 leading-relaxed">
              <li>Over a decade of industry experience</li>
              <li>Client-centric approach with tailored solutions</li>
              <li>Transparent and ethical practices</li>
              <li>Cutting-edge tools and technology</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array(4)
              .fill(null)
              .map((_, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={"https://randomuser.me/api/portraits/men/71.jpg"}
                    alt={`Team Member ${idx + 1}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">
                    Team Member {idx + 1}
                  </h3>
                  <p className="text-gray-600">Chartered Accountant</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
