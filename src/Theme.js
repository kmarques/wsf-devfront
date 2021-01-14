import React from "react";

//props: {children} || {theme, toggleTheme}
function Theme(props) {
  const theme = props.theme;
  const toggleTheme = props.toggleTheme;

  return (
    <div>
      <h1>{theme.name}</h1>
      <button onClick={toggleTheme}>Switch theme</button>
    </div>
  );
}

export default Theme;
