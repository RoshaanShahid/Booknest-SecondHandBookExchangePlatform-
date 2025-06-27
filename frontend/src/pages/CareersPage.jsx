import React from 'react';

const JobOpening = ({ title, location, type }) => (
  <div className="border border-border-color rounded-lg p-6 flex justify-between items-center transition-shadow hover:shadow-md">
    <div>
      <h3 className="text-xl font-bold text-primary">{title}</h3>
      <p className="text-text-light mt-1">{location} &middot; {type}</p>
    </div>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold py-2 px-5 rounded-lg hover:bg-opacity-90 transition-opacity">
      Apply Now
    </a>
  </div>
);

const CareersPage = () => {
  // Mock data for job openings
  const openings = [
    { title: 'Senior Frontend Engineer (React)', location: 'Remote', type: 'Full-time' },
    { title: 'Backend Engineer (Node.js)', location: 'Islamabad, PK', type: 'Full-time' },
    { title: 'Product Marketing Manager', location: 'Remote', type: 'Full-time' },
    { title: 'UI/UX Designer', location: 'Lahore, PK', type: 'Contract' },
  ];

  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 text-center">
            Join Our Team
          </h1>
          <p className="text-center text-text-light max-w-2xl mx-auto mb-12">
            At BookNest, we're building a passionate team dedicated to changing the way people discover and share books. If you love technology and literature, we'd love to hear from you.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-8">Current Openings</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <JobOpening key={index} title={job.title} location={job.location} type={job.type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
