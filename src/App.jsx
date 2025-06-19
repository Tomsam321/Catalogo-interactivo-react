import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShirt,
  faShoePrints,
  faBagShopping,
  faHatCowboy,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  { id: 1, nombre: "Camiseta Roja", categoria: "Ropa", descripcion: "Camiseta cómoda y de alta calidad en color rojo." },
  { id: 2, nombre: "Zapatos Deportivos", categoria: "Calzado", descripcion: "Zapatos perfectos para correr o hacer deporte." },
  { id: 3, nombre: "Pantalón Negro", categoria: "Ropa", descripcion: "Pantalón de corte clásico, ideal para cualquier ocasión." },
  { id: 4, nombre: "Gorra Azul", categoria: "Accesorios", descripcion: "Gorra ajustable de color azul, muy cómoda para el verano." },
  { id: 5, nombre: "Reloj Digital", categoria: "Accesorios", descripcion: "Reloj con pantalla digital, con cronómetro y alarma." },
  { id: 6, nombre: "Sandalias", categoria: "Calzado", descripcion: "Sandalias ligeras y cómodas para el verano." },
  { id: 7, nombre: "Bufanda", categoria: "Ropa", descripcion: "Bufanda de lana suave y cálida para los días fríos." },
  { id: 8, nombre: "Bolso de Mano", categoria: "Accesorios", descripcion: "Bolso elegante de mano, ideal para una salida especial." },
  { id: 9, nombre: "Chaqueta", categoria: "Ropa", descripcion: "Chaqueta ligera y resistente al viento, perfecta para primavera." },
  { id: 10, nombre: "Tenis Blancos", categoria: "Calzado", descripcion: "Tenis blancos, cómodos y versátiles para cualquier ocasión." },
  { id: 11, nombre: "Sombrero", categoria: "Accesorios", descripcion: "Sombrero elegante para protegerte del sol." },
  { id: 12, nombre: "Camiseta Blanca", categoria: "Ropa", descripcion: "Camiseta blanca básica, un esencial en cualquier guardarropa." },
  { id: 13, nombre: "Botas", categoria: "Calzado", descripcion: "Botas resistentes y cómodas para el invierno." },
  { id: 14, nombre: "Lentes de Sol", categoria: "Accesorios", descripcion: "Lentes de sol con protección UV, estilo moderno y cómodo." },
  { id: 15, nombre: "Shorts", categoria: "Ropa", descripcion: "Shorts cómodos para los días calurosos de verano." },
  { id: 16, nombre: "Sueter", categoria: "Ropa", descripcion: "Sueters cómodos para los días frios de invierno." },
];

const obtenerIcono = (categoria) => {
  switch (categoria) {
    case "Ropa":
      return faShirt;
    case "Calzado":
      return faShoePrints;
    case "Accesorios":
      return faBagShopping;
    default:
      return faHatCowboy;
  }
};

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filtro = searchParams.get("buscar") || "";

  const manejarCambio = (e) => {
    const valor = e.target.value;
    if (valor) {
      setSearchParams({ buscar: valor });
    } else {
      setSearchParams({});
    }
  };

  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const filtrarItems = items.filter((item) =>
    item.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const manejarClic = (id) => {
    setItemSeleccionado(itemSeleccionado === id ? null : id);
  };

  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60" />

      <section className="relative z-10 p-4 max-w-[1200px] mx-auto">
        <header>
          <h1 className="text-center font-thin text-4xl mb-4 text-white">
            Catálogo Interactivo
          </h1>
        </header>

        <section aria-label="Buscador">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full p-2 border rounded mb-4"
            value={filtro}
            onChange={manejarCambio}
          />
        </section>

        <section aria-label="Listado de productos">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtrarItems.map((item) => (
              <article
                key={item.id}
                className="bg-gray-800/70 text-white shadow-lg p-4 border rounded-2xl hover:bg-gray-900 transition cursor-pointer"
                onClick={() => manejarClic(item.id)}
                role="button"
                tabIndex="0"
              >
                <h2 className="text-lg font-medium flex items-center gap-2">
                  <FontAwesomeIcon icon={obtenerIcono(item.categoria)} className="text-white" />
                  {item.nombre}
                </h2>
                <p className="text-sm text-gray-300">{item.categoria}</p>

                {itemSeleccionado === item.id && (
                  <p className="mt-2 text-sm text-gray-200">{item.descripcion}</p>
                )}
              </article>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
