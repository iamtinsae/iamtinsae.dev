import { Link } from 'react-scroll';

type ScrollDownButtonProps = {
  to: string;
};

const ScrollDownButton = ({ to }: ScrollDownButtonProps) => (
  <div className="absolute right-8 bottom-2 -translate-y-1/2 sm:right-auto sm:left-1/2 sm:bottom-5 sm:-translate-x-1/2">
    <Link
      href={`#${to}`}
      to={to}
      as="button"
      spy
      smooth
      type="button"
      className="inline-flex animate-bounce cursor-pointer items-center rounded-full border border-transparent bg-gray-900 p-4 text-white shadow-sm focus:outline-none dark:bg-white"
      offset={4}
      duration={2.5}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white dark:text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </Link>
  </div>
);

export default ScrollDownButton;
