import {
  DjangoOriginalIcon,
  ExpressOriginalWordmarkIcon,
  FlutterPlainIcon,
  NextjsOriginalWordmarkIcon,
  NginxOriginalIcon,
  NodejsPlainWordmarkIcon,
  TailwindcssPlainIcon,
} from 'react-devicons';

import ScrollDownButton from '@/components/ScrollDownButton';
import ThemedLogo from '@/components/ThemedLogo';
import UsesSection from '@/components/Uses';
import Works from '@/components/Works';
import { Meta } from '@/layouts/Meta';
import type { IconsProp, Work } from '@/lib/types';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

export const works: Work[] = [
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
    technologies: [DjangoOriginalIcon, NginxOriginalIcon],
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
    technologies: [
      (props: IconsProp) => (
        <NextjsOriginalWordmarkIcon
          {...props}
          className={`!fill-white ${props?.className}`}
        />
      ),
      TailwindcssPlainIcon,
    ],
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
    technologies: [
      NodejsPlainWordmarkIcon,
      (props: IconsProp) => (
        <ExpressOriginalWordmarkIcon
          {...props}
          className={`!fill-white ${props?.className}`}
        />
      ),
      (props: IconsProp) => (
        <NextjsOriginalWordmarkIcon
          {...props}
          className={`!fill-white ${props?.className}`}
        />
      ),
    ],
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
    technologies: [FlutterPlainIcon],
  },
];
const Index = () => {
  return (
    <>
      <Main
        meta={
          <Meta title={AppConfig.title} description={AppConfig.description} />
        }
      >
        <section className="min-h-screen py-8" id="about">
          <div className="absolute inset-0 flex max-w-screen-md flex-col justify-center px-6 md:inset-x-auto md:w-full md:px-0">
            <div className="w-80">
              <ThemedLogo />
            </div>

            <div className="mt-16">
              <h1 className="font-sans text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Tinsae Tasew, a fullstack developer.
              </h1>
              <p className="mt-4 max-w-screen-xl text-2xl text-gray-700 dark:text-gray-300">
                Sometimes I post blogs and some of my work over here. If you
                want to keep up with my work follow me on&nbsp;
                <a
                  href="https://github.com/iamtinsae/"
                  className="text-blue-400"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  Github
                </a>
                .
              </p>
            </div>
          </div>
          <ScrollDownButton to="works" />
        </section>
      </Main>

      <section id="works" className="">
        <Works works={works} />
      </section>
      <section id="uses" className="bg-gray-0 p-8 dark:bg-gray-900">
        <UsesSection />
      </section>
    </>
  );
};

export default Index;
