import { useState } from "react";

function ItemCard({ titulo, categoria, anio, destacado }) {
  const [esFavorito, setEsFavorito] = useState(false);

  const handleToggleFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  const claseTarjeta = `
    item-card
    ${destacado ? "destacado" : ""}
    ${esFavorito ? "favorito" : ""}
  `;

  return (
    <article className={claseTarjeta}>
      <h3>{titulo}</h3>
      <p>Categoría: {categoria}</p>
      <p>Año: {anio}</p>

      <button onClick={handleToggleFavorito}>
        {esFavorito ? "★ Favorito" : "☆ Agregar a favoritos"}
      </button>
    </article>
  );
}

export default ItemCard;