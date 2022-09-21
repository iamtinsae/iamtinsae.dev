import ScrollDownButton from '@/components/ScrollDownButton';
import ThemedLogo from '@/components/ThemedLogo';
import Works from '@/components/Works';
import { Meta } from '@/layouts/Meta';
import { works } from '@/lib/data';
import { Main } from '@/templates/Main';
import { AppConfig } from '@/utils/AppConfig';

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
      <section id="uses" className="bg-gray-50 p-8 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md p-8">
          <h1 className="curved-underline my-8 text-5xl text-gray-900 dark:text-gray-200">
            Uses
          </h1>
          <p className="text-lg dark:text-gray-300">
            My most frequently used softwares. Currently I&apos;m using{' '}
            <b>macOS</b> on my <b>Dell-G5</b> that has <b>core i7</b> processor
            and <b>16GiB</b> of ram.
          </p>
          <h1 className="curved-underline my-8 text-2xl text-gray-900 dark:text-gray-200">
            Editor + Terminal
          </h1>
          <ul className="list-[square] text-xl text-gray-800 dark:text-gray-200">
            <li>
              I&apos;ve been using{' '}
              <a
                href="https://code.visualstudio.com/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Visual Studio Code
              </a>{' '}
              for the past 3-4 years.
            </li>
            <li>
              <a
                href="https://iterm2.com/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                iTerm
              </a>{' '}
              has been my choice of terminal.
            </li>

            <li>
              I&apos;ve been using{' '}
              <a
                href="https://www.google.com/chrome/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Chrome
              </a>{' '}
              as my main browser.
            </li>
          </ul>

          <h1 className="curved-underline my-8 text-2xl text-gray-900 dark:text-gray-200">
            Desktop Apps
          </h1>
          <ul className="list-[square] text-xl text-gray-800 dark:text-gray-200">
            <li>
              I use{' '}
              <a
                href="https://www.raycast.com/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Raycast
              </a>{' '}
              as my default launcher. I switched recently from{' '}
              <a href="">Alfred</a> for it&apos;s simplicity and features.
            </li>

            <li>
              <a
                href="https://telegram.org/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Telegram
              </a>{' '}
              has been my main communication software for the past years.
            </li>
            <li>
              I use{' '}
              <a
                href="https://www.vagrantup.com/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Vagrant
              </a>{' '}
              with Virtual Box for virtualization.
            </li>

            <li>
              Been using{' '}
              <a
                href="https://www.genymotion.com/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Genymotion
              </a>{' '}
              as my android emulator.
            </li>

            <li>
              <a
                href="https://www.spotify.com/"
                target={'_blank'}
                className="text-blue-600 dark:text-blue-500"
                rel="noreferrer"
              >
                Spotify
              </a>{' '}
              for listening to musics and podcasts.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Index;
