import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

// Get the user's local time zone
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const data = [
  {
    label: 'Quan\'s current local time (Philadelphia, PA)',
    value: dayjs().tz('America/New_York').format('MMMM DD, YYYY, HH:mm'), // 24-hour format
  },
  {
    label: 'Current local time at viewer\'s location',
    value: dayjs().tz(userTimeZone).format('MMMM DD, YYYY, HH:mm'), // User's local time in 24-hour format
  },
  {
    label: 'Current time in Vietnam',
    value: dayjs().tz('Asia/Ho_Chi_Minh').format('MMMM DD, YYYY, HH:mm'), // 24-hour format
  },
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/anhquanpham/anhquanpham.github.io/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/anhquanpham/anhquanpham.github.io/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/anhquanpham/anhquanpham.github.io/network',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/anhquanpham/anhquanpham.github.io/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    label: 'Lines of Javascript powering this website',
    value: '2150',
    link: 'https://github.com/anhquanpham/anhquanpham.github.io/graphs/contributors',
  },
];

export default data;
