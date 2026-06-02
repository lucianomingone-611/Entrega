import { Link } from "react-router-dom";

const categorias = ["herramientas y equipamiento", "cableado", "notebooks"];

export const Categories = () => {
  return (
    <div>
      <h1>Categorías</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {categorias.map((cat) => (
          <Link key={cat} to={`/category/${cat}`}>
            <button id="miBoton">{cat}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};
