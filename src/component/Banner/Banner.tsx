import { ReactNode } from 'react';
import './Banner.scss';

type BannerProps = {
  src: string;
  children: ReactNode;
};

export function Banner({ src, children }: BannerProps) {
  return (
    <div className="hero">
      <img className="hero__banner" src={src} alt="banner"></img>
      {children}
    </div>
  );
}
