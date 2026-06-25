import { Link } from "react-router-dom";

const categorias = ["herramientas y equipamiento", "cableado", "notebooks"];

export const Categories = () => {
  return (
    <div>
      <h1>Categorias</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {categorias.map((cat) => (
          <Link key={cat} to={`/category/${cat}`}>
            <img
              src={cat.image}
              alt={cat.name}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "8px",
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
