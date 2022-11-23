import {
  BashPlainIcon,
  ChromePlainIcon,
  DockerPlainIcon,
  LinuxPlainIcon,
  VisualstudioPlainIcon,
} from 'react-devicons';

const usesList = [
  {
    name: 'PC Spec',
    Icon: LinuxPlainIcon,
    description: (
      <>
        <b>Dell-G5</b> <i>I7</i> with <b>16GiB Ram</b> and{' '}
        <b>256 SSD & 1TB HDD</b> Running <b>Linux</b>
      </>
    ),
  },
  {
    name: 'Editor',
    Icon: VisualstudioPlainIcon,
    description: (
      <>
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
      </>
    ),
  },
  {
    name: 'Terminal',
    Icon: BashPlainIcon,
    description: (
      <>
        <a
          href="https://sw.kovidgoyal.net/kitty/"
          target={'_blank'}
          className="text-blue-600 dark:text-blue-500"
          rel="noreferrer"
        >
          Kitty
        </a>{' '}
        has been my choice of terminal.
      </>
    ),
  },
  {
    name: 'Browser',
    Icon: ChromePlainIcon,
    description: (
      <>
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
      </>
    ),
  },
  {
    name: 'Virtualization',
    Icon: DockerPlainIcon,
    description: (
      <>
        I use{' '}
        <a
          href="https://www.docker.com/"
          target={'_blank'}
          className="text-blue-600 dark:text-blue-500"
          rel="noreferrer"
        >
          Docker
        </a>{' '}
        to develop, test, and run applications.
      </>
    ),
  },
];

const UsesSection = () => (
  <div className="mx-auto max-w-screen-lg p-8">
    <div className="border border-black dark:border-white">
      <div className="border-b border-inherit p-8">
        <h1 className="text-5xl font-light">Uses</h1>
      </div>
      {usesList.map((uses, idx) => (
        <div
          key={uses.name}
          className={`block justify-between border-inherit !fill-black shadow-[inset_0_0_0_0_#31302B] transition-all duration-700 ease-in-out hover:scale-105 hover:border-white hover:!fill-white hover:text-white hover:shadow-[inset_2000px_0_0_0_#000] dark:!fill-white hover:dark:border-black hover:dark:!fill-black hover:dark:text-black hover:dark:shadow-[inset_2000px_0_0_0_#fff] md:flex ${
            idx > 0 ? 'border-t' : ''
          }`}
        >
          <div className="border-inherit p-8 md:border-r">
            <h2 className="text-3xl">
              <uses.Icon className="mr-2 inline h-8 w-8 !fill-inherit" />{' '}
              {uses.name}
            </h2>
          </div>
          <div className="flex items-center p-8">
            <p className="text-left">{uses.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default UsesSection;
