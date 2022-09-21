import type { Work } from './types';

export const works: Array<Work> = [
  {
    title: "I've created",
    subTitle: 'Kibrewosen',
    description: 'Online learning platform.',
    image: {
      src: '/assets/images/works/kibrewosen.png',
      height: 1167,
      width: 2032,
    },
    link: 'https://www.kibrewosen.com/',
  },
  {
    title: "I'm making",
    subTitle: 'Mockify',
    description: 'API mocking made easy.',
    image: {
      src: '/assets/images/works/mockify.png',
      height: 1167,
      width: 2032,
    },
  },
  {
    title: "I've created",
    subTitle: 'Kasting',
    description: 'An online casting tool focused on both artists and hirers.',
    image: {
      src: '/assets/images/works/kasting.png',
      height: 1167,
      width: 1966,
    },
  },
  {
    title: "I'm developing",
    subTitle: 'GymBro',
    description: 'Personal training app for personals and athletes.',
    image: {
      src: '/assets/images/works/gymbro.png',
      height: 1099,
      width: 579,
    },
  },
];
