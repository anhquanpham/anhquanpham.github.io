// Research projects data for the Academic page
const data = [
  {
    featured: true,
    title: 'Iterative Compositional Data Generation for Robot Control',
    authors: [
      { name: 'Anh-Quan Pham' },
      { name: 'Marcel Hussing', link: 'https://marcelhussing.github.io/' },
      { name: 'Shubhankar P. Patankar', link: 'https://sppatankar.com/' },
      { name: 'Dani S. Bassett', link: 'https://complexsystemsupenn.com/personal' },
      { name: 'Jorge Mendez\u2011Mendez', link: 'https://jorge-a-mendez.github.io/' },
      { name: 'Eric Eaton', link: 'https://www.seas.upenn.edu/~eeaton/' },
    ],
    arxiv: 'https://doi.org/10.48550/arXiv.2512.10891',
    website: 'https://anhquanpham.github.io/iterative-comp-rl-generation/',
    journal: 'https://jmlr.org/tmlr/papers/',
    pdf: 'https://arxiv.org/pdf/2512.10891',
    date: 'Transactions on Machine Learning Research (TMLR), 2026',
    code: 'https://github.com/anhquanpham/iterative-comp-rl-generation',
    openreview: 'https://openreview.net/forum?id=cASorO1kiy',
    x: 'https://x.com/_anhquanpham/status/2002083468633911806?s=20',
    bluesky: 'https://bsky.app/profile/anhquanpham.bsky.social/post/3maeb7a7y5s2f',
    image: '/images/academic/research/iterative_generation.gif',
    desc:
      'We leverage compositional structure in robotic manipulation to iteratively generate expert data for unseen task combinations via conditional diffusion. A semantic compositional diffusion transformer factorizes task components and self-improves through offline RL validation, enabling strong zero-shot data generation to solve new tasks without collecting new real data. ',
  },
  {
    featured: true,
    title: 'Closing the Asset-to-Simulation Gap for Articulated Objects via Multi-Modal Physical Refinement',
    authors: [
      { name: 'Anh-Quan Pham', equalContribution: true },
      { name: 'Sagnik Anupam', link: 'https://sagnikanupam.com', equalContribution: true },
      { name: 'Luyang Hu', link: 'https://huluwulu.dev', equalContribution: true },
      { name: 'Kaitian Chao', link: 'https://beethoven-q.github.io/kaitianchao/' },
      { name: 'George Gao', link: 'https://ggao22.github.io/' },
      { name: 'Tianyou Wang', link: 'https://www.linkedin.com/in/tianyou-wang-5b7ab028a/' },
      { name: 'Junyao Shi', link: 'https://junyaoshi.github.io/' },
      { name: 'Osbert Bastani', link: 'https://obastani.github.io/', coAdvisor: true },
      { name: 'Dinesh Jayaraman', link: 'https://www.seas.upenn.edu/~dineshj/', coAdvisor: true },
    ],
    authorNote: '§ Sorted in alphabetical order by last name; modified for clarity.',
    image: '/images/academic/research/evogen.gif',
    date: 'Under Review',
    desc:
      'We present a lightweight, VLM-guided method that converts kinematic articulated 3D objects into physically realistic models for robot learning in under one minute, and can be run in parallel to refine thousands of assets at the same time. The method refines physical properties using multi-view visual inputs and simulator-in-the-loop feedback, and evaluates interaction-readiness through simulation stability, human-object interaction (teleoperation), visual physics realism, and downstream performance with independently trained vision-language-action (VLA) policies, enabling scalable, low-effort asset generation.',
  },
  {
    featured: true,
    title:
      'Zero-Shot In-Context Learning for Vision-Language-Action (VLA) Models',
    authors: [{ name: 'Anh-Quan Pham', equalContribution: true }],
    authorNote:
      '§ With additional co-authors (names forthcoming).',
    image: '/images/academic/research/rag-vla.gif',
    date: 'Upcoming submission, May 2026',
    desc:
      'We introduce a retrieval-augmented, training-free framework that enables in-context learning for general-purpose robot manipulation, addressing the lack of test-time adaptation mechanisms from minimal context in pretrained vision-language-action (VLA) policies. Our method queries semantically relevant trajectories from large, heterogeneous datasets, warps these as "in-context information" to the target domain, and uses them to guide action generation during policy execution. This enables zero-shot adaptation to novel tasks and out-of-distribution configurations without retraining, leveraging motor primitives already encoded in pretrained policies.',
  },
  {
    featured: true,
    title: 'SBAMP: Sampling Based Adaptive Motion Planning',
    authors: [
      { name: 'Shreyas Raorane', link: 'https://www.linkedin.com/in/shreyas-raorane/', equalContribution: true },
      { name: 'Kabir Ram Puri', link: 'https://www.linkedin.com/in/kabir-puri-2633281b1/', equalContribution: true },
      { name: 'Anh-Quan Pham', projectLead: true },
    ],
    date: 'Workshop on Frontiers of Optimization for Robotics, International Conference on Robotics and Automation (ICRA), 2026',
    arxiv: 'https://doi.org/10.48550/arXiv.2511.12022',
    code: 'https://github.com/anhquanpham/SBAMP',
    video: 'https://www.youtube.com/watch?v=mtq3qeJFjX0',
    image: '/images/academic/research/SBAMP.gif',
    pdf: 'https://arxiv.org/pdf/2511.12022',
    desc: 'SBAMP combines RRT* for global path planning with an online SEDS-based controller for real-time local trajectory adaptation. The method avoids any offline training data by fitting stable dynamical systems on-the-fly and ensures global Lyapunov stability during disturbances and replanning.',
  },

  {
    title: 'Intelligent Traffic Steering Through Orchestrated Open Radio Access Network',
    authors: [
      { name: 'Anh-Quan Pham' },
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
