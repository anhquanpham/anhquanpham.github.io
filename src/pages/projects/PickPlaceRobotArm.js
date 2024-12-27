import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Main from '../../layouts/Main';

const PickPlaceRobotArm = () => (
  <Main title="Pick & Place Robot Arm" description="Detailed description of the Pick & Place Robot Arm project.">
    <article className="post" id="project-detail">
      <header>
        <div className="title">
          <h2>Pick & Place Robot Arm</h2>
          <p>December 2024</p>
          <a href="https://github.com/anhquanpham/7-dof-pick-place-robot-arm" target="_blank" rel="noopener noreferrer">
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
      <div className="video-container" id="pickplace-video-start">
        <iframe
          src="https://www.youtube.com/embed/zRncZJl9haw"
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
          This project involved designing and implementing
          advanced planning and control algorithms
          for the Franka Emika Panda 7-DOF robotic arm to
          perform efficient pick-and-place tasks.
          The system focused on stacking both static and
          dynamic blocks to form stable towers of maximum height.
          Leveraging ROS for robot control and Gazebo for
          simulation <a href="#ref1">[1]</a>, the project demonstrated precise
          performance in both controlled and dynamic
          scenarios, showcasing the potential of robotic systems
          in industrial applications.
        </p>
      </section>
      <section>
        <h3>Introduction</h3>
        <p>
          The project aimed to develop a robust robotic system capable
          of performing efficient and accurate
          pick-and-place tasks using the Franka Emika Panda robotic
          arm. The advanced 7-DOF robot has high flexibility and precision, making it ideal for
          handling both static and dynamic environments.
          The system&apos;s applications extend to industrial automation,
          logistics, and manufacturing, where high
          precision and adaptability are critical.
        </p>
      </section>
      <section>
        <h3>Methodology</h3>
        The workflow included:
        <ul>
          <li><strong>Static Grasping: </strong> Stacking four static blocks within ~1:30 minutes.
          </li>
          <li><strong>Dynamic Grasping: </strong> Detecting, grasping, and stacking up
            to two moving blocks in another  ~1:30 minutes.
          </li>
        </ul>
        <h4>Static Grasping</h4>
        <p>
          <strong>Detection:</strong> A camera was used to
          detect static blocks in the workspace. Block poses
          were represented as transformation
          matrices relative to the camera frame and transformed
          to the robot&apos;s base frame using the equation:
        </p>
        <p>
          <BlockMath math={'T_{base}^{block} = T_{camera}^{base} \\cdot T_{block}^{camera}'} />
        </p>
        <p>
          <strong>Grasping:</strong> The robot used forward kinematics (FK) to calculate
          the end effector&apos;s current pose
          and inverse kinematics (IK) to compute the joint angles required for grasping.
          To ensure alignment, Rodrigues&apos; formula <a href="#ref2">[2]</a> was used
          to adjust the gripper&apos;s orientation:
        </p>
        <p>
          <BlockMath math={'R = \\cos(\\theta)I + \\sin(\\theta)[axis]_x + (1 - \\cos(\\theta))axis \\cdot axis^T'} />
        </p>
        <p>
          This rotation matrix adjusts the grippers&apos;
          orientation to align its z-axis with the downward direction.
          The adjusted rotation matrix is then applied to <InlineMath math="T_{base}^{approach}" />
          (at the position 10cm above the block), ensuring the gripper&apos;s
          z-axis always points downward
          before the robot moves to the block’s approach position.
        </p>
        <p>
          <strong>Placement:</strong> Blocks were stacked at predefined
          positions with heights incremented by 5 cm per block, starting at z = 0.22m.
        </p>
        <h4>Dynamic Grasping</h4>
        <p>
          <strong>Pre-Grasping:</strong> The end effector was positioned at a
          predefined location, anticipating the arrival of the next block.
        </p>
        <p>
          <strong>Block Alignment:</strong> The robot calculated the block&apos;s
          circular trajectory and its intersection with the gripper&apos;s motion line.
          The intersection point was transformed to the end-effector frame to compute
          the alignment offset.
        </p>
        <p>
          <strong>Grasp Execution:</strong> The grasp was triggered when the block crossed
          a threshold plane defined by two points
          on the gripper tips. Validation was performed using the cross-product of vectors
          to ensure proper alignment:
        </p>
        <pre>
          <code>
            {`IF (cross product of vectors AB and AC) < 0:
    Block is to the right
ELSE IF (cross product of vectors AB and AC) > 0:
    Block is to the left`}
          </code>
        </pre>
        <p>
          <strong>Grasp Success Validation:</strong> Grasp success was
          determined by measuring the gripper&apos;s finger positions.
          If left finger position + right finger position &gt; 0.3, the block is
          grasped successfully.
        </p>
        <h4>IK Solver Enhancements</h4>
        <p>
          The inverse kinematics (IK) solver was a critical component of
          the project. Several modifications were made to
          enhance its reliability, precision, and overall performance:
        </p>
        <ul>
          <li>
            <strong>Decaying Learning Rates:</strong> Reduced oscillations
            and overshooting by halving the learning rate
            after 2500, 5000, and 7500 iterations.
          </li>
          <li>
            <strong>Higher Precision:</strong> Reduced the minimum step
            size by a factor of 10 (1 × 10<sup>−6</sup>) to improve
            convergence for high-precision tasks.
          </li>
          <li>
            <strong>Joint-Centering Rate:</strong> Increased
            to 15 × 10<sup>−1</sup> to ensure smoother
            trajectories and better convergence near joint limits.
          </li>
        </ul>
      </section>
      <section>
        <h3>Results</h3>
        <p>
          <strong>Static Grasping:</strong> Successfully stacked
          static blocks with 100% accuracy in simulation. Real-world
          challenges
          included detection noise and platform height mismatches.
        </p>
        <p>
          <strong>Dynamic Grasping:</strong> Achieved a 90% success
          rate in block alignment and 80% in grasping during simulation.
        </p>
        <p>
          <strong>Sim-to-Real Gap:</strong> Highlighted discrepancies
          in predefined positions between simulation and the real-world,
          addressed by proposed real-time depth camera integration. Due to
          a big difference between simulation and real environment, the
          robot was not able to grasp many dynamic blocks.
        </p>
        <p>
          The robustness of the system is demonstrated in
          the <a href="#pickplace-video-start">video at the start of the page</a>.
          Below are some additional photos.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/robot-arm/dynamic-grasp.jpg`} alt="Dynamic grasping" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
          <img src={`${process.env.PUBLIC_URL}/images/projects/robot-arm/dynamic-stack.jpg`} alt="Dynamic stacking" style={{ maxWidth: '80%', height: 'auto' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
          <figcaption>Figure 1: The robot arm picking and stacking the dynamic
            blocks after successfully stacked all static blocks
          </figcaption>
        </div>
        <p />
      </section>
      <section>
        <h3>Key Challenges and Possible Solutions</h3>
        <p>
          <ul>
            <li><strong>Insufficient Alignment Time:</strong> Introduce ignore-distance
              parameters to skip unreachable blocks.
            </li>
            <li><strong>Incorrect Block Selection:</strong> Add tighter alignment thresholds
              to limit target range.
            </li>
            <li><strong>Noise in Detection:</strong> Iterative camera scans closer
              to the platform for better accuracy.
            </li>
            <li><strong>IK Solver Reliability:</strong> Improve solver stability with
              decaying learning rates and finer step sizes.
            </li>
          </ul>
        </p>
      </section>
      <section>
        <h3>Conclusion</h3>
        <p>
          <ul>
            <li>Flexible algorithms are essential to address real-world discrepancies.</li>
            <li>Retry mechanisms significantly enhance robustness in dynamic tasks.</li>
            <li>Comprehensive testing under time constraints is critical for success.</li>
          </ul>
        </p>
      </section>
      <section>
        <h3>References</h3>
        <p>
          <a id="ref1" href="https://frankaemika.github.io/docs/franka_ros.html">[1] franka_ros — Franka Control Interface (FCI) documentation, Franka Robotics GmbH</a><br />
          <a id="ref2" href="https://people.eecs.berkeley.edu/~ug/slide/pipeline/assignments/as5/rotation.html">[2] CS184: Computing Rotations in 3D, UC Berkeley @EECS</a><br />
        </p>
      </section>
      <section>
        <h3>Appendices</h3>
        <p>
          The project&apos;s Franka Emika Panda 7-DOF robot arm and detailed setup
          instructions are provided as
          part of the
          MEAM5200: Introduction to Robotics project at the University of Pennsylvania.
        </p>
        <p>
          Supplementary materials, such as the detailed report, extended algorithms,
          and source code, are available upon request.
        </p>
      </section>
    </article>
  </Main>
);
export default PickPlaceRobotArm;
