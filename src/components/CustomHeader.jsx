function CustomHeader({ titulo, subtitulo }) {
  return (
    <header className="custom-header">
      <h1 className="header-title">{titulo}</h1>
      <p className="header-subtitle">{subtitulo}</p>
    </header>
  );
}

export default CustomHeader;