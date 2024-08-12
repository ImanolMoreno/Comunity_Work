export default function LoginModal({isLoginModalOpen, closeLoginModal}) {
  return (
    <>
      {isLoginModalOpen && (
        <div
          id="loginModal"
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <span
              className="text-gray-500 text-2xl cursor-pointer"
              onClick={closeLoginModal}
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
      )}
    </>
  );
}
