import { Link } from "react-router-dom";



export default function Header({openRegisterModal, openLoginModal}) {
  return (
    <header className="w-full bg-gray-800 text-white">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl m-0">Mi Empresa</h1>
        <nav>
          <ul className="flex gap-5 list-none px-0 py-0">
            <li>
              <Link className="text-white hover:underline" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/community">
                Comunidad
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="/servicios">
                Servicios
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" to="#">
                Calendario
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botones de Registro y Login en el Header */}
        <div className="flex gap-3">
          <button
            type="button"
            className="px-4 py-2 text-white rounded-md bg-blue-500"
            onClick={openRegisterModal}
          >
            Registro
          </button>
          <button
            type="button"
            className="px-4 py-2 text-white rounded-md bg-red-600"
            onClick={openLoginModal}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
