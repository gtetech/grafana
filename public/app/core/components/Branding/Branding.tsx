import { css, cx } from '@emotion/css';
import React, { useEffect, FC } from 'react';

import { colorManipulator } from '@grafana/data';
import { useTheme2, styleMixins } from '@grafana/ui';

export interface BrandComponentProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

export const LoginLogo: FC<BrandComponentProps & { logo?: string }> = ({ className, logo }) => {
  return <img className={className} src={`${logo ? logo : 'public/img/n-logo.png'}`} alt="Grafana" />;
};

const LoginBackground: FC<BrandComponentProps> = ({ className, children }) => {
  const theme = useTheme2();
  useEffect(() => {
    parent.postMessage(window.location.href, 'http://localhost:3005');
  }, []);
  const background = css`
    &:before {
      content: '';
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: url(public/img/g8_login_${theme.isDark ? 'dark' : 'light'}.svg);
      background-position: top center;
      background-size: auto;
      background-repeat: no-repeat;

      opacity: 0;
      transition: opacity 3s ease-in-out;

      @media ${styleMixins.mediaUp(theme.v1.breakpoints.md)} {
        background-position: center;
        background-size: cover;
      }
    }
  `;

  return <div className={cx(background, className)}>{children}</div>;
};

const MenuLogo: FC<BrandComponentProps> = ({ className }) => {
  return <img className={className} src="public/img/n-logo.png" alt="Narayana" />;
};

const LoginBoxBackground = () => {
  const theme = useTheme2();
  return css`
    background: ${colorManipulator.alpha(theme.colors.background.primary, 0.7)};
    background-size: cover;
  `;
};

export class Branding {
  static LoginLogo = LoginLogo;
  static LoginBackground = LoginBackground;
  static MenuLogo = MenuLogo;
  static LoginBoxBackground = LoginBoxBackground;
  static AppTitle = 'Narayana Portal';
  static LoginTitle = 'Welcome to Narayana Portal';
  static GetLoginSubTitle = (): null | string => {
    return null;
  };
}
