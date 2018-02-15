

import { withTheme as muiWithTheme } from 'material-ui/styles';
export const withTheme = muiWithTheme;

// These functions represent a bridge between our
// components and Material UI themes.
export const getPrimaryFontWeight = (theme) => theme.typography.fontWeightMedium;
export const getPrimaryFontColor = (theme, { contrast = false } = {}) => {
  if (contrast) {
    return theme.palette.shades.dark.text.primary;
  }
  return theme.palette.primary[getPrimaryFontWeight(theme)];
};

export const getButtonTextSpacing = () => '.75px';

export const getSelectedColor = () => '#E0F7FA';

export const getAccentColor = () => '#2086BD';

export const getDarkBorderColor = () => '#bbb';

export const getLightBorderColor = () => '#ddd';

export const getItemHoverColor = () => '#F1F2F3';

export const getItemSelectionColor = () => '#E0F7FA';

export const getPrimaryColor = () => '#bd202e';
