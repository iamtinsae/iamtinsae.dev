import cn from 'classnames';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { Link } from 'react-scroll';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { resumeLink } from '@/lib/constants';

type NavItemProps = {
  name: string;
  to: string;
  isLink?: boolean;
};

const NavItem = dynamic(
  () =>
    Promise.resolve((props: NavItemProps) => {
      const LinkComponent = props.isLink ? NextLink : Link;
      if (props.isLink) {
        return (
          <NextLink href={props.to} target="_blank" passHref>
            <a target={'_blank'}>
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
            </a>
          </NextLink>
        );
      }
      return (
        <LinkComponent
          href={`#${props.to}`}
          to={props.to}
          spy
          smooth
          duration={1.4}
        >
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
        </LinkComponent>
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
      <NavItem name="Uses" to="uses" />
      <NavItem name="View • Resume" to={resumeLink} isLink />
    </nav>
    <ThemeSwitcher />
  </header>
);

export { Header };
