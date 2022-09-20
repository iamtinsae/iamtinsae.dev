import type { Work } from './types';

export const works: Array<Work> = [
  {
    title: "I've created",
    subTitle: 'Kibrewosen',
    description: 'Online learning platform.',
    image: {
      src: 'https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      height: 1920,
      width: 1080,
    },
    link: 'https://www.kibrewosen.com/',
  },
  {
    title: 'I made',
    subTitle: 'Mockify',
    description: 'API mocking made easy.',
    image: {
      src: 'https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
      height: 1920,
      width: 1080,
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
      src: '/assets/images/works/gymbro.jpeg',
      height: 1280,
      width: 623,
    },
  },
];
