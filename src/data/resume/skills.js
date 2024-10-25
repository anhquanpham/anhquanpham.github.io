const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  // {
  //   title: 'Bash',
  //   competency: 2,
  //   category: ['Tools', 'Languages'],
  // },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  // {
  //   title: 'Heroku',
  //   competency: 2,
  //   category: ['Web Development', 'Tools'],
  // },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development'],
  },
  // {
  //   title: 'ElasticSearch',
  //   competency: 2,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'PostgreSQL/SQLite3/SQL/Redshift',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  // {
  //   title: 'Redis',
  //   competency: 3,
  //   category: ['Web Development', 'Databases'],
  // },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Reinforcement Learning',
    competency: 5,
    category: ['AI/ML Experience', 'ML Engineering', 'Robotics', 'Python'],
  },
  {
    title: 'Computer Vision',
    competency: 5,
    category: ['AI/ML Experience', 'ML Engineering', 'Robotics', 'Python'],
  },
  {
    title: 'Natural Language Processing',
    competency: 5,
    category: ['AI/ML Experience', 'ML Engineering', 'Python'],
  },
  // {
  //   title: 'FastAPI',
  //   competency: 3,
  //   category: ['Web Development', 'Python'],
  // },
  {
    title: 'Git/Mercurial',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 5,
    category: ['Tools', 'Data Engineering'],
  },
  // {
  //   title: 'AWS Lambda',
  //   competency: 3,
  //   category: ['Tools', 'Web Development'],
  // },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  // {
  //   title: 'Numba',
  //   competency: 2,
  //   category: ['Data Science', 'Data Engineering', 'Python'],
  // },
  {
    title: 'Tensorflow + Keras',
    competency: 5,
    category: ['ML Engineering', 'Python', 'AI/ML Experience'],
  },
  {
    title: 'PyTorch',
    competency: 5,
    category: ['ML Engineering', 'Python', 'AI/ML Experience'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python', 'AI/ML Experience'],
  },
  {
    title: 'Assembly',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering', 'AI/ML Experience'],
  },
  // {
  //   title: 'Ruby',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  // {
  //   title: 'Ruby on Rails',
  //   competency: 3,
  //   category: ['Web Development', 'Languages'],
  // },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages', 'Robotics'],
  },
  // {
  //   title: 'Julia',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'MATLAB',
    competency: 5,
    category: ['Languages'],
  },
  // {
  //   title: 'R',
  //   competency: 2,
  //   category: ['Languages'],
  // },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'ROS',
    competency: 5,
    category: ['ML Engineering', 'Robotics', 'Tools'],
  },
  {
    title: 'Gazebo',
    competency: 5,
    category: ['ML Engineering', 'Robotics', 'Tools'],
  },
  {
    title: 'CUDA',
    competency: 5,
    category: ['Python', 'ML Engineering', 'Tools'],
  },
  // {
  //   title: 'Pylint',
  //   competency: 4,
  //   category: ['Data Engineering', 'Python'],
  // },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
