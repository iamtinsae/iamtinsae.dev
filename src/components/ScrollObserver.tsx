import * as React from 'react';

type ScrollValue = {
  scrollY: number;
  scrollHeight: number;
};

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
  scrollHeight: 0,
});

type ScrollObserverProps = {
  children: React.ReactNode;
};

export const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = React.useState<number>(0);
  const [scrollHeight, setScrollHeight] = React.useState<number>(0);

  const handleScroll = React.useCallback(() => {
    setScrollY(window.scrollY);
    setScrollHeight(document.body.scrollHeight);
  }, []);

  React.useEffect(() => {
    document.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY, scrollHeight }}>
      {children}
    </ScrollContext.Provider>
  );
};
