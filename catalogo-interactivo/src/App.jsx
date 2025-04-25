import { useState } from "react";
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
  const [filtro, setFiltro] = useState("");
  const [itemSeleccionado, setItemSeleccionado] = useState(null);

  const filtrarItems = items.filter((item) =>
    item.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  const manejarClic = (id) => {
    if (itemSeleccionado === id) {
      setItemSeleccionado(null);
    } else {
      setItemSeleccionado(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-500">
      <div className="p-2 max-w-[1200px] mx-auto">
        <h1 className="flex justify-center font-thin text-[40px] mb-4 text-white">Catálogo Interactivo</h1>

        <input
          type="text"
          placeholder="Buscar..."
          className="w-full p-[5px] border rounded mb-4"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />

        <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {filtrarItems.map((item) => (
            <li
              key={item.id}
              className="shadow-lg my-[7px] p-4 border rounded hover:bg-gray-900 transition cursor-pointer"
              onClick={() => manejarClic(item.id)}
            >
              <h2 className="text-gray-300 text-lg font-thin-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={obtenerIcono(item.categoria)} className="text-white" />
                {item.nombre}
              </h2>
              <p className="text-sm font-thin text-gray-200">{item.categoria}</p>

              {itemSeleccionado === item.id && (
                <p className="mt-2 text-sm text-gray-200">{item.descripcion}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
