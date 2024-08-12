
import { Link } from 'react-router-dom';

export default function Header() {
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
            onClick={() =>
              document
                .getElementById("registerModal")
                .classList.remove("hidden")
            }
          >
            Registro
          </button>
          <button
            type="button"
            className="px-4 py-2 text-white rounded-md bg-red-600"
            onClick={() =>
              document.getElementById("loginModal").classList.remove("hidden")
            }
          >
            Login
          </button>
        </div>

        {/* Modal de Registro */}
        <div
          id="registerModal"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 hidden"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <span
              className="text-gray-500 text-2xl cursor-pointer"
              onClick={() =>
                document.getElementById("registerModal").classList.add("hidden")
              }
            >
              &times;
            </span>
            <h2 className="text-xl font-bold mb-4">Registro</h2>
            <form id="registerForm" action="/register" method="POST">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                required
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo Electrónico"
                required
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                required
                className="mb-4 p-2 w-full border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                Registrar
              </button>
            </form>
            <div id="register-success-message"></div>
            <div id="register-error-message"></div>
          </div>
        </div>

        {/* Modal de Login */}
        <div
          id="loginModal"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 hidden"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <span
              className="text-gray-500 text-2xl cursor-pointer"
              onClick={() =>
                document.getElementById("loginModal").classList.add("hidden")
              }
            >
              &times;
            </span>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form id="loginForm" method="POST">
              <input
                type="email"
                id="loginEmail"
                name="email"
                placeholder="Correo Electrónico"
                required
                className="mb-2 p-2 w-full border border-gray-300 rounded"
              />
              <input
                type="password"
                id="loginPassword"
                name="password"
                placeholder="Contraseña"
                required
                className="mb-4 p-2 w-full border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                Ingresar
              </button>
            </form>
            <div id="login-success-message"></div>
            <div id="login-error-message"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
