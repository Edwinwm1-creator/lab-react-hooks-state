import React from 'react'

function DarkModeToggle({ isDarkMode, onDarkModeClick }) {
  return (
    <button onClick={onDarkModeClick}>
  
      {isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
