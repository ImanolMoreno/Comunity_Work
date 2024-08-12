export default function RegisterModal({ isRegisterModalOpen, closeRegisterModal }) {
  return (
    <>
      {isRegisterModalOpen && (//se pone la variable para verificar: "&&" para condicionar 
        <div
          id="registerModal"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <span
              className="text-gray-500 text-2xl cursor-pointer"
              onClick={closeRegisterModal}
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
      )}
    </>
  );
}
