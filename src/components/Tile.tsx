import * as React from 'react';

import type { PropsWithChildren } from '@/lib/types';

import { ScrollContext } from './ScrollObserver';

type WrapperProps = {
  numOfPages: number;
  children: React.ReactNode;
};

type TileContextValue = {
  numOfPages: number;
  currentPage: number;
};

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper = ({ numOfPages, children }: WrapperProps) => {
  const { scrollY } = React.useContext(ScrollContext);
  const refContainer = React.useRef<HTMLDivElement>(null);
  let currentPage = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenHeight = window.innerHeight;
    const halfScreenHeight = screenHeight / 2;
    const percentY =
      Math.min(
        clientHeight + halfScreenHeight,
        Math.max(-screenHeight, scrollY - offsetTop) + halfScreenHeight
      ) / clientHeight;

    currentPage = percentY * numOfPages;
  }
  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-gray-900 text-white"
        style={{
          height: `${numOfPages * 100}vh`,
        }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground = ({ children }: PropsWithChildren) => (
  <div className="absolute h-full w-full">{children}</div>
);

export const TileContent = ({ children }: PropsWithChildren) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

type TileProps = {
  page: number;
  renderContent: (props: { progress: number }) => any;
};

export const Tile = ({ page, renderContent }: TileProps) => {
  const { currentPage, numOfPages } = React.useContext(TileContext);
  const progress = Math.max(0, currentPage - page);
  const refContainer = React.useRef<HTMLDivElement>(null);

  let opacity = Math.min(1, Math.max(0, progress * 4));

  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
