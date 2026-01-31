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
    date: 'Under Review',
    code: 'https://github.com/anhquanpham/iterative-comp-rl-generation',
    x: 'https://x.com/_anhquanpham/status/2002083468633911806?s=20',
    bluesky: 'https://bsky.app/profile/anhquanpham.bsky.social/post/3maeb7a7y5s2f',
    image: '/images/academic/research/iterative_generation.gif',
    desc:
      'We leverage compositional structure in robotic manipulation to iteratively generate expert data for unseen task combinations via conditional diffusion. A semantic compositional diffusion transformer factorizes task components and self-improves through offline RL validation, enabling strong zero-shot data generation to solve new tasks without collecting new real-world data. ',
  },
  {
    title: 'Automatic Generation of Interaction-Ready Articulated Objects',
    authors: [
      { name: 'Sagnik Anupam', link: 'https://sagnikanupam.com', equalContribution: true },
      { name: 'Luyang Hu', link: 'https://huluwulu.dev', equalContribution: true },
      { name: 'Anh-Quan Pham', equalContribution: true },
      { name: 'Kaitian Chao', link: 'https://beethoven-q.github.io/kaitianchao/' },
      { name: 'George Gao', link: 'https://ggao22.github.io/' },
      { name: 'Tianyou Wang', link: 'https://www.linkedin.com/in/tianyou-wang-5b7ab028a/' },
      { name: 'Junyao Shi', link: 'https://junyaoshi.github.io/' },
      { name: 'Osbert Bastani', link: 'https://obastani.github.io/', coAdvisor: true },
      { name: 'Dinesh Jayaraman', link: 'https://www.seas.upenn.edu/~dineshj/', coAdvisor: true },
    ],
    authorNote: '§ Equal contribution (sorted in alphabetical order by last name). † Co-advisors.',
    image: '/images/academic/research/eureka_manip.png',
    date: 'Under Review',
    desc:
      'We present a VLM–guided method that converts kinematic articulated 3D objects into physically realistic models for robot learning in under 2 minutes. The method refines physical properties using multi-view visual inputs and simulator-in-the-loop feedback, and evaluates interaction-readiness through simulation stability and downstream performance with independently trained vision-language-action (VLA) policies, enabling scalable, low-effort asset generation.',
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
