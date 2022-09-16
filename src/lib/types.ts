export type Work = {
  title: string;
  subTitle: string;
  description: string;
  link?: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export type PropsWithChildren = {
  children: React.ReactNode;
};
