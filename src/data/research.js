// Research projects data for the Academic page
const data = [
  {
    title: 'Eureka for Manipulation: Real-World Dexterous Agent via Large-Scale Reinforcement Learning',
    image: '/images/academic/research/eureka_manip.png',
    date: 'June 2025 (Ongoing)',
    desc:
      'We investigate whether large language models and massive compute can ease the challenge of training RL-based manipulation agents for zero-shot sim-to-real transfer. By integrating LLMs into the control loop and leveraging hundreds of Nvidia’s latest-generation data-center GPUs, we explore a new frontier in scaling robotic generalization.',
  },
  {
    title: 'Synthetic Data Generation for Multi-Task Reinforcement Learning in Robotic Manipulation',
    image: '/images/academic/research/taskmixer.gif',
    date: 'January 2025 (Ongoing)',
    desc:
      'We introduce a conditional diffusion model that synthesizes full RL transitions for unseen tasks using compositional task indicators. Trained on a subset of expert data, it enables zero-shot policy learning with synthetic replay and solves novel task compositions through online RL by recombining subskills from seen tasks.',
  },

  {
    title: 'Intelligent Traffic Steering Through Orchestrated Open Radio Access Network',
    authors: 'Anh-Quan Pham, Minh-Ngoc Ngo, Anh-Nhat Duong, Manh-Duc Nguyen and Van-Dinh Nguyen',
    poster: 'https://zenodo.org/records/15107221',
    image: '/images/academic/research/oran.png',
    award: 'Best Research Poster Award, VinUniversity CECS Day 2023',
    desc:
      'We design an intelligent traffic steering system for Open RAN by jointly optimizing flow-split, congestion, and scheduling across layers. Our layered rAPP–xAPP solution enables adaptive, UE-aware control via network utility maximization under delay and stability constraints.',
  },
];

export default data;
