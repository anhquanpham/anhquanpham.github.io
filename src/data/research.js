// Research projects data for the Academic page
const data = [
  {
    title: 'Iterative Compositional Data Generation for Robot Control',
    authors: [
      { name: 'Anh-Quan Pham' },
      { name: 'Marcel Hussing', link: 'https://marcelhussing.github.io/' },
      { name: 'Shubhankar P. Patankar', link: 'https://sppatankar.com/' },
      { name: 'Dani S. Bassett', link: 'https://complexsystemsupenn.com/personal' },
      { name: 'Jorge Mendez-Mendez', link: 'https://jorge-a-mendez.github.io/' },
      { name: 'Eric Eaton', link: 'https://www.seas.upenn.edu/~eeaton/' },
    ],
    arxiv: 'https://doi.org/10.48550/arXiv.2512.10891',
    date: 'Under rerview',
    code: 'https://github.com/anhquanpham/iterative-comp-rl-generation',
    x: 'https://x.com/_anhquanpham/status/2002083468633911806?s=20',
    bluesky: 'https://bsky.app/profile/anhquanpham.bsky.social/post/3maeb7a7y5s2f',
    image: '/images/academic/research/iterative_generation.gif',
    // award: 'Best Research Poster Award, VinUniversity CECS Day 2023',
    desc:
      'We leverage compositional structure in robotic manipulation to iteratively generate expert data for unseen task combinations via conditional diffusion. A semantic compositional diffusion transformer factorizes task components and self-improves through offline RL validation, enabling strong zero-shot data generation to solve new tasks without collecting new real-world data. ',
  },
  {
    title: 'EurekaWorld: Automatically Created Reinforcement Learning–Ready Digital Twin via Foundation Models',
    image: '/images/academic/research/eureka_manip.png',
    date: 'Upcoming submission to Robotics: Science and Systems (RSS)',
    desc:
      'We introduce a system for automatically constructing reinforcement-learning–ready environments from high-level human specifications. By combining a scalable manipulation environment backbone, LLM-generated rewards with evolutionary refinement, and a VLM-based articulated object refinement pipeline, EurekaWorld enables large-scale policy training with realistic physics and substantially reduced manual environment and reward engineering.',
  },
  {
    title: 'SBAMP: Sampling Based Adaptive Motion Planning',
    authors: [
      { name: 'Anh-Quan Pham', link: 'https://anhquanpham.github.io/' },
      { name: 'Kabir Ram Puri', link: 'https://www.linkedin.com/in/kabir-puri-2633281b1/' },
      { name: 'Shreyas Raorane', link: 'https://www.linkedin.com/in/shreyas-raorane/' },
    ],
    date: 'arXiV 2025',
    arxiv: 'https://doi.org/10.48550/arXiv.2511.12022',
    code: 'https://github.com/anhquanpham/SBAMP',
    video: 'https://www.youtube.com/watch?v=mtq3qeJFjX0',
    image: '/images/academic/research/SBAMP.gif',
    // award: 'Best Research Poster Award, VinUniversity CECS Day 2023',
    desc: 'SBAMP combines RRT* for global path planning with an online SEDS-based controller for real-time local trajectory adaptation. The method avoids any offline training data by fitting stable dynamical systems on-the-fly and ensures global Lyapunov stability during disturbances and replanning.',
  },

  {
    title: 'Intelligent Traffic Steering Through Orchestrated Open Radio Access Network',
    authors: [
      { name: 'Anh-Quan Pham', link: 'https://anhquanpham.github.io/' },
      { name: 'Ngoc Ngo' },
      { name: 'Nhat Duong' },
      { name: 'Duc Nguyen' },
      { name: 'Van-Dinh Nguyen', link: 'https://www.tcd.ie/scss/people/academic-staff/nguyenva/' },
    ],
    poster: 'https://zenodo.org/records/15107221',
    image: '/images/academic/research/oran.png',
    award: 'Best Research Poster Award, VinUniversity CECS Day 2023',
    desc: 'We design an intelligent traffic steering system for Open RAN by jointly optimizing flow-split, congestion, and scheduling across layers. Our layered rAPP–xAPP solution enables adaptive, UE-aware control via network utility maximization under delay and stability constraints.',
  },
];

export default data;
