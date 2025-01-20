import React from 'react';
import 'katex/dist/katex.min.css';
import Main from '../../layouts/Main';

const TransformerDiffusionImmitation = () => (
  <Main title="Transformer-Based Visuomotor Diffusion Imitation Learning for Robot Manipulation" description="Detailed description of the Transformer-Based Visuomotor Diffusion Imitation Learning for Robot Manipulation project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>Transformer-Based Visuomotor Diffusion Imitation Learning for Robot Manipulation
          </h2>
          <p>December 2024</p>
          <a href="https://github.com/anhquanpham/transformer-diffusion-policy-pushT" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              style={{
                marginTop: '0px',
                padding: '10px 10px',
                backgroundColor: '#001F3F',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center',
                fontSize: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Centers text vertically
              }}
            >
              View on GitHub
            </button>
          </a>
        </div>
      </header>
      <div className="video-container" id="video-start">
        <iframe
          src="https://www.youtube.com/embed/kwnl0yOhQvc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p />
      <p />
      <p />
      <section>
        <h3>Abstract</h3>
        <p>
          This project focuses on improving diffusion policy frameworks for robotic
          manipulation within
          the Push-T environment. The original diffusion policy face challenges in
          capturing longer
          dependencies. To overcome these limitations, we introduce transformer-based
          observation and action
          encoders, designed to effectively model both short and long-term temporal
          relationships
          across
          the whole trajectory. This approach demonstrates stable training
          convergence across
          100 epochs,
          achieving higher task success rates and reducing the steps needed to
          complete tasks. The enhanced
          framework is validated using a custom PyMunk-based simulation
          environment, highlighting its ability
          to learn and perform complex tasks with improved stability and
          adaptability. These advancements hold
          promising potential for real-world applications in automation
          and assistive technologies.
        </p>
      </section>
      <section>
        <h3>Introduction</h3>
        <p>
          Robotic manipulation tasks require handling complex action spaces,
          generalizing across diverse scenarios and long trajectories, and
          maintaining temporal consistency. Traditional frameworks often fall
          short in addressing these challenges, limiting their applicability
          in real-world scenarios. Advancing robotics in fields like automation
          and assistive technologies requires overcoming these limitations.
          This project enhances the Diffusion Policy framework with Transformer-based
          observation and action encoders, enabling the robot to learn and execute
          complex tasks with improved stability and adaptability,
          making them more practical for real-world applications.
        </p>
        <p />
        <p>
          The key contributions are as follows:
        </p>
        <ul>
          <li>
            <strong>Scalable Architectural Improvements:
            </strong>
            Introduced
            transformer-based observation and action encoders to capture both
            short and long-term dependencies, effectively handling complex
            manipulation scenarios.
          </li>
          <li><strong>Consistent Training Convergence:</strong> Achieved smooth
            and stable training across 100 epochs, with steadily decreasing
            training losses, showcasing the robustness of the improved framework.
          </li>
          <li><strong>Improved Task Success in PushTEnv:</strong> Enhanced
            task performance by reducing the number of steps needed for completion
            and achieving higher task success rates in the custom simulation environment.
          </li>
          <li><strong>Optimized Data Pipelines:</strong> Developed robust data normalization,
            sequence sampling, and padding techniques to ensure compatibility with transformer
            architectures and support stable training.
          </li>
          <li><strong>Enhanced Simulation Environment:</strong> Upgraded the PushTEnv
            environment with higher render resolution, offering an 11x improvement in visual
            clarity to facilitate better result observation.
          </li>
        </ul>
      </section>
      <section>
        <h3>Background</h3>
        <p>
          Chi et al. (2023) <a href="#ref1">[1]</a> introduced the Diffusion Policy framework,
          which extends Denoising Diffusion Probabilistic Models (DDPMs)
          to visuomotor policy learning. This framework models actions
          as sequential outputs, refining noisy samples into task-specific
          actions using a learned score function. While innovative, the
          original framework has limitations, including difficulty modeling
          long-term dependencies across sequential observations and actions.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/old.png`} alt="Original Diffusion Policy architecture" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 1: Original Diffusion Policy architecture
          </figcaption>
        </div>
        <p />
      </section>
      <section>
        <h3>Methodology</h3>
        <p>
          To address the above challenges, this project enhances the Diffusion
          Policy framework by integrating transformer-based observation and
          action encoders. The self-attention mechanism of transformers
          enables the modeling of both short- and long-term temporal
          dependencies, balancing temporal consistency (coherent actions)
          and responsiveness (quick adaptation to observations).
          Additionally, the enhanced architecture includes a custom denoising
          process that integrates outputs from the encoders for robust and
          consistent action generation.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/new.png`} alt="Transformer Diffusion Policy architecture" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 2: Enhanced Diffusion Policy architecture: Observation Encoder,
            Action Encoder, and Central Denoising Process
          </figcaption>
        </div>
        <p />
        <h4>Observation Encoder</h4>
        <strong>Structure:</strong>
        <ul>
          <li>
            A Linear Embedding Layer transforms the input
            observation (obs_dim = 5) into a feature space
            of dimension d_model = 256.
          </li>
          <li>
            A Transformer Encoder Stack, consisting of 2
            layers, captures both short-term and long-term
            temporal dependencies.
          </li>
          <li>
            A Projection Layer reshapes the encoded observation
            into a sequence representation for downstream tasks.
          </li>
        </ul>
        <p>
          <strong>Dropout Rates:</strong> Rates between 0.1 and 0.3
          were evaluated, with 0.1 found optimal for balancing regularization
          and model stability.
        </p>

        <h4>Action Encoder</h4>
        <strong>Structure:</strong>
        <ul>
          <li>
            A Linear Embedding Layer maps actions (action_dim = 2) into the
            same 256-dimensional transformer-compatible feature space.
          </li>
          <li>
            A Transformer Encoder Stack, identical in design to the
            observation encoder, processes the action sequence.
          </li>
          <li>
            A Projection Layer outputs the predicted actions to match
            the required space (pred_horizon × action_dim).
          </li>
        </ul>
        <p>
          <strong>Dropout Rates:</strong> Like the observation
          encoder, a 0.1 rate provided the best trade-off between
          regularization and model accuracy.
        </p>
        <p>
          Both transformer architectures use feedforward layers
          with <strong>dim_feedforward = 2048</strong> and <strong>nhead = 8</strong> (as
          inspired by the &quot;Attention Is All You Need&quot; paper (Vaswani et al., 2017) <a href="#ref1">[2]</a>).
          These configurations were experimentally validated to balance performance
          and efficiency.
        </p>
        <p />

        <h4>Simulation Environment Improvements</h4>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/rendering-quality.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 3: Comparison of original and improved renderings
          </figcaption>
        </div>
        <p />
        <p>
          This project significantly improved the PushT simulation environment’s rendering quality.
          The render resolution was increased from 96 to 320, resulting in an 11-fold enhancement
          in visual clarity. This improvement facilitated better visual analysis, revealed
          unexpected
          behaviors, and highlighted how specific initial conditions challenged the agent, offering
          deeper insights into the model’s performance.
        </p>
        <p>
          Experiments were conducted in the PushT simulation environment,
          chosen for its lightweight design and challenging dynamics.
          The evaluation closely aligned with the original study, using
          metrics such as score/success rate and the agent’s ability to
          reach the winning state within a maximum of 200 steps.
        </p>
        <p>
          For this imitation learning task, we
          utilized the original training dataset provided by the authors
          of the original architecture
          to ensure a fair
          comparison.
          The dataset is available at the
          following link: <a href="https://drive.google.com/file/d/1KY1InLurpMvJDRb14L9NlXT_fEsCvVUq/view">https://drive.google.com/file/d/1KY1InLurpMvJDRb14L9NlXT_fEsCvVUq/view</a>
        </p>
        <p>
          Training was performed with three random seeds (1000, 2000, 3000),
          and each pretrained model was evaluated across 50 unique initial
          configurations, totaling 150 evaluations.
        </p>
      </section>
      <section>
        <h3>Results</h3>
        <p>
          The performance of the enhanced DP Transformer architecture compared to the
          original Diffusion Policy is demonstrated in the
          <a href="#video-start">video at the start of the page</a>.
          Below, we analyze the results in terms of training performance,
          inference performance, and computational efficiency. In the following plots,
          DP refers to the original Diffusion Policy, while DP Transformer (or TransEncoder,
          as labeled in some plot titles) represents our updated model incorporating Transformer
          layers for observation and action spaces. The shaded areas in the plots indicate the
          corresponding standard deviations.
        </p>
        <p>
          <b>Training Performance:</b> Both the Diffusion Policy (DP) and DP Transformer
          architectures demonstrated consistent convergence over 100 epochs
          (Figures 4a and 4b). The DP Transformer exhibited more stable learning curves,
          with a lower variance between seeds. Key observations include:
        </p>
        <ul>
          <li>
            <b>Overall Trends:</b> The final loss values for both models converged to
            similar ranges (~0.015), showing comparable optimization capabilities.
            However, the DP Transformer demonstrated reduced variance, indicating more
            robust training dynamics (Figures 5a and 5b).
          </li>
          <li>
            <b>Early Training Phase:</b> During the first 10 epochs, the DP Transformer
            showed faster convergence compared to the original DP. Its narrower standard
            deviation band during this phase reflected more consistent behavior across
            different seeds.
          </li>
          <li>
            <b>Late Training Phase:</b> In the final 10 epochs, both models stabilized,
            but the DP Transformer maintained tighter clustering of loss curves across
            seeds, which further highlighted its ability to produce stable and reliable
            performance during training.
          </li>
        </ul>
        <p />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/mean-loss.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 4: Mean Training Loss
          </figcaption>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/shaded-loss.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 5: Training loss (shaded) and standard deviation in the last 10 epochs
          </figcaption>
        </div>
        <p />
        <p>
          <b>Inference Performance:</b> The DP Transformer
          outperformed the original DP model during inference
          across several metrics. Key insights include:
        </p>
        <ul>
          <li>
            <b>Score Distribution Analysis:</b> The DP
            Transformer achieved a higher frequency
            of perfect scores (1.0) while reducing occurrences
            of poor performance (scores below 0.5) compared to
            DP (Figures 6a and 6b). This consistency across
            seeds demonstrates the reliability of the enhanced
            architecture.
          </li>
          <li>
            <b>Step Efficiency:</b> The DP Transformer
            required fewer mean steps to complete tasks (183.88)
            compared to the original DP (184.76). Additionally,
            the DP Transformer showed fewer instances of exceeding
            the maximum step limit (200), further highlighting its
            improved task efficiency (Figures 7a and 7b).
            Performance between 100 and 150 steps was comparable for
            both models, but the DP Transformer showed better results
            for tasks requiring 150–200 steps.
          </li>
          <li>
            <b>Robustness Analysis:</b> Across all evaluated seeds,
            the DP Transformer
            exhibited lower variance in both scores and steps, indicating improved
            consistency across varying initialization conditions.
          </li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/inference-score.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 6: Inference Score Distributions When Interacting With The Environment
          </figcaption>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/inference-steps.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 7: Inference step distributions for different models
          </figcaption>
        </div>
        <p />
        <p>
          <b>Computational Efficiency:</b> The enhanced DP Transformer model required an average of 60 additional seconds for training compared to the original DP, when evaluated across three random seeds (1000, 2000, 3000). Despite the added complexity of the Transformer encoders, the inference time for the DP Transformer remained comparable to that of the original DP, as shown in the <a href="#video-start">video</a>. This indicates that the architectural enhancements do not compromise real-time deployment performance.
        </p>
        <p>
          These results highlight that the Transformer-based observation and
          action encoders not only maintain the performance of the original Diffusion
          Policy but also deliver significant improvements in training stability,
          inference consistency, and task efficiency.
        </p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          The implementation of a structured checkpoint saving and loading system significantly
          enhanced the reproducibility of experiments, while the use of comprehensive evaluation
          metrics across different seeds provided deeper insights into the stability of the model.
          Additionally, the 11-fold improvement in rendering resolution enabled better visualization
          of unique behaviors in challenging scenarios, offering a more detailed and nuanced
          understanding of the results.
        </p>
        <p>
          <strong>Limitations:</strong>
          <ul>
            <li>There is definitely a need for better handling of dynamic environments and
              unexpected scenarios.
            </li>
            <li>Integration with real robotic systems would require additional considerations
              for real-time performance.
            </li>
            <li>There is also a necessity to tune the hyperparameters of the transformer more
              carefully.
            </li>
            <li>
              Fixed observation horizon might limit the model’s ability to capture more
              extended temporal patterns.
            </li>
          </ul>
        </p>
        <p>
          <strong>Future Work:</strong>
          <ul>
            <li>Investigation of more efficient network architectures to reduce training
              overhead.
            </li>
            <li>Implementation of data augmentation techniques for better generalization.</li>
            <li>Develop more robust evaluation metrics for real-world scenarios.</li>
          </ul>
        </p>
      </section>
      <section>
        <h3>References</h3>
        <p>
          <a id="ref1" href="https://diffusion-policy.cs.columbia.edu/diffusion_policy_ijrr.pdf">[1]Chi et al. (2023). <em>Diffusion Policy: Visuomotor Policy Learning via Action Diffusion</em>. In <em>Robotics: Science and Systems (RSS) 2023</em>.</a><br />
          <a id="ref2" href="https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf">[2] Vaswani et al. (2017). <em>Attention Is All You Need</em>. In <em>Advances in Neural Information Processing Systems</em> (NeurIPS), Vol. 30.</a><br />
        </p>
      </section>
      <section>
        <h3>Appendices</h3>
        <h4>Additional Training Comparisons</h4>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/dp-training.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 8: DP Training Plots for Seeds 1000, 2000, and 3000
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/dp-trans-training.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 9: DP Transformer Training Plots for Seeds 1000, 2000, and 3000
          </figcaption>
        </div>
        <p />
        <h4>Additional Inference Comparisons</h4>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/score-1000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 10: Score Distributions at Seed = 1000
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/score-2000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 11: Score Distributions at Seed = 2000
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/score-3000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 12: Score Distributions at Seed = 3000
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/steps-1000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 13: Step Distributions at Seed = 1000
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/steps-2000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 14: Step Distributions at Seed = 2000
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/transformer-diffusion/steps-3000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 15: Step Distributions at Seed = 3000
          </figcaption>
        </div>
        <p>
          Supplementary materials, such as the detailed report, and extended algorithms,
          are available upon request.
        </p>
      </section>
    </article>
  </Main>
);
export default TransformerDiffusionImmitation;
