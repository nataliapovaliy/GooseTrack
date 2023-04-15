import React from 'react';
import { useState, useEffect } from 'react';
import { Input, Svg } from './ThemeToggler.styled';
import icon from './ThemeTogglerIcon.svg';

const LS_KEY = 'darkTheme';

export const ThemeToggler = () => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem(LS_KEY) === 'true' || false
  );

  useEffect(() => {
    localStorage.setItem(LS_KEY, darkTheme);
    if (darkTheme) document.body.setAttribute('dark', '');
    else document.body.removeAttribute('dark');
  }, [darkTheme]);

  return (
    <label>
      <Input
        type="checkbox"
        onChange={() => {
          setDarkTheme(!darkTheme);
        }}
      />

      <Svg>
        <use href={icon + (darkTheme ? '#sun' : '#moon')}></use>
      </Svg>
    </label>
  );
};

// Додатково в index.css треба додати
// :root {
//   --var-primary-bg-color: #cfaeae;
//   --var-primary-text-color: #484881;
// }

// [dark] {
//   --var-primary-bg-color: #484881;
//   --var-primary-text-color: #cfaeae;
// }
