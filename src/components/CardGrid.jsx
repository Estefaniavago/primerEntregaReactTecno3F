import ItemCard from "./ItemCard";

function CardGrid({ items }) {
  const renderCards = items.map((item) => (
    <ItemCard
      key={item.id}
      titulo={item.titulo}
      categoria={item.categoria}
      anio={item.anio}
      destacado={item.destacado}
    />
  ));

  return (
    <section className="card-grid">
        
      {renderCards}
    </section>
  );
}

export default CardGrid;