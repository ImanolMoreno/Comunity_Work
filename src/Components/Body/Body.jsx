import React from 'react';

export default function Body() {
  return (
    <main>
      {/* Sección Hero */}
      <section className="hero bg-gray-200 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Servicios de Apoyo por Internet y Bases de Datos</h1>
          <p className="text-lg mb-6">Ofrecemos soluciones integrales para la gestión y soporte de tus bases de datos en la nube.</p>
          <a href="#services" className="btn btn-primary bg-blue-500 text-white px-6 py-2 rounded">Descubre Más</a>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="services" className="services bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Consultoría en Bases de Datos</h3>
              <p>Asesoramiento experto para optimizar y gestionar tus bases de datos.</p>
            </div>
            <div className="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Soporte Técnico 24/7</h3>
              <p>Asistencia técnica disponible en cualquier momento para resolver tus problemas.</p>
            </div>
            <div className="service-item p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">Implementación en la Nube</h3>
              <p>Soluciones de bases de datos en la nube para mejorar la accesibilidad y seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Presentación y Búsqueda */}
      <section id="presentation-search" className="presentation-search bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Explora Nuestras Soluciones</h2>
          <div className="presentation-windows grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="presentation-item p-4 bg-gray-100 rounded-lg shadow-lg">
              <img src="/path/to/window1.jpg" alt="Ventana 1" className="mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Gestión de Bases de Datos</h3>
              <p>Descubre cómo mejorar la eficiencia de tu gestión de bases de datos.</p>
            </div>
            <div className="presentation-item p-4 bg-gray-100 rounded-lg shadow-lg">
              <img src="/path/to/window2.jpg" alt="Ventana 2" className="mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Implementaciones en la Nube</h3>
              <p>Optimiza tus recursos con soluciones en la nube.</p>
            </div>
            <div className="presentation-item p-4 bg-gray-100 rounded-lg shadow-lg">
              <img src="/path/to/window3.jpg" alt="Ventana 3" className="mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">Seguridad y Soporte</h3>
              <p>Protege tus datos con nuestras soluciones de seguridad.</p>
            </div>
          </div>
          <div className="search-section">
            <h2 className="text-2xl font-bold mb-4">¿Qué necesitas?</h2>
            <input
              type="text"
              id="search-input"
              placeholder="Buscar servicios o soluciones..."
              className="w-full p-3 border border-gray-300 rounded mb-4"
            />
            <ul id="search-suggestions" className="search-suggestions list-none p-0">
              {/* Las recomendaciones de búsqueda se llenarán dinámicamente con JavaScript */}
            </ul>
          </div>
        </div>
      </section>

      <div id="react-root"></div>
    </main>
  );
}
