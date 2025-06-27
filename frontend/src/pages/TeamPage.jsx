import React from 'react';

const TeamMemberCard = ({ name, role, imageUrl, bio }) => (
  <div className="text-center flex flex-col items-center">
    <div className="relative w-40 h-40 mx-auto mb-4">
      <img
        className="rounded-full object-cover w-full h-full shadow-lg"
        src={imageUrl}
        alt={`Profile of ${name}`}
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/160x160/E5E7EB/6B7281?text=Photo'; }}
      />
    </div>
    <h3 className="text-xl font-bold text-primary">{name}</h3>
    <p className="font-semibold text-text-dark">{role}</p>
    <p className="text-text-light mt-2 text-sm max-w-xs mx-auto">{bio}</p>
  </div>
);

const TeamPage = () => {
  // Mock data for the team, now consolidated to four members.
  const teamMembers = [
    {
      name: 'Roshaan Shahid',
      role: 'Founder & CEO',
      imageUrl: 'https://placehold.co/160x160/091e65/FFFFFF?text=RS',
      bio: 'The visionary leader behind BookNest, passionate about connecting readers through technology.'
    },
    {
      name: 'Muqadas Lateef',
      role: 'Co-Founder & CTO',
      imageUrl: 'https://placehold.co/160x160/091e65/FFFFFF?text=ML',
      bio: 'The technical architect building the foundation for our platform.'
    },
    {
      name: 'Ayesha Khan',
      role: 'Head of Engineering',
      imageUrl: 'https://placehold.co/160x160/091e65/FFFFFF?text=AK',
      bio: 'Leading our technical team to build a seamless and robust platform for book lovers.'
    },
    {
      name: 'Bilal Ahmed',
      role: 'Lead Product Designer',
      imageUrl: 'https://placehold.co/160x160/091e65/FFFFFF?text=BA',
      bio: 'Crafting intuitive and beautiful user experiences that make sharing books a delight.'
    },
  ];

  return (
    <div className="bg-light-bg py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Meet the Minds Behind BookNest
          </h1>
          <p className="text-lg text-text-light max-w-3xl mx-auto">
            We are a dedicated group of developers, designers, and book enthusiasts united by a single mission: to make literature more accessible and sustainable.
          </p>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                bio={member.bio}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeamPage;
