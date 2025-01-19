import React from "react";

const Services = () => {
  const services = [
    {
      title: "Tax Planning and Compliance",
      description:
        "Expert tax planning and compliance services to ensure you stay ahead of deadlines and minimize liabilities.",
      icon: "📊",
    },
    {
      title: "Auditing and Assurance",
      description:
        "Comprehensive auditing services to provide you with confidence in your financial reporting.",
      icon: "🔍",
    },
    {
      title: "Business Advisory",
      description:
        "Tailored business advisory services to help you make informed decisions and grow your business.",
      icon: "💼",
    },
    {
      title: "Accounting Services",
      description:
        "Reliable and accurate accounting services to keep your financial records in order.",
      icon: "📒",
    },
    {
      title: "Payroll Management",
      description:
        "Efficient payroll solutions to ensure your employees are paid accurately and on time.",
      icon: "🗂️",
    },
    {
      title: "Financial Forecasting",
      description:
        "Strategic financial forecasting to help you plan for a sustainable future.",
      icon: "📈",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-800">Our Services</h1>
          <p className="mt-4 text-lg text-gray-600">
            Professional Chartered Accountant Services to Meet Your Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow shadow-purple-500"
            >
              <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
