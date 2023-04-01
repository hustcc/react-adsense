import { CSSProperties, useContext, useEffect } from 'react';
import { AdSenseContext } from './AdSenseContext';

export interface AdSenseProps {
  className?: string;
  style?: CSSProperties;
  client?: string;
  slot: string;
  layout?: string;
  layoutKey?: string;
  format?: string;
  responsive?: string;
}

export function AdSense({
  className = '',
  style,
  client,
  slot,
  layout,
  layoutKey,
  format = 'auto',
  responsive = 'false',
}: AdSenseProps) {
  const context = useContext(AdSenseContext);

  useEffect(() => {
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }
    window.adsbygoogle.push({});
  }, []);

  return (
    <ins
      className={`${className} adsbygoogle`}
      style={{
        display: 'block',
        ...style,
      }}
      data-ad-client={client || context.client}
      data-ad-slot={slot}
      data-ad-layout={layout}
      data-ad-layout-key={layoutKey}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    ></ins>
  );
}
