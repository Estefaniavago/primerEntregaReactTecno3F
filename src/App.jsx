import "./App.css";
import { useState } from "react";
import CustomHeader from "./components/CustomHeader";
import CardGrid from "./components/CardGrid";
import { catalogo } from "./data";

function App() {
  const [busqueda, setBusqueda] = useState("");

  const handleBusquedaChange = (event) => {
    setBusqueda(event.target.value);
  };

  const itemsFiltrados = catalogo.filter((item) =>
    item.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <CustomHeader
        titulo="CATALOGO INTERACTIVO"
        subtitulo="Explorá videojuegos y animes destacados"
      />

      <main>
        <div className="search-container">
          <span className="search-icon">🔍</span>
             <input
                type="text"
                placeholder="Buscar por título..."
                value={busqueda}
                onChange={handleBusquedaChange}
                className="search-input"
              />
        </div>
        <CardGrid items={itemsFiltrados} />
      </main>

      <footer className="app-footer">
  <p>
    Catálogo Interactivo | {new Date().getFullYear()} | Desarrollado por Estefanía Vago
  </p>
</footer>
    </>
  );
}

export default App;