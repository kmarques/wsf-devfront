import React, { useState } from "react";
/**
 * Exo 1 - v1
 * - Créer un champs de recherche (input text + useState)
 * - Créer une liste filtrée par le champs de recherche (useState + useEffect)
 * - Utiliser la liste filtrée pour l'affichage
 */
function SearchAutocomplete({ filter, setFilter, choices }) {
  const [value, setValue] = useState(filter);
  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {value !== "" && (
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            position: "absolute",
            width: "100%",
            bottom: 0,
            left: 0,
          }}
        >
          <ul>
            {choices
              .filter((choice) => choice.toString().startsWith(value))
              .map((choice) => (
                <li
                  key={choice}
                  style={{
                    backgroundColor: choice === filter ? "red" : "white",
                  }}
                  onClick={() => {
                    setFilter(choice);
                    setValue("");
                  }}
                >
                  {choice}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchAutocomplete;
