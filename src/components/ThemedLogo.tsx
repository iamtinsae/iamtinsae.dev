import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const ThemedLogo = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case 'light':
      src = '/assets/images/logo-light.png';
      break;

    case 'dark':
      src = '/assets/images/logo-dark.png';
      break;

    default:
      src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
      break;
  }

  return (
    <Image src={src} width={300} height={50} priority alt="iamtinsae.dev" />
  );
};

export default dynamic(() => Promise.resolve(ThemedLogo), {
  ssr: false,
});
