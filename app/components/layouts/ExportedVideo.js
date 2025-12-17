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
function ExportedVideo({ src, ...rest }) {
  const basePath = process.env.BASE_PATH || ''
  return (
    <video width="100%" preload="none" loop autoPlay playsInline muted controls {...rest}><source src={basePath + src} type="video/mp4" /></video>
  );
}

export default ExportedVideo;