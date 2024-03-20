import {
  BashPlainIcon,
  ChromePlainIcon,
  DockerPlainIcon,
  VisualstudioPlainIcon,
} from 'react-devicons';

const usesList = [
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
  <div className="mx-auto max-w-screen-md p-8">
    <h1 className="text-5xl font-light">Uses</h1>
    {usesList.map((uses) => (
      <div className="mt-4" key={uses.name}>
        <h4 className="font-sans text-xl font-bold text-gray-900 dark:text-white md:text-2xl">
          <uses.Icon className="mr-2 inline size-8 !fill-black dark:!fill-white" />{' '}
          {uses.name}
        </h4>
        <p className="mt-4 max-w-screen-xl text-lg font-light text-gray-700 dark:text-gray-200">
          {uses.description}
        </p>
      </div>
    ))}
  </div>
);

export default UsesSection;
