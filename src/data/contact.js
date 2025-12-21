// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faBluesky } from '@fortawesome/free-brands-svg-icons/faBluesky';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/anhquanpham',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/anhquanpham404',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/_anhquanpham/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/anh-quan-pham/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.grasp.upenn.edu/people/anh-quan-pham/',
    label: 'GRASP Lab',
    icon: faRobot,
  },
  {
    link: 'https://x.com/_anhquanpham',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://scholar.google.com/citations?user=EU7iQZgAAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGraduationCap,
  },
  {
    link: 'https://bsky.app/profile/anhquanpham.bsky.social',
    label: 'Bluesky',
    icon: faBluesky,
  },
  {
    link: 'phamanhquanbill@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
