// TODO Add a couple lines about each project
const data = [
  {
    title: 'Training Multi-Task Reinforcement Learning Policies for 5-Fingered Humanoid Manipulation (New, Unexplored Robot)',
    subtitle: 'Dexmate Vega U Humanoid Manipulation',
    link: 'https://github.com/anhquanpham/humanoid_graspanything',
    image: '/images/projects/humanoid-grasping.gif',
    date: '2026-04-01',
    descPrefix:
      'Built a complete reinforcement learning stack for',
    descLinkText: 'Dexmate\'s Vega U humanoid robot',
    descLink: 'https://shop.dexmate.ai/products/vega',
    descSuffix:
      '(featuring 5-fingered dexterous hands) in IsaacLab and IsaacSim, including training environments, learning algorithms, and a full training and vision-based distillation pipeline with multiple domain randomization modes, and trained a multi-object grasping policy with PPO - all within 72 hours; the policy achieved near-100% success on grasping and lifting across YCB objects in simulation and converged in 6 hours of training on 1 A6000 GPU.',
    descHighlightPrefix:
      'This work was completed just 5 days after the',
    descHighlightLinkText:
      'official release of the robot\'s simulation assets',
    descHighlightLink:
      'https://github.com/dexmate-ai/dexmate-urdf/releases/tag/v0.8.1',
    descHighlightSuffix:
      ', without any prior setup or documentation for policy learning.',
  },
  {
    title: 'Conversational AI Robot with Animatronic Facial Expressions',
    subtitle: 'Conversational Robot with Animatronic Eyes and LCD Mouth',
    link: 'https://patuan07.github.io/portfolio/ai-assistant/',
    image: '/images/projects/AI_talking_robot.gif',
    date: '2026-01-16',
    descPrefix:
      'A conversational robot combined with animatronic eyes and an LCD mouth. I grew up helping my mom, who teaches English to kids, by speaking with her students so they could practice their conversational skills and pronunciation. Now that both my brother and I are away (I am at Penn in Philadelphia and he is at NUS in Singapore, both studying robotics intelligence), we built this robot to keep those conversations going :) He\'s a shy kid, and I haven\'t visited home for a while so no flashy demos, but',
    descLinkText: 'HERE',
    descLink: 'https://youtube.com/shorts/ky_QH1Zoab4?feature=share',
    descSuffix: 'is one during development.',
  },
  {
    title: 'Enhanced Differentiable Multi-Sensor Kalman Filter for Cooperative 3D Tracking',
    subtitle: 'Enhanced DMSTrack',
    link: '/projects/cooptrack',
    image: '/images/projects/cooptrack/cooptrack.gif',
    date: '2025-05-05',
    desc:
      'Improved DMSTrack, a differentiable multi-sensor Kalman filter for 3D cooperative tracking, by modifying its learnable covariance module to enforce nonnegative uncertainty estimates. Our changes, ReLU-clamped residuals and reduced initial covariance scale, resulted in faster convergence and improved tracking performance on the V2V4Real benchmark. Implemented in PyTorch with Open3D visualization, trained end-to-end on real-world multi-vehicle LiDAR sequences using a custom differentiable Kalman filter pipeline.',
  },
  {
    title: 'Transformer-Based Visuomotor Diffusion Imitation Learning for Robot Manipulation',
    subtitle: 'Transformer Diffusion Policy for Immitation Learning',
    link: '/projects/transformer-diffusion-imitation',
    image: '/images/projects/transformer-diffusion/transformer-diffusion.gif',
    date: '2024-12-15',
    desc:
      'Enhanced diffusion policy frameworks for robotic manipulation tasks by introducing transformer-based observation and action encoders to capture relationships across the whole trajectory. The algorithm is evaluated in a PyMunk-based PushT simulation environment, with comprehensive evaluation metrics.',
  },
  {
    title: 'Dynamic Block Stacking with 7-DOF Robot Arms',
    subtitle: 'MEAM 5200: Introduction to Robotics Final Project',
    link: '/projects/pick-place-robot-arm',
    image: '/images/projects/robot-arm/robot-arm.gif',
    date: '2024-12-11',
    desc:
      'Designed and implemented planning and control algorithms for the Franka Emika Panda 7-DOF robot to efficiently pick, place, and stack static and dynamic blocks for maximum height. Utilizing ROS and Gazebo for simulation.',
  },
  {
    title: '3D Scene Reconstruction and Novel View Rendering with NeRF (Neural Radiance Fields)',
    subtitle: 'Detailed overview of implementing 3D scene reconstruction using NeRF architecture and volumetric rendering techniques.',
    link: '/projects/nerf',
    image: '/images/projects/nerf/nerf-fast.gif',
    date: '2024-12-22',
    desc:
      'This project implements a NeRF-based framework that represents a 3D scene in a compact way and render novel views given a number of 2D views of the same static scene. It integrates positional encoding, stratified sampling, and volumetric rendering.',
  },
  {
    title: 'Automatic Solar Tracker',
    subtitle: 'Single-Axis Solar Tracker with LDR Sensing and PWM Servo Control',
    link: '/projects/auto-solar-tracker',
    image: '/images/projects/auto-solar-tracker.gif',
    date: '2024-11-01',
    desc:
      'Built a single-axis solar tracker system that reads light intensity from LDR sensors through ADC modules and processes the measurements to continuously rotate a servo motor using PWM control. The controller aligns the panel toward the strongest light source to improve solar energy capture under changing lighting conditions.',
  },
  {
    title: 'Building a Remote-Controlled Drone from scratch',
    subtitle: 'Environmental Monitoring Remote-Controlled Drone with Multi Sensor Integration',
    link: '/projects/remote-controlled-drone',
    image: '/images/projects/drone.png',
    date: '2024-02-19',
    desc:
      'Designed and built a custom quadcopter drone from scratch for environmental data collection and autonomous flight research. The system integrates mechanical, electrical, communication, and control components including a laser-cut mica frame, BR2204 brushless motors, Mamba F405 MK2 flight controller, and multiple sensors (DHT22 for humidity, BMP280 for atmospheric pressure, GP2Y1010AU0F for air quality). Implemented PID control algorithms for stable flight and used Betaflight firmware for sensor calibration and motor configuration.',
  },
  {
    title: 'Building an Audio Amplifier from scratch',
    subtitle: 'Two-Stage Common Emitter and Darlington Audio Amplifier',
    link: '/projects/build-audio-amplifier',
    image: '/images/projects/amplifier.png',
    date: '2024-01-15',
    desc:
      'A two-stage audio amplifier designed and built using a common emitter and Darlington configuration to achieve efficient voltage and current amplification. The system operates on a 15V supply, delivering up to 2W output across the full audible range (20 Hz–20 kHz).',
  },
  {
    title: 'Face Verification with C++ & OpenCV',
    subtitle: 'Computer Systems Programming Final Project',
    link: 'https://github.com/anhquanpham/Face-Verification-C-',
    image: '/images/projects/face_verification.jpg',
    date: '2023-06-04',
    desc:
      'Developed a real-time face verification system in C++ using OpenCV, integrating yunet.onnx for detection and sface.onnx for feature extraction and matching. Optimized for edge devices, ensuring efficient performance with minimal latency and low power consumption, suitable for IoT deployments.',
  },
  {
    title: 'Mood Based Music Recommendation System',
    link: 'https://github.com/anhquanpham/Mood-based-music-recommendation',
    image: '/images/projects/mood_detector.jpg',
    date: '2023-06-03',
    desc:
      'A real-time emotion recognition system was built using Python, leveraging Mediapipe holistic solution to detect and track face and hand landmarks. '
      + 'The data was normalized to enhance model performance, ensuring it was position-invariant. '
      + 'Computer vision techniques were applied for real-time object detection and tracking, and the emotion recognition model was implemented with Keras. '
      + 'Videos were captured via OpenCV, processed with Mediapipe, and fed into the trained model for real-time mood prediction, with a Streamlit-based web interface and WebRTC for live video streaming.',
  },
  {
    title: 'LC-3 Virtual Machine',
    subtitle: 'Computer Systems Programming Midterm Project',
    link: 'https://github.com/anhquanpham/VM-LC3/tree/main',
    image: '/images/projects/VMLC3.png',
    date: '2023-04-03',
    desc:
      'A virtual machine that simulates the LC-3 architecture, providing a simplified CPU model. '
      + 'It reads, writes data, performs arithmetic, and interacts with I/O devices, making it ideal for learning system-level programming. '
      + 'Similar to the Java Virtual Machine, it abstracts hardware, allowing programs to run across devices without modification. '
      + 'Written in C, this LC-3 virtual machine was tested with 2048, hangman, and rogue game files (also uploaded in the repo).',
  },
];

export default data;
