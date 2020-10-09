import React, { useState } from "react";

function Theme({ theme, toggleTheme }) {
  return (
    <div>
      <h1>{theme.name}</h1>
      <button onClick={toggleTheme}>Switch theme</button>
    </div>
  );
}

export default Theme;
