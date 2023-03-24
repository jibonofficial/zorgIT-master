import { Link } from 'react-router-dom';

interface Props {
  title: string;
  to: string;
}

export const footerMenu = [
  {
    menuTitle: 'Services',
    subMenu: [
      {
        title: 'Web & Apps Design',
        to: '',
      },
      {
        title: 'Web & Apps Development',
        to: '',
      },
      {
        title: 'Digital marketing',
        to: '',
      },
      {
        title: 'Graphics Design',
        to: '',
      },
      {
        title: 'Search Engine Optimization',
        to: '',
      },
    ],
  },
  {
    menuTitle: 'Use Cases',
    subMenu: [
      {
        title: 'The Best One',
        to: '',
      },
      {
        title: 'Dealizle',
        to: '',
      },
      {
        title: 'Fast Deals',
        to: '',
      },
      {
        title: 'Arcon Interior',
        to: '',
      },
    ],
  },
  {
    menuTitle: 'Resources',
    subMenu: [
      {
        title: 'Plugins',
        to: '',
      },
      {
        title: 'Blog',
        to: '',
      },
      {
        title: 'Themes',
        to: '',
      },
      {
        title: 'Hosting',
        to: '',
      },
      {
        title: 'Support',
        to: '',
      },
    ],
  },
  {
    menuTitle: 'Company',
    subMenu: [
      {
        title: 'About Us',
        to: '',
      },
      {
        title: 'Careers',
        to: '',
      },
      {
        title: 'FAQs',
        to: '',
      },
      {
        title: 'Teams',
        to: '',
      },
      {
        title: 'Contact Us',
        to: '',
      },
    ],
  },
];

export const bottomMenu = [
  {
    title: 'Privacy Policy',
    to: '',
  },
  {
    title: 'Terms of Use',
    to: '',
  },
  {
    title: 'Sales and Refunds',
    to: '',
  },
  {
    title: 'Legal',
    to: '',
  },
  {
    title: 'Site Map',
    to: '',
  },
];

export default function FooterLink({ title, to }: Props) {
  return (
    <Link to={to}>
      <span>{title}</span>
    </Link>
  );
}
