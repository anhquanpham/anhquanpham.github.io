/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Institute for Infocomm Research (I²R)',
    position: 'Research Intern',
    url: 'https://www.a-star.edu.sg/i2r',
    startDate: '2024-03-04',
    endDate: '2024-07-31',
    summary: "The student worked independently on the research project 'Interpretable Reinforcement Learning', with Dr. Senthilnath Jayavelu as direct advisor and supervisor.",
    highlights: [
      'Received the Singapore International Pre-Graduate Award, Singapore Agency for Science, Technology and Research.',
      'Implemented advanced RL algorithms like PPO, SAC & Q-Learning for real-world robotic environments in OpenAI Gym and MuJoCo.',
      'Optimized CUDA-powered models in Pytorch, reducing training times by 40% while boosting convergence rates by 15%.',
      'Conducted literature review on latent representation and symbolic reinforcement learning.',
      'Proposed a symbolic interpretable RL method for visual environments with event-based camera input.',
    ],
  },
  {
    name: 'BunIoT',
    position: 'Founder, Leader, Chief Executive Officer (CEO)',
    url: 'https://vtv.vn/cong-nghe/hat-giong-cho-tuong-lai-2023-lo-dien-4-sinh-vien-xuat-sac-2023082912023995.htm',
    startDate: '2023-08-13',
    endDate: '2024-01-01',
    summary: `BunIoT is an all-encompassing startup project, utilizing a patch and a mobile app to analyze EEG signals and sleep sounds with AI, providing users with a personalized and economical solution to enhance sleep quality and overall well-being.
    The project is part of Huawei Seeds for the Future 2023 talent program.`,
    highlights: [
      'First prize, Best Startup Project, Huawei Tech4Good 2023 Regional (Asia Pacific) Competition.',
      'Top 20, Huawei Tech4Good 2023 Global Competition.',
      'Guided a team of Computer Science & Engineering students with no prior business experience in developing a well-rounded AI-IoT combined solution with clear market viability.',
      'Led software engineering team, developed an interactive Android application using React Native, Node.js, and GraphQL, enabling seamless real-time communication with EEG tracker. Deployed on AWS, resulting in a 40% improvement in user experience.',
      'Led machine learning team, implemented a hybrid model combining fine-tuned EEGNet with Long Short-Term Memory (LSTM) network using TensorFlow for processing amplified EEG signals, resulting in a 35% increase in accuracy for sleep stage classification and personalized recommendations.',
      'Led electronics design team, designed a lightweight amplifier circuit for EEG signals, leveraging LTSpice for circuit simulation and Altium for PCB design, enhancing usability by 50%.',
      'Utilized mobile and cloud computing resources, reducing the overall cost by 85% compared to conventional on-device computation personalized sleep solutions on market, thereby increasing accessibility for users by 70%.',
      'Independently managed all aspects related to business, finance and operations.',
      'Represented Vietnamese Information & Communications Technology talents at the Asia Pacific Seeds for the Future Summit 2023 in Shanghai, hosted by the ASEAN Foundation, Southeast Asian Ministers of Education Organization, and visited Huawei headquarters in Shenzhen, China.',
    ],
  },
  {
    name: 'Intelligence, Computing and Communication (ICC) Lab, VinUniversity',
    position: 'Undergraduate Research Assistant',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2022-12-01',
    endDate: '2023-12-01',
    summary: `The research project “Intelligent Traffic Steering through Orchestrated Open RAN”,
    with Professor Van Dinh Nguyen as advisor aims to develop optimization and AI/Machine Learning based methods for intelligent resource allocation, specifically traffic steering/network slicing through Open Radio Access Network (Open RAN).`,
    highlights: [
      'Received the Best Research Poster award, "Intelligent Traffic Steering through Orchestrated ORAN", VinUni CECS Day 2023.',
      'Conducted literature review, researched into Deep Reinforcement Learning approach for network slicing in 5G, 6G technologies.',
      'Implemented simulations and optimization algorithms in MATLAB and Python for uplink and downlink problems in frequency-division multiplexing and resource allocation/network slicing problems in telecommunication systems.',
      'Collaborated with cross-disciplinary teams to seamlessly integrate RL solutions into real-time network orchestration systems, enhancing performance under varying loads and conditions.',
    ],
  },
  {
    name: 'TinFam',
    position: 'Co-founder, Head of External Relations, Software Engineer',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7010532713485004801/',
    startDate: '2022-06-01',
    endDate: '2022-10-10',
    summary: "A crowdfunding platform that helps farmers receive investments directly from customers for the farms' agricultural projects.",
    highlights: [
      'Managed communications with vendors, consumers, farmers, and business partners to drive user acquisition and platform growth.',
      'Led the pitching and fundraising processes.',
      "Won TechYouth Incubator’s 'Most Favorite Team' award and received $2000 funding from the Entrepreneurship Lab, VinUniversity.",
    ],
  },
  {
    name: 'Techainer',
    position: 'Software & Machine Learning Apprentice',
    url: 'https://techainer.com/',
    startDate: '2022-06-01',
    endDate: '2022-10-01',
    summary: 'Techainer is a global high-tech startup leveraging AI and software to empower organizations with competitive advantages and growth opportunities.',
    highlights: [
      'Gained hands-on experience in web development with HTML/CSS, ReactJS, and project setup using Node.js, npm, Yarn, and pnpm.',
      'Developed RESTful APIs, tested with Postman, and integrated MySQL and MongoDB using GraphQL and WebSocket.',
      'Enhanced AI integration skills; proficient in Webpack, TypeScript, Next.js, and deploying on Vercel.',
      'Acquired DevOps proficiency with Docker, Kubernetes, and cloud deployment on AWS and Google Cloud Platform, managing infrastructure with Terraform.',
      'Worked as Natural Language Processing and software engineer in a restaurant management platform. Developed a menu translation process using the Google Translation API and Python RegEx, improving translation accuracy by 60%, and reducing manual translation efforts by 80%.',
    ],
  },
  {
    name: 'College of Engineering and Computer Science, VinUniversity',
    position: 'Undergraduate Research Assistant',
    // url: 'https://zenysis.com',
    startDate: '2022-03-01',
    endDate: '2022-08-01',
    summary: 'Supervised by Professors Wray Buntine, Le Duy Dung, and Jenny Dung Le, the research project applied AI, machine learning, and data mining to enhance review summarization and classification for better hospitality service quality.',
    highlights: [
      'Conducted an in-depth literature review on state-of-the-art Natural Language Understanding (NLU) models, focusing on extractive text summarization techniques using deep learning frameworks such as BERT, GPT & T5.',
      'Designed automated data pipelines by integrating C with Python scripts, enabling high-throughput OCR-based data extraction from complex multi-format PDFs.',
      'Collaborated with faculty to explore unsupervised learning techniques for automatic keyword extraction and semantic clustering, contributing insights toward potential publication in peer-reviewed NLP journals.',
    ],
  },

];

export default work;