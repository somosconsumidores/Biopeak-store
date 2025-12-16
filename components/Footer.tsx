import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://grcwlmltlcltmwbhdpky.supabase.co/storage/v1/object/public/Geral/BioPeak%2010124-fundo%20branco.png" 
              alt="BioPeak Logo" 
              className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
            <span className="ml-3 text-sm text-gray-500">© 2024 BioPeak. Todos os direitos reservados.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Termos
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};