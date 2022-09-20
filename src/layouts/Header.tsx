import cn from 'classnames';
import dynamic from 'next/dynamic';
import { Link } from 'react-scroll';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';

type NavItemProps = {
  name: string;
  to: string;
};

const NavItem = dynamic(
  () =>
    Promise.resolve((props: NavItemProps) => {
      return (
        <Link href={`#${props.to}`} to={props.to} spy smooth duration={1.4}>
          <span
            className={cn(
              'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block',
              props.to === 'about'
                ? 'font-semibold text-gray-900 dark:text-gray-200'
                : 'text-gray-600 font-normal'
            )}
          >
            <span>{props.name}</span>
          </span>
        </Link>
      );
    }),
  {
    ssr: false,
  }
);

const Header = () => (
  <header className="flex items-center justify-between py-8">
    <nav className="z-50 -ml-[0.75rem]">
      <NavItem name="Home" to="about" />
      <NavItem name="Works" to="works" />
      <NavItem name="Resume" to="resume" />
      <NavItem name="Uses" to="uses" />
    </nav>
    <ThemeSwitcher />
  </header>
);

export { Header };
