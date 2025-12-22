import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Anh-Quan (Bill) Pham's personal website. MS Robotics at the University of Pennsylvania (UPenn)."
      + 'Email: phamanhquanbill@gmail.com'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Anh-Quan (Bill) Pham</Link>
          </h2>
          <p>
            You can just call me Bill or Quan.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">CV</Link>, <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        I am a second-year master&apos;s student in Robotics at the University of
        Pennsylvania, where
        my research centers on reinforcement learning (RL) as the foundation of Physical AI.
        I use RL to study how agents explore, adapt, and continuously
        improve their actions in the real world.
        My goal is to move beyond reward maximization and benchmarks, and build agents that learn
        and explore efficiently in the wild, generalize across tasks, and act in
        ways people can understand and trust.
      </p>
      <p>
        At Penn, I work on several directions that reflect this vision:
      </p>
      <ul>
        <li>
          Under the guidance of Professors <a href="https://www.seas.upenn.edu/~eeaton/" target="_blank" rel="noopener noreferrer">Eric Eaton</a>, <a href="https://jorge-a-mendez.github.io/" target="_blank" rel="noopener noreferrer">Jorge Méndez Méndez</a>, and <a href="https://complexsystemsupenn.com/personal" target="_blank" rel="noopener noreferrer">Dani S. Bassett</a>, I study compositional zero-shot data generation, where agents can tackle new tasks by recombining prior knowledge.
        </li>
        <li>
          Supervised by Professors <a href="https://www.seas.upenn.edu/~dineshj/" target="_blank" rel="noopener noreferrer">Dinesh Jayaraman</a> and <a href="https://obastani.github.io/" target="_blank" rel="noopener noreferrer">Osbert Bastani</a>, I develop LLM-guided reward design, conduct large-scale RL training for dexterous tool use, and work on articulated simulation alignment with real-world physics.
        </li>
        <li>
          Working under Professor <a href="https://www.cis.upenn.edu/~kostas/" target="_blank" rel="noopener noreferrer">Kostas Daniilidis</a>, I study uncertainty-driven residual reinforcement learning to efficiently correct pretrained manipulation policies.
        </li>
        <li>
          I also learn a lot from the mentorship of <a href="https://marcelhussing.github.io/" target="_blank" rel="noopener noreferrer">Marcel Hussing</a>, who focuses on stable and reliable RL, and <a href="https://junyaoshi.github.io/" target="_blank" rel="noopener noreferrer">Junyao Shi</a>, who brings internet-scale data and foundation models into robotics. Their guidance reflects my vision of reliable and scalable Reinforcement Learning as the driver of continuous improvement and sim-to-real transfer, supported by developments in foundation models to leverage internet data for high-level world understanding.
        </li>
      </ul>
      <p>
        Before Penn, I studied interpretable reinforcement learning at A*STAR Singapore under <a href="https://sites.google.com/site/jsenthilnath/" target="_blank" rel="noopener noreferrer">Dr. Senthilnath Jayavelu</a>, focusing on symbolic policies and latent representations to improve transparency in decision-making. As an undergraduate at <a href="https://vinuni.edu.vn/" target="_blank" rel="noopener noreferrer">VinUniversity</a> with Professor <a href="https://vinuni.edu.vn/people/nguyen-van-dinh-phd/" target="_blank" rel="noopener noreferrer">Van-Dinh Nguyen</a>, I applied RL to next-generation telecommunication networks, exploring resource allocation and network slicing, and completed my thesis on adaptive robotic parameter optimization using RL. As an engineering lead intern at Huawei Vietnam, I applied machine learning to IoT systems, leading a project on sleep-stage classification and representing Vietnam at the Asia-Pacific Seeds for the Future Summit.
      </p>
      <section>
        <h3>News & Updates</h3>
        <p>
          <strong>Dec 2025:</strong> Our new paper,{' '}
          <a href="https://arxiv.org/abs/2512.10891" target="_blank" rel="noopener noreferrer">
            Iterative Compositional Data Generation for Robot Control
          </a>
          , is out! We are excited to open-source the code and share the work. Try it out on{' '}
          <a href="https://github.com/anhquanpham/iterative-comp-rl-generation" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' '}and join the discussion on{' '}
          <a href="https://x.com/_anhquanpham/status/2002083468633911806?s=20" target="_blank" rel="noopener noreferrer">
            Twitter/X
          </a>
          {' '}and{' '}
          <a href="https://bsky.app/profile/anhquanpham.bsky.social/post/3maeb7a7y5s2f" target="_blank" rel="noopener noreferrer">
            Bluesky
          </a>
          .
        </p>
        <p>
          <strong>May 2025:</strong> I will serve as President of the Penn Robotics
          Entrepreneurs Club (PREC) during the 2025–2026 year!
        </p>
        <p>
          <strong>Jan 2025:</strong> Excited to share that I&apos;ve started as a Graduate
          Research Assistant
          at the GRASP Lab,
          University of Pennsylvania, working on various aspects of Reinforcement
          Learning for Robotics!
        </p>
        <p>
          <strong>Jan 2025:</strong> I will be working as a TA for CIS 5800 Machine
          Perception (Spring 2025) after earning an A+ in Fall 2024!
        </p>
      </section>
    </article>
  </Main>
);

export default Index;
