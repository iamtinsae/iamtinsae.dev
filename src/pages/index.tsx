import ScrollDownButton from '@/components/ScrollDownButton';
import ThemedLogo from '@/components/ThemedLogo';
import Works from '@/components/Works';
import { Meta } from '@/layouts/Meta';
import type { Work } from '@/lib/types';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

const works: Array<Work> = [
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
      src: '/assets/images/kasting.png',
      height: 1167,
      width: 1966,
    },
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
        <section className="min-h-screen py-8">
          <div className="absolute inset-0 flex max-w-screen-md flex-col justify-center px-6 md:inset-x-auto md:w-full md:px-0">
            <div className="w-80">
              <ThemedLogo />
            </div>

            <div className="mt-16">
              <h1 className="font-sans text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Tinsae Tasew, a developer.
              </h1>
              <p className="mt-4 text-2xl text-gray-800 dark:text-gray-300">
                Currently I am a{' '}
                <span className="cursor-pointer font-normal underline dark:text-gray-200">
                  Freelance
                </span>{' '}
                Worker and <b>2nd</b> year student at{' '}
                <span className="cursor-pointer font-normal text-gray-800 dark:text-gray-200">
                  Unity University
                </span>
                .
              </p>
              <p className="mt-4 max-w-screen-xl text-2xl text-gray-700 dark:text-gray-300">
                Sometimes I post blogs and some of my work over here. If you
                want to keep up with my work follow me on&nbsp;
                <a
                  href="https://github.com/iamtinsae/"
                  className="text-blue-400"
                >
                  Github
                </a>
                . I&apos;m also available on{' '}
                <a href="https://t.me/iamtinsae" className="text-blue-600">
                  Telegram
                </a>{' '}
                if that&apos;s your thing.
              </p>
            </div>
          </div>
          <ScrollDownButton to="works" />
        </section>
      </Main>

      <section id="works" className="">
        <Works works={works} />
      </section>
    </>
  );
};

export default Index;
