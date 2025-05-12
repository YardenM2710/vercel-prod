// src/components/Icon.js
import icons from './index';

export const Icon = ({ name, ...props }) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`Icon "${name}" does not exist.`);
    return null;
  }

  return <SvgIcon {...props} />;
};
