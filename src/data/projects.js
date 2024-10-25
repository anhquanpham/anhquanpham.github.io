// TODO Add a couple lines about each project
const data = [
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
