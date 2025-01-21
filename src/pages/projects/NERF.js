import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import Main from '../../layouts/Main';

const NERF = () => (
  <Main title="3D Scene Reconstruction with NeRF" description="Detailed overview of implementing 3D scene reconstruction using NeRF architecture and volumetric rendering techniques.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>3D scene reconstruction and novel view rendering with NeRF (Neural Radiance Fields)
          </h2>
          <p>December 2024</p>
          <a href="https://github.com/anhquanpham/nerf-novel-view-rendering" target="_blank" rel="noopener noreferrer">
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
          src="https://www.youtube.com/embed/ZhDRLi4Rz9A?si=0-0WQtnydnSKDyse"
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
          This project implements a NeRF-based framework that represents a 3D scene in a compact
          way and render novel views given a number of 2D
          views of the same static scene. It integrates positional encoding, stratified sampling,
          and volumetric rendering.
        </p>
      </section>
      <section>
        <h3>Introduction</h3>
        <p>
          Neural Radiance Fields (NeRF) are powerful tools for 3D scene reconstruction. This
          project focuses on employing NeRF
          to represent scenes as mappings of 3D positions and viewing directions to RGB color
          and density. By leveraging positional encoding
          and efficient rendering techniques, this implementation enhances the quality and
          realism of synthesized scenes.
        </p>
      </section>
      <section>
        <h3>Core Components</h3>
        <p>
          Below are the key components of the NeRF framework.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/nerf/components.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 1: Core procedure of the neural radiance field scene representation and differentiable rendering procedure <a href="#ref1">[1]</a>
          </figcaption>
        </div>

        <p />
        <h4>Positional Encoding</h4>
        <p>
          The <code>positional_encoding</code> function applies sinusoidal
          transformations to map continuous coordinates into higher-dimensional
          space, enhancing the ability to model high-frequency variations in scenes.
        </p>
        <BlockMath math="\gamma(x) = [\sin(2^0\pi x), \cos(2^0\pi x), \dots, \sin(2^{L-1}\pi x), \cos(2^{L-1}\pi x)]" />
        <p />

        <h4>Ray Sampling</h4>
        <p>
          Rays are sampled using <code>get_rays</code> and stratified into points
          along the ray using <code>stratified_sampling</code>. This ensures
          uniform coverage of the 3D scene, crucial for accurate density and color estimations.
        </p>
        <BlockMath math="t_i = t_{near} + \frac{i-1}{N} (t_{far} - t_{near}), \quad i = 1, \dots, N" />

        <p />
        <h4>NeRF Model Architecture</h4>
        <p>
          The <code>nerf_model</code> class defines a neural network architecture with:
          <ul>
            <li>10 fully connected layers with ReLU activations.</li>
            <li>A skip connection at the fifth layer to propagate input features.</li>
            <li>Separate branches for density prediction and feature-vector computation
              for color.
            </li>
          </ul>
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/nerf/arch.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 2: NeRF architecture for 3D scene reconstruction <a href="#ref2">[2]</a>
          </figcaption>
        </div>
        <p />

        <h4>Volumetric Rendering</h4>
        <p>
          Colors of rays (pixels) are computed using the volumetric rendering equation.
          The method aggregates densities and RGB values
          along each ray to synthesize a 2D projection of the 3D scene.
        </p>
        <BlockMath math="C(r) = \int_{t_{near}}^{t_{far}} T(t) \sigma(r(t)) c(r(t), d) \, dt" />
        <BlockMath math="T(t) = \exp\left(-\int_{t_{near}}^t \sigma(r(s)) \, ds\right)" />
        <p />
        <p>
          From the above formulas, we have the following discrete approximations:
        </p>
        <BlockMath math="\hat{C}(r) = \sum_{i=1}^N T_i (1 - \exp(-\sigma_i \delta_i)) c_i" />
        <BlockMath math="T_i = \prod_{j=1}^{i-1} \exp(-\sigma_j \delta_j), \quad \delta_i = t_{i+1} - t_i" />
      </section>
      <section>
        <h3>Results</h3>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/nerf/volrender.png`} alt="volrender" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 3: Volumetric rendering result from the implementation, with σ = 0.2
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/nerf/i0.png`} alt="before rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 4: The novel view the project try to render, before training
          </figcaption>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/nerf/nerf.gif`} alt="training rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 5: The novel view the project try to render during the training process
          </figcaption>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/nerf/i3000.png`} alt="improved rendering quality" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>
            Figure 6: The novel view the project try to render, after training
          </figcaption>
        </div>

        <p>
          The implementation achieved a PSNR of around 25.0 after 3000 iterations, demonstrating the
          effectiveness of NeRF in scene reconstruction.
        </p>
        <BlockMath math="\text{PSNR} = 10 \cdot \log_{10} \left(\frac{R^2}{\text{MSE}}\right)" />
        <p>
          Here, <InlineMath math="R" /> represents the maximum pixel intensity, and <InlineMath math="\text{MSE}" /> is the mean squared error between the reconstructed and ground truth images.
        </p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          This project successfully showcases the NeRF framework&apos;s potential for 3D
          scene reconstruction. The combination of positional encoding,
          ray sampling, and volumetric rendering allows for high-quality scene synthesis.
        </p>
      </section>
      <section>
        <h3>References</h3>
        <p>
          <a id="ref1" href="https://arxiv.org/abs/2003.08934">[1] Mildenhall et al. (2020). <em>NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis</em>. In <em>arXiv preprint arXiv:2003.08934</em>.</a><br />
          <a id="ref2" href="https://towardsdatascience.com/nerf-representing-scenes-as-neural-radiance-fields-for-view-synthesis-ef1e8cebace4">[2] Towards Data Science. (2020). <em>NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis</em>.</a><br />
        </p>
      </section>
    </article>
  </Main>
);
export default NERF;
