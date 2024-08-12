import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Navegación del Footer */}
        <nav className="mb-4">
          <ul className="flex justify-center gap-6">
            <li><a href="#" className="hover:underline">Complementos</a></li>
            <li><a href="#" className="hover:underline">Comunidad</a></li>
            <li><a href="#" className="hover:underline">Nosotros</a></li>
            <li><a href="#" className="hover:underline">Soporte</a></li>
            <li><a href="#" className="hover:underline">Grupos</a></li>
          </ul>
        </nav>
        
        {/* Redes Sociales */}
        <div className="flex justify-center gap-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-center">© 2024 Mi Empresa</p>
      </div>
    </footer>
  );
}
