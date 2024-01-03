'use client';
import { Button, ThemeProvider } from '@material-tailwind/react';

const Theme = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Theme;
