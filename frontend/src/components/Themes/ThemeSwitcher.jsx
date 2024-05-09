import React, { useState } from 'react';
import './ThemeSwitcher.scss'

const ThemeSwitcher = ({activeTheme ,setActiveTheme, theme}) => {

  const themes = {
    theme1: {
      backgroundColor: '#007bff',
      secondaryColor: '#6c757d',
      color1: 'white',
      color2: 'black',
    },  
    theme2: {
      backgroundColor: '#17a2b8',
      secondaryColor: '#363a40',
      color1: 'blue',
      color2: 'black',
    },
    theme3: {
      backgroundColor: '#17a2b8',
      secondaryColor: '#323a40',
      color1: 'red',
      color2: 'black',
    },
    theme4: {
      backgroundColor: '#17a2b8',
      secondaryColor: '#873a40',
      color1: 'green',
      color2: 'black',
    },
    theme5: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme6: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme7: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme8: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme9: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme10: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme11: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme12: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme13: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme14: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme15: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme16: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme17: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme18: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme19: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
    theme20: {
      backgroundColor: '#1562b8',
      secondaryColor: '#863a40',
      color1: 'grey',
      color2: 'black',
    },
  };

  const buttonStyle = {
    minWidth: '30px',
    height: '10px',
    padding: '0',
    background: 'none',
    border: '2px solid grey',
    borderRadius: '2px',
    position: 'relative',
    overflow: 'hidden',
    // transform: 'rotate(-45deg)',
  };

  const handleThemeChange = (theme) => {
    setActiveTheme(theme);
  };

  console.log(activeTheme);

  return (
    <div className='ThemeButtonsContainer'>
      {Object.keys(themes).map((themeKey, index) => (
        <button
          key={index}
          style={{
            ...buttonStyle,
            borderColor: activeTheme === themeKey ? 'blue' : 'grey',
            margin: '2px',
          }}
          onClick={() => handleThemeChange(themeKey)}
        >
          <span
            style={{
              position: 'absolute',
              width: '50%',
              height: '100%',
              background: themes[themeKey].color2,
              left: '0',
              top: '0',
            }}
          ></span>
          <span
            style={{
              position: 'absolute',
              width: '50%',
              height: '100%',
              background: themes[themeKey].color1,
              right: '0',
              top: '0',
            }}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
