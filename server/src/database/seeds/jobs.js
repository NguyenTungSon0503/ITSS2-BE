const seedJobs = async (prisma) => {
  await prisma.job.upsert({
    where: {
      id: 1,
    },
    create: {
      title: 'Frontend Developer',
      description:
        '<p>Are you passionate about creating responsive and intuitive user interfaces? Join our team as a Frontend Developer and contribute to innovative web applications!</p>',
      requirements:
        '<ul><li>Proficiency in HTML, CSS, and JavaScript</li><li>Experience with frontend frameworks like React or Vue.js</li><li>Understanding of responsive design principles</li></ul>',
      advantages:
        '<p>We offer competitive salaries, flexible work hours, and opportunities for professional growth and development.</p>',
      company_id: 1,
      salary_min: 60000,
      salary_max: 80000,
      years_of_experience: 2,
      job_location: 'Konya, Turkey',
      thumbnail_url:
        'https://example.com/images/frontend_developer_thumbnail.jpg',
      majors: 'Computer Science, Web Development',
      is_domestic: true,
    },
    update: {},
  });
  await prisma.job.upsert({
    where: {
      id: 2,
    },
    create: {
      title: 'Data Scientist',
      description:
        '<p>Do you enjoy analyzing complex datasets and extracting valuable insights? Join our team as a Data Scientist and work on cutting-edge machine learning projects!</p>',
      requirements:
        '<ul><li>Strong programming skills in Python or R</li><li>Experience with data visualization tools like Tableau or Matplotlib</li><li>Background in statistics and machine learning algorithms</li></ul>',
      advantages:
        '<p>We provide opportunities for continuous learning, collaboration with industry experts, and a supportive work environment.</p>',
      company_id: 2,
      salary_min: 80000,
      salary_max: 100000,
      years_of_experience: 3,
      job_location: 'New York City, USA',
      thumbnail_url: 'https://example.com/images/data_scientist_thumbnail.jpg',
      majors: 'Statistics, Computer Science, Data Science',
      is_domestic: false,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 3,
    },
    create: {
      title: 'Marketing Manager',
      description:
        '<p>Are you skilled in creating and implementing marketing strategies? Join our team as a Marketing Manager and lead our marketing campaigns!</p>',
      requirements:
        '<ul><li>Proven experience in marketing or related field</li><li>Strong communication and leadership skills</li><li>Ability to analyze market trends and data</li></ul>',
      advantages:
        '<p>We offer competitive compensation, health benefits, and opportunities for career advancement.</p>',
      company_id: 3,
      salary_min: 70000,
      salary_max: 90000,
      years_of_experience: 5,
      job_location: 'Los Angeles, USA',
      thumbnail_url:
        'https://example.com/images/marketing_manager_thumbnail.jpg',
      majors: 'Marketing, Business Administration',
      is_domestic: true,
    },
    update: {},
  });
  await prisma.job.upsert({
    where: {
      id: 4,
    },
    create: {
      title: 'Software Engineer',
      description:
        '<p>Do you love coding and building scalable software solutions? Join our team as a Software Engineer and work on innovative projects!</p>',
      requirements:
        '<ul><li>Proficiency in programming languages like Java, Python, or C++</li><li>Experience with software development methodologies</li><li>Strong problem-solving skills</li></ul>',
      advantages:
        '<p>We provide a collaborative work environment, professional growth opportunities, and competitive salaries.</p>',
      company_id: 1,
      salary_min: 75000,
      salary_max: 95000,
      years_of_experience: 4,
      job_location: 'San Francisco, USA',
      thumbnail_url:
        'https://example.com/images/software_engineer_thumbnail.jpg',
      majors: 'Computer Science, Software Engineering',
      is_domestic: true,
    },
    update: {},
  });

  await prisma.job.upsert({
    where: {
      id: 5,
    },
    create: {
      title: 'Graphic Designer',
      description:
        '<p>Are you passionate about visual storytelling and design? Join our team as a Graphic Designer and create compelling visual content!</p>',
      requirements:
        '<ul><li>Proficiency in design software like Adobe Photoshop, Illustrator</li><li>Strong portfolio showcasing design skills</li><li>Understanding of typography, color theory, and layout design</li></ul>',
      advantages:
        '<p>We offer a creative work environment, opportunities to work on diverse projects, and flexibility.</p>',
      company_id: 3,
      salary_min: 55000,
      salary_max: 70000,
      years_of_experience: 3,
      job_location: 'London, UK',
      thumbnail_url:
        'https://example.com/images/graphic_designer_thumbnail.jpg',
      majors: 'Graphic Design, Visual Arts',
      is_domestic: false,
    },
    update: {},
  });
};
export default seedJobs;
