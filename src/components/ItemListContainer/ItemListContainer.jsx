import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getByCategory, getProducts } from "../../services/productsService";
import { useParams } from "react-router-dom";
import { Categories } from "../categories/categories";

export const ItemListContainer = () => {
  //tomamos "category" del useParams para poder filtrar
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    // Usamos la funcion con 2 uso: trae todo o filtra si category existe
    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  // No olvidar agregar "category" como variable de dependencias para que renderice nuevamente el container si cambia category

  //CON LA API FAKESTORE
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //CON LA API DUMMYJSON (OJO con respuesta en objeto. Atributo de imagen en array)
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products)) //dummyjson devuelve un objeto con clave products que tiene el array
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  //Con el JSON LOCAL
  //useEffect(() => {
  // setLoading(true);
  //
  //    fetch("/data/products.json")
  //      .then((res) => res.json())
  //      .then((data) => setProducts(data))
  //      .catch((err) => console.log("Hubo un error:", err))
  //       .finally(() => setLoading(false));
  //  }, []);

  //SOLO es para ejemplo practico porque aun nos faltan temas por ver: NO ES LA MANERA CORRECTA
  // const arrayProducts = [
  //   { id: 0, name: "Producto 1", description: "Descripcion 1", price: 123 },
  //   { id: 1, name: "Producto 2", description: "Descripcion 2", price: 456 },
  //   { id: 2, name: "Producto 3", description: "Descripcion 3", price: 789 },
  // ];

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <ItemList products={products} />
      {/*<ItemList products={category} />*/}
    </section>
  );
};
