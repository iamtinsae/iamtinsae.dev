import cn from 'classnames';
import Image from 'next/future/image';
import Link from 'next/link';
import * as React from 'react';

import type { Work } from '../lib/types';
import { Tile, TileBackground, TileContent, TileWrapper } from './Tile';

type PropsWithChildren = {
  children: React.ReactNode;
};

const WorkBackground = () => (
  <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    <div className="h-[30vh] bg-gray-900 dark:bg-[#000] lg:h-auto"></div>
    <div className="h-[70vh] bg-gray-50 lg:min-h-screen"></div>
  </div>
);

const WorkContainer = ({ children }: PropsWithChildren) => (
  <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    {children}
  </div>
);

const WorkDescription = ({
  children,
  progress,
}: PropsWithChildren & { progress: number }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

  return (
    <div
      className="flex h-[30vh] flex-col items-center justify-center px-20 text-3xl lg:h-auto"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

const WorkShowCase = ({
  children,
  progress,
  widthHeavy,
}: PropsWithChildren & { progress: number; widthHeavy: boolean }) => {
  const translateY = Math.max(-50, -(progress - 0.5) * 50);

  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div
        className={cn(
          'w-full px-10 pt-10 lg:pt-0 max-w-md',
          widthHeavy ? 'max-w-xl' : 'max-w-md'
        )}
      >
        {children}
      </div>
    </div>
  );
};

const WorkLink = ({ children, href }: PropsWithChildren & { href: string }) => (
  <Link href={href}>
    <a
      target="_blank"
      rel="noreferrer"
      className="underline decoration-1 underline-offset-8"
    >
      {children}
    </a>
  </Link>
);

type WorksProps = {
  works: Work[];
};

const Works = ({ works }: WorksProps) => {
  return (
    <TileWrapper numOfPages={works.length}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        {works.map((work, index) => (
          <Tile
            key={`${work.title}.${index}`}
            page={index}
            renderContent={({ progress }) => (
              <WorkContainer>
                <WorkDescription progress={progress}>
                  <div>{work.title}</div>
                  <div className="text-4xl font-semibold tracking-tight md:text-4xl">
                    <WorkLink href={work.link ?? ''}>{work.subTitle}</WorkLink>
                  </div>
                  <p className="mt-2 hidden text-2xl text-gray-200 lg:block">
                    {work.description}
                  </p>
                  <div className="flex gap-4">
                    {work.technologies.map(
                      (Icon: React.FC<{ className: string }>, idx) => (
                        <Icon className="!h-12 !w-12" key={idx} />
                      )
                    )}
                  </div>
                </WorkDescription>
                <WorkShowCase
                  progress={progress}
                  widthHeavy={work.image.width > work.image.height}
                >
                  <Image
                    src={work.image.src}
                    height={work.image.height}
                    width={work.image.width}
                    alt={work.subTitle}
                  />
                </WorkShowCase>
              </WorkContainer>
            )}
          />
        ))}
      </TileContent>
    </TileWrapper>
  );
};

export default Works;
