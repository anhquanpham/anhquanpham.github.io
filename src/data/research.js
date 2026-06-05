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
    title: 'ASSET2SIM: Automatically Improving Simulation Physics for Articulated Objects',
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
      'Zero-Shot VLA (Vision-Language-Action model) Adaptation with Retrieved Guidance',
    authors: [
      { name: 'Subin Kim', link: 'https://ksb21st.github.io/' },
      { name: 'Anh-Quan Pham' },
      { name: 'Dinesh Jayaraman', link: 'https://www.seas.upenn.edu/~dineshj/' },
    ],
    image: '/images/academic/research/rag-vla.gif',
    date: 'Under Review',
    desc:
      'We introduce Retrieval-Augmented Guidance (RAGu), a training-free framework for in-context learning in robot foundation models. Rather than adapting through gradient updates, RAGu enables pretrained Vision-Language-Action policies to acquire task-specific knowledge at inference time by retrieving relevant manipulation experiences from large, heterogeneous robot datasets. Retrieved trajectories are warped across differences in viewpoint, scene geometry, object configurations, and robot embodiments, then transformed into guidance signals that directly influence policy generation. This allows frozen VLAs to exploit demonstrations originating from entirely different domains, including real-to-sim, sim-to-real, and cross-embodiment transfer. By combining retrieval, geometric correspondence, and inference-time control, RAGu extends the effective experience of a robot far beyond its training distribution, enabling robust zero-shot in-context adaptation without modifying model parameters.',
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
    journal: 'https://sites.google.com/robotics.utias.utoronto.ca/icra26-frontiers-optimization/accepted-contributions',
    openreview: 'https://openreview.net/forum?id=7CiuqF99ue',
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
