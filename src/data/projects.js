// TODO Add a couple lines about each project
const data = [
  {
    title: 'SBAMP: Sampling Based Adaptive Motion Planning',
    subtitle: 'Sampling Based Adaptive Motion Planning',
    link: '/projects/sbamp',
    image: '/images/projects/sbamp/SBAMP.gif',
    date: '2025-05-05',
    desc:
      'Developed SBAMP, a bi-level motion planning framework that combines RRT* for global path planning with an online SEDS-based controller for real-time local trajectory adaptation. The method avoids any offline training data by fitting stable dynamical systems on-the-fly and ensures global Lyapunov stability during disturbances and replanning. Implemented in ROS2 with CVXPY-based optimization, integrated with the F1/10 RoboRacer platform using real-time LIDAR-based perception and Ackermann control.',
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
    title: 'Pick & Place Robot Arm',
    subtitle: 'MEAM 5200: Introduction to Robotics Final Project',
    link: '/projects/pick-place-robot-arm',
    image: '/images/projects/robot-arm/robot-arm.gif',
    date: '2024-12-11',
    desc:
      'Designed and implemented planning and control algorithms for the Franka Emika Panda 7-DOF robot to efficiently pick, place, and stack static and dynamic blocks for maximum height. Utilizing ROS and Gazebo for simulation.',
  },
  {
    title: '3D scene reconstruction and novel view rendering with NeRF (Neural Radiance Fields)',
    subtitle: 'Detailed overview of implementing 3D scene reconstruction using NeRF architecture and volumetric rendering techniques.',
    link: '/projects/nerf',
    image: '/images/projects/nerf/nerf-fast.gif',
    date: '2024-12-22',
    desc:
      'This project implements a NeRF-based framework that represents a 3D scene in a compact way and render novel views given a number of 2D views of the same static scene. It integrates positional encoding, stratified sampling, and volumetric rendering.',
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
    // subtitle: 'Won 3rd. place in 2015 Techcrunch Disrupt SF Hackathon',
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
