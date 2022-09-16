import type { ReactNode } from 'react';

import { Header } from '@/layouts/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased dark:text-gray-100">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <Header />
      <main>{props.children}</main>
    </div>
  </div>
);

export { Main };
