import React from 'react';

const teamMembers = [
  {
    imgSrc: '/1.jpg',
    name: 'Bhashkar Kumar',
    role: 'Lead Designer',
    skills: ['User Experience Design', 'Interface Design', 'Graphic Design'],
    funFact: 'Jane loves hiking and is an avid photographer in her spare time.',
    email: 'mailto:jane.doe@example.com',
    linkedIn: 'https://linkedin.com/in/janedoe',
    twitter: 'https://twitter.com/JaneDoeDesigns',
  },
  {
    imgSrc: '/3.jpg',
    name: 'Devang Bajpai',
    role: 'Software Engineer',
    skills: ['Frontend Development', 'Backend Development', 'API Integration'],
    funFact: 'John is a coffee enthusiast and enjoys coding in Python.',
    email: 'mailto:john.smith@example.com',
    linkedIn: 'https://linkedin.com/in/johnsmith',
  },
  {
    imgSrc: '/4.jpg',
    name: 'Himanshu Vats',
    role: 'Project Manager',
    skills: ['Agile Methodologies', 'Team Leadership', 'Client Relations'],
    funFact: 'Emily enjoys organizing community events on weekends.',
    email: 'mailto:emily.johnson@example.com',
    linkedIn: 'https://linkedin.com/in/emilyjohnson',
  },
  {
    imgSrc: '/2.jpg',
    name: 'Komal Bendresh',
    role: 'Data Scientist',
    skills: ['Machine Learning', 'Data Analysis', 'Predictive Modeling'],
    funFact: 'Michael plays the guitar and is part of a local band.',
    email: 'mailto:michael.brown@example.com',
    linkedIn: 'https://linkedin.com/in/michaelbrown',
  },
  {
    imgSrc: '5.jpeg',
    name: 'Bhasit Maheshwari',
    role: 'Marketing Specialist',
    skills: ['Content Marketing', 'SEO', 'Brand Strategy'],
    funFact: 'Sarah is passionate about travel and has visited 15 countries.',
    email: 'mailto:sarah.williams@example.com',
    linkedIn: 'https://linkedin.com/in/sarahwilliams',
  },
  {
    imgSrc: '/6.jpg',
    name: 'Brahmesh Kumar',
    role: 'ML Engineer',
    skills: ['Cloud Computing', 'CI/CD Pipelines', 'Infrastructure as Code'],
    funFact: 'David enjoys rock climbing and is a certified scuba diver.',
    email: 'mailto:david.lee@example.com',
    linkedIn: 'https://linkedin.com/in/davidlee',
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
    <img
      src={member.imgSrc}
      alt={member.name}
      className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-white shadow-lg object-cover transform transition-transform duration-300 hover:scale-105"
    />
    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
    <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">{member.role}</p>
    <ul className="flex justify-center flex-wrap mb-4">
      {member.skills.map((skill, index) => (
        <li
          key={index}
          className="bg-gray-200 rounded-full px-3 py-1 m-1 text-sm text-gray-600 hover:bg-gray-300 transition-colors"
        >
          {skill}
        </li>
      ))}
    </ul>
    <p className="italic text-gray-400 mb-4">{member.funFact}</p>
    <div className="mt-4 space-x-4">
      <a href={member.email} className="text-blue-500 hover:text-blue-600">
        Email
      </a>
      <a href={member.linkedIn} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600">
        LinkedIn
      </a>
      {member.twitter && (
        <a href={member.twitter} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-600">
          Twitter
        </a>
      )}
    </div>
  </div>
);

const AboutUs = () => (
  <div className="bg-gray-100 min-h-screen py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutUs;
