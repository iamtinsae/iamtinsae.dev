import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';

type NavItemProps = {
  name: string;
  href: string;
};

const NavItem = (props: NavItemProps) => {
  const router = useRouter();
  const isActive = router.asPath === props.href;

  return (
    <Link href={props.href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span>{props.name}</span>
      </a>
    </Link>
  );
};

const Header = () => (
  <header className="flex items-center justify-between py-8">
    <nav className="z-50 -ml-[0.75rem]">
      <NavItem name="Home" href="/" />
      <NavItem name="Works" href="/works" />
      <NavItem name="Resume" href="/resume" />
      <NavItem name="Uses" href="/uses" />
    </nav>
    <ThemeSwitcher />
  </header>
);

export { Header };
