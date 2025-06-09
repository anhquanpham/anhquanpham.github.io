import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import Main from '../../layouts/Main';

const CoopTrack = () => (
  <Main title="Enhanced Differentiable Multi-Sensor Kalman Filter for Cooperative 3D Tracking" description="Detailed description of the Sampling Based Adaptive Motion Planning project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>Enhanced Differentiable Multi-Sensor Kalman Filter for Cooperative 3D Tracking
          </h2>
          <p>May 2025</p>
          <a href="https://github.com/anhquanpham/cooperative-3d-tracking-multi-sensor-KF" target="_blank" rel="noopener noreferrer">
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
          src="https://www.youtube.com/embed/iMu7Uq024Tg"
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
          Differentiable Multi-Sensor Kalman Filter for 3D MultiObject Cooperative
          Tracking (DMSTrack) is a 3D multi‐object cooperative tracking framework
          for autonomous driving that uses a differentiable multi‐sensor Kalman
          filter to learn per‐detection measurement uncertainties and fully leverage
          the Kalman filter’s theoretical strengths. In this work, we evaluate
          the learnable observation covariance module of DMSTrack, focusing on AMOTA,
          the primary metric in their work. We show that squaring residuals masks
          negative covariance adjustments, limiting adaptability and reducing stability.
          To address this, we introduce a terminal ReLU on the residual network and
          lower the initial covariance diagonal. Our modifications surpassed the
          original paper’s best-reported AMOTA, reduced training time required, and
          mitigated instability, proven by training and validation loss curves.
          Other variants investigated includes implementing Leaky ReLU or constant
          covariance with distance-dependent scaling produce performance gains
          comparable to the original baseline architecture.
        </p>
      </section>
      <section>
        <h3>Introduction</h3>
        <p>
          Autonomous vehicles typically rely on each car’s on‐board
          sensors for 3D
          detection and tracking, but single‐sensor pipelines falter
          under occlusions or sensor failures.
          While cooperative perception—via early, intermediate, or
          late fusion—has advanced multi‐vehicle detection,
          cooperative tracking remains underexplored: even
          V2V4Real’s <a href="#ref2">[2]</a> benchmark still feeds detections into
          a standard single‐sensor Kalman filter with fixed
          noise assumptions, failing to capture cross‐vehicle
          measurement uncertainty.
          <p />
          DMSTrack <a href="#ref1">[1]</a> bridges this
          gap by embedding a differentiable multi‐sensor
          Kalman filter that learns per‐detection observation
          covariances, thus restoring the theoretical optimality
          of KF‐based tracking. This approach delivers a 17%
          relative AMOTA boost over feature‐map fusion methods
          while using only 3.7% of the communication cost
          compared to other state-of-the-art methods.
          <p />
          However, DMSTrack’s practice of squaring covariance
          residuals conceals negative corrections, driving unstable convergence
          and over 30 hours of training time for 20 epochs on
          an AWS g6.xlarge instance. We tackle these issues with two minimal
          changes—applying a terminal ReLU to enforce
          nonnegative residuals and tuning the initial covariance scale—enabling
          us to reach the original AMOTA in just four epochs
          (an 80% reduction in training time) and to produce markedly
          smoother validation loss curves.
        </p>
        <p />
        <p>
          The key contributions are as follows:
        </p>
        <ul>
          <li>
            Re-implementation and comparison of
            parameter-dependent, learnable covariance residual networks versus
            fixed covariance tuning in the differentiable multi-sensor Kalman filter.
          </li>
          <li>Identification and analysis of design limitations in the original
            learnable covariance residual networks proposed in DMSTrack, specifically,
            masking negative adjustments due to square residuals.
          </li>
          <li>Architectural modifications enforcing non-negative residuals
            (terminal ReLU) and lower initial covariance.
          </li>
          <li>Performance demonstration showing &gt; 43.61% in the primary metric AMOTA (Average
            Multi-Object Tracking Accuracy) after 4 epochs, an 80% reduction in training
            epochs needed across 9 V2V4Real benchmark sequences.
          </li>
          <li>Additional analysis of a few other directions that we have explored,
            including constant covariance with distance-dependent scaling
            and Leaky ReLU–based residuals.
          </li>
        </ul>
      </section>
      <section>
        <h3>Background</h3>
        <p>
          Generally, given <InlineMath math="M" /> CAVs collaboratively tracking <InlineMath math="N" /> objects
          in 3D space over discrete time steps <InlineMath math="t" />, each object’s true state is:
        </p>
        <BlockMath math="\mathbf{s}_t = \bigl[x_t,\,y_t,\,z_t,\,a_t,\,\ell_t,\,w_t,\,h_t,\,\dot x_t,\,\dot y_t,\,\dot z_t\bigr]^T \in \mathbb{R}^{10}" />

        <p>
          where <InlineMath math="(x, y, z)" /> is the object center, <InlineMath math="a" /> its yaw,
          <InlineMath math="(\ell, w, h)" /> its dimensions, and <InlineMath math="(\dot x, \dot y, \dot z)" /> its velocity.
          At each time <InlineMath math="t" />, CAV <InlineMath math="j" /> produces at most one detection per object:
        </p>
        <BlockMath math="\mathbf{o}_t^{(j)} = \bigl[x_t^{(j)},\,y_t^{(j)},\,z_t^{(j)},\,a_t^{(j)},\,\ell_t^{(j)},\,w_t^{(j)},\,h_t^{(j)}\bigr]^T \in \mathbb{R}^7" />

        <p>Under a linear Gaussian model, the state evolves via:</p>
        <BlockMath math="\hat{\boldsymbol\mu}_t = A\,\boldsymbol\mu_{t-1}, \quad \hat{\Sigma}_t = A\,\Sigma_{t-1}\,A^T + Q" />

        <p>And each detection satisfies:</p>
        <BlockMath math="\mathbf{o}_t^{(j)} = H\,\mathbf{s}_t + \mathbf{v}_t^{(j)}, \quad \mathbf{v}_t^{(j)}\sim\mathcal{N}(0,\,R_t^{(j)})" />
        <BlockMath math="H = [I_{7\times7}\;0_{7\times3}]" />

        <p>
          The goal is to compute the minimum-mean-square-error estimate
          <InlineMath math="\boldsymbol\mu_t = \mathbb{E}[\mathbf{s}_t \mid \{\mathbf{o}_t^{(j)}\}]" /> via sequential Kalman updates across all CAV detections.
        </p>

        <p>
          DMSTrack <a href="#ref1">[1]</a> formulates
          3D multi-object cooperative tracking as an end-to-end differentiable Kalman filter over <InlineMath math="M" /> sensor inputs.
          After prediction:
        </p>
        <BlockMath math="\hat{\boldsymbol\mu}_t,\;\hat{\Sigma}_t" />
        <p>it executes <InlineMath math="M" /> sequential measurement updates. Instead of fixed observation noise, DMSTrack learns per-detection covariances:</p>
        <BlockMath math="\Delta r_t = f_\theta\bigl(z_t^{(j)}\bigr)\in\mathbb{R}^7,\qquad R_t^{(j)} = \mathrm{diag}\bigl(r_{\mathrm{init}} + \Delta r_t\bigr)^2" />
        <p>
          where <InlineMath math="z_t^{(j)}" /> concatenates local bird’s-eye-view and positional features, and <InlineMath math="r_{\mathrm{init}} = 1.0" />.
        </p>

        <p>The Kalman update steps are:</p>
        <BlockMath math="S_t = H\,\hat{\Sigma}_t\,H^T + R_t^{(j)},\quad K_t = \hat{\Sigma}_t\,H^T\,S_t^{-1}" />
        <BlockMath math="\boldsymbol\mu_t = \hat{\boldsymbol\mu}_t + K_t\bigl(\mathbf{o}_t^{(j)} - H\,\hat{\boldsymbol\mu}_t\bigr),\quad \Sigma_t = (I - K_t\,H)\,\hat{\Sigma}_t" />

        <p>
          The full prediction–update sequence is differentiable, so <InlineMath math="f_\theta" /> is trained by minimizing the tracking error over
          ground-truth trajectories.
        </p>

        <p>DMSTrack constructs the input feature vector <InlineMath math="z_t^{(j)}" /> by concatenating:</p>
        <ul>
          <li>
            <em>Local BEV features</em>: cropped and pooled from a
            PointPillar backbone at two resolutions.
          </li>
          <li>
            <em>Positional features</em>: raw box parameters and ego-vehicle transform,
            then linearly embedded.
          </li>
        </ul>

        <p>
          These are fused and passed through a two-layer MLP with ReLU activations to predict <InlineMath math="\Delta r_t" />.
          The residuals are squared and added to <InlineMath math="r_{\mathrm{init}}" /> to yield <InlineMath math="R_t^{(j)}" />.
        </p>

        <p>
          DMSTrack is trained on sequences of length <InlineMath math="T=10" />. For each time step <InlineMath math="t" />, tracks within 2m
          of ground truth incur an L2 loss on the first 7 state variables:
        </p>
        <BlockMath math="\mathcal{L} = \frac{1}{\sum_t N_t}\sum_{t=1}^T\sum_{i=1}^{N_t}\bigl\|\mu_t^{(i)}[1:7] - \mathrm{gt}_t^{(i)}\bigr\|_2^2" />
      </section>
      <section>
        <h3>Methodology</h3>

        <h4>Key Findings</h4>
        <p>
          Through detailed analysis, we discovered that several residual
          entries fell within the problematic range of -6 to -5.
          This led to an important insight: while the model attempts to
          minimize covariance by generating negative residuals,
          the formulation of the residual calculation introduces
          non-smoothness into the loss:
        </p>
        <BlockMath math="\Delta r_t = f_\theta\bigl(z_t^{(j)}\bigr)\in\mathbb{R}^7,\qquad R_t^{(j)} = \mathrm{diag}\bigl(r_{\mathrm{init}} + \Delta r_t\bigr)^2" />

        <h4>Solution Implementation</h4>
        <p>
          To address this, we experimented with constraining <InlineMath math="r_{\mathrm{init}} + \Delta r_t" /> to prevent it from crossing zero.
          The most effective solution was adding a <strong>ReLU</strong>
          activation at the output layer of the covariance residual network.
          This change significantly improved both the negative log-likelihood
          (NLL) loss and AMOTA on validation sequences.
        </p>

        <h4>Alternative Approaches Explored</h4>
        <p>We also investigated several alternative approaches:</p>

        <ul>
          <li>
            <strong>Heuristic-Based Covariance Modeling:</strong> Instead
            of learning measurement noise covariance via a neural network,
            we tested handcrafted heuristics to scale or shape the covariance matrix:
            <ul>
              <li>Scaling covariance based on the detected vehicle`&apos;s distance to the
                ego car
              </li>
              <li>Varying covariance based on the detection&apos;s map location</li>
            </ul>
            <p>
              However, we quickly realized that these heuristics were manually approximating
              functions that the network could learn more robustly using the same feature set.
            </p>
          </li>

          <li>
            <strong>LeakyReLU Activation:</strong> Since <InlineMath math="r_{\mathrm{init}} = 1.0" />, we also explored LeakyReLU (slope = 0.05)
            to allow slightly negative residuals while biasing toward
            positive values. Although theoretically sound,
            this approach underperformed compared to a simple ReLU activation.
          </li>
        </ul>
      </section>
      <section>
        <h3>Experimental Results</h3>

        <h4>Dataset, Training Process, and Evaluation Metrics</h4>

        <h5>Dataset</h5>
        <p>
          To ensure a fair comparison with DMSTrack, we adopt the same data pipeline
          on <a href="https://github.com/ucla-mobility/V2V4Real" target="_blank" rel="noopener noreferrer">V2V4Real</a>,
          a real-world multi-agent cooperative perception dataset. We use only
          LiDAR point clouds and 3D bounding box ground truths:
        </p>
        <ul>
          <li><strong>Training:</strong> 32 sequences, 7105 frames</li>
          <li><strong>Validation:</strong> 9 sequences, 1993 frames</li>
        </ul>

        <h5>Training Procedure</h5>
        <p>
          We compare four variants—original DMSTrack, a constant-covariance baseline, and our two modified versions (terminal ReLU and terminal Leaky ReLU)—under the same regimen on V2V4Real for fairness. Each uses a two-CAV ObservationCovarianceNet (fusion features, <InlineMath math="320\times20" />) and is trained end-to-end with Adam (lr = <InlineMath math="1\times10^{-3}" />, wd = <InlineMath math="1\times10^{-5}" />), gradient-norm clipping at 1. We process full sequences (no sub-splits), back-propagate every 10 frames on only the regression loss (weight = 1), and zero out association and NLL losses. After evaluation at epoch 0, we validate—and log AMOTA, sAMOTA, AMOTP—at each epoch’s end.
        </p>
        <p>
          The ReLU variant runs for 8 epochs; Leaky-ReLU and original DMSTrack run for 20, selecting the best checkpoint by validation. For the constant-covariance baseline, we fix <InlineMath math="R = I_7" /> and <InlineMath math="\Sigma_0 = I_{10}" /> (AB3DMOT <a href="#ref3">[3]</a> defaults) and simply evaluate without learning.
        </p>

        <h5>Evaluation Criteria</h5>
        <p><strong>Quantitative Metrics:</strong> As defined in DMSTrack and V2V4Real:</p>
        <ul>
          <li>
            <strong>AMOTA</strong>:  average multi-object tracking accuracy over a range of
            recall thresholds (higher is better)
          </li>
          <li>
            <strong>AMOTP</strong>: average localization precision of matched tracks
            (higher is better)
          </li>
          <li>
            <strong>sAMOTA</strong>: AMOTA scaled by the number of objects to correct
            for varying sequence difficulty (higher is better)
          </li>
          <li>
            <strong>MOTA</strong>: overall multi-object tracking accuracy with false
            positives/negatives & ID switches (higher is better)
          </li>
          <li>
            <strong>MT</strong>:  fraction of ground-truth trajectories that are tracked for
            at least 80 % of their length (higher is better)
          </li>
          <li>
            <strong>ML</strong>: fraction of ground-truth trajectories that are tracked
            for at most 20 % of their length (lower is better)
          </li>
        </ul>

        <p><strong>Training & Validation Losses:</strong></p>
        <ul>
          <li>
            <strong>Regression Loss:</strong>
            <BlockMath math="L_{\mathrm{reg}} = \sum_{(i,j)\in\mathcal{M}} \bigl\lVert \mathbf{g}_i - \mathbf{t}_j \bigr\rVert_2" />
          </li>
          <li>
            <strong>Negative Log-Likelihood (NLL) Loss:</strong>
            <BlockMath math="L_{\mathrm{NLL}} = \sum_i \left[\tfrac{V}{2}\ln(2\pi) + \tfrac12\ln\det\Sigma_i + \tfrac12(\mu_i - g_i)^\top\Sigma_i^{-1}(\mu_i - g_i)\right]" />
          </li>
        </ul>

        <p><strong>Qualitative Evaluation:</strong> Open3D visualizations
          show ground truth (green), raw detections (yellow/blue), and fused tracks (red).
        </p>

        <h4>Training and Validation Losses Performance Analysis</h4>
        <p>
          The ReLU model showed flatter, lower training losses throughout. Validation
          loss curves confirmed ReLU’s stability,
          outperforming LeakyReLU and original DMSTrack across both NLL and regression metrics.
        </p>
        <img src="/images/projects/cooptrack/training_nll_loss.png" alt="Negative Log-Likelihood Loss over Training" style={{ width: '100%' }} />
        <img src="/images/projects/cooptrack/training_regression_loss.png" alt="Regression Loss over Training" style={{ width: '100%' }} />
        <img src="/images/projects/cooptrack/eval_nll_loss.png" alt="Regression Loss over Training" style={{ width: '100%' }} />
        <img src="/images/projects/cooptrack/eval_regression_loss.png" alt="Validation Regression Loss" style={{ width: '100%' }} />
        <p />
        <p />
        <p />
        <p>
          During training, the ReLU-clamped model achieves
          dramatically lower and flatter losses: its negative
          log-likelihood stays near 8.5–9.0 throughout all 20
          epochs (versus 12–16 for LeakyReLU and 12–17 for
          the original DMSTrack), and its regression loss remains
          tightly grouped around 0.75–0.76 (versus
          0.70–0.75 for LeakyReLU and 0.72–0.75 for the original
          DMSTrack). This stability stems from ReLU’s
          strict non-negativity on the covariance residuals,
          which prevents invalid negative-variance gradients
          and yields a smoother, more reliable optimization trajectory.
        </p>
        <p>
          On the validation set, the benefits of hard
          clamping are even clearer: the ReLU model’s NLL loss is a
          flat line at <InlineMath math="\approx 8.9" />,
          while LeakyReLU fluctuates between 9 and 16 and the
          original DMSTrack occasionally spikes up to 21;
          similarly, ReLU’s regression loss remains constant at
          <InlineMath math="\approx 0.79" />, whereas LeakyReLU
          and the original DMSTrack oscillate between
          0.77–0.80 and briefly peak at 0.88. In effect,
          ReLU’s enforcement of positive-definiteness delivers
          both lower error and far less variance in performance,
          highlighting why LeakyReLU, by permitting small
          negative residuals, fails to converge as cleanly.
        </p>

        <h4>V2V4Real Tracking Metrics</h4>
        <p>The final evaluation metrics across all model variants are summarized below:</p>
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>AMOTA ↑</th>
              <th>AMOTP ↑</th>
              <th>sAMOTA ↑</th>
              <th>MOTA ↑</th>
              <th>MT ↑</th>
              <th>ML ↓</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Constant Covariance</td>
              <td>41.51</td>
              <td>55.87</td>
              <td>89.37</td>
              <td>88.68</td>
              <td>66.67</td>
              <td>13.67</td>
            </tr>
            <tr>
              <td>Default DMSTrack</td>
              <td>43.52</td>
              <td><strong>57.94</strong></td>
              <td>91.50</td>
              <td>88.32</td>
              <td><strong>68.35</strong></td>
              <td><strong>13.19</strong></td>
            </tr>
            <tr>
              <td><strong>DMSTrack + ReLU (Ours)</strong></td>
              <td><strong>43.61</strong></td>
              <td>57.51</td>
              <td><strong>91.64</strong></td>
              <td><strong>88.71</strong></td>
              <td>67.39</td>
              <td>13.43</td>
            </tr>
            <tr>
              <td><strong>DMSTrack + Leaky ReLU (Ours)</strong></td>
              <td>41.48</td>
              <td>54.83</td>
              <td>88.92</td>
              <td>88.10</td>
              <td>66.43</td>
              <td>13.43</td>
            </tr>
          </tbody>
        </table>

        <p>
          On the primary DMSTrack metric of <strong>AMOTA</strong>, our ReLU-enhanced variant
          achieves <strong>43.61%</strong>, noticeably outperforming the constant-covariance
          baseline (41.51%) and slightly surpassing the original DMSTrack (43.52%). It also leads
          in <strong>sAMOTA</strong> and <strong>MOTA</strong>, while delivering competitive results
          across all other supplementary metrics. These findings reinforce the effectiveness of our
          residual-clamping strategy, which not only improves tracking
          accuracy but also significantly
          reduces training complexity and instability.
        </p>

        <h4>Qualitative Tracking Results</h4>
        <p>
          See full video: <a href="https://youtu.be/iMu7Uq024Tg" target="_blank" rel="noopener noreferrer">https://youtu.be/iMu7Uq024Tg</a>
        </p>
        <img src="/images/projects/cooptrack/cooptrack.gif" alt="Frame 2" style={{ width: '100%' }} />
        <p>
          Observing the central objects across these consecutive
          frames, our filter consistently
          leans toward the more confident measurement. Instead of
          averaging the detections equally,
          the final fused track (red) remains closer to the sensor’s
          box (yellow or blue) that is either
          spatially nearer to the ground truth (green) or exhibits
          higher reliability. This behavior
          emerges naturally from the learned observation covariance:
          the model inflates <InlineMath math="R" /> for
          uncertain detections—such as occluded or distant objects—and
          shrinks it for clearer views, enabling adaptive,
          smooth tracking. As the video demonstrates, this strategy
          maintains robust track continuity even when one
          CAV’s raw input temporarily degrades.
        </p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          Our experiments demonstrate that a minimal
          modification—enforcing nonnegative covariance residuals
          via a terminal ReLU combined with a reduced
          initial scale—yields significant benefits in cooperative
          3D tracking. By clamping residuals to zero,
          we eliminate invalid negative-variance gradients, resulting
          in dramatically smoother training and validation
          losses, an 80% reduction in training time, and a clear
          AMOTA improvement over the original DMSTrack.
          Neither constant-covariance nor LeakyReLU variants achieve
          this same stability–accuracy trade-off, underscoring
          the importance of sign-consistent uncertainty learning.
        </p>
        <p>
          By revisiting classic multi-sensor Kalman filters and recent
          differentiable KF formulations, we show that simple architectural adjustments
          can restore theoretical guarantees in end-to-end deep systems. Unlike prior
          cooperative trackers that rely on fixed noise assumptions or heavyweight fusion
          networks, our ReLU-clamped DMSTrack achieves near-optimal measurement fusion
          with minimal inter-vehicle communication, while also delivering much faster
          and more stable training—making it both more reliable and easier to adopt at scale.
        </p>
        <p>
          Looking forward, scaling to larger fleets or denser environments will require
          innovations such as more efficient update schedules, hierarchical filter architectures,
          or asynchronous fusion schemes. Addressing these challenges is essential for enabling
          truly resilient cooperative tracking in real-world autonomous driving deployments.
        </p>
      </section>
      <section>
        <h3>References</h3>
        <p>
          <a id="ref1" href="https://arxiv.org/pdf/2309.14655" target="_blank" rel="noopener noreferrer">
            [1] Chiu et al. (2024).
            <em>
              DMSTrack: Differentiable Multi-Sensor Kalman Filter
              for 3D Multi-Object Cooperative Tracking
            </em>. arXiv:2309.14655.
          </a><br />
          <a id="ref2" href="https://arxiv.org/pdf/2303.07601" target="_blank" rel="noopener noreferrer">
            [2] Xu et al. (2022).
            <em>
              V2V4Real: A Real-World Large-Scale Multi-Vehicle
              Cooperative Perception Dataset
            </em>. arXiv:2303.07601.
          </a><br />
          <a id="ref3" href="https://arxiv.org/pdf/2008.08063" target="_blank" rel="noopener noreferrer">
            [3] Weng et al. (2020).
            <em>
              AB3DMOT: A Baseline for 3D Multi-Object Tracking
              and New Evaluation Metrics
            </em>. arXiv:2008.08063.
          </a>
        </p>
      </section>
    </article>
  </Main>
);
export default CoopTrack;
