import Image from 'next/image';
/*
This component is needed because the next/image
does not honor the basePath directive in
next.config.js.

The recommended approach is to optionally insert the
basePath in src attributed for each use. This wrapper
makes a more convenient way to do that instead of having
conditionals at each use.

 */
function ExportedImage({ src, ...rest }) {
  const basePath = process.env.BASE_PATH || ''
  return (
    <Image {...rest} src={basePath + src} alt=""  loading="lazy"  decoding="async" />
    
  );
}

export default ExportedImage;