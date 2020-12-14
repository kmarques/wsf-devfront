import React from "react";
/**
 * Exo 1 - v1
 * - Créer un champs de recherche (input text + useState)
 * - Créer une liste filtrée par le champs de recherche (useState + useEffect)
 * - Utiliser la liste filtrée pour l'affichage
 */
function Search({ filter, setFilter }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    />
  );
}

export default Search;
