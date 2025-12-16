import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover object-center opacity-40"
          src="https://grcwlmltlcltmwbhdpky.supabase.co/storage/v1/object/public/Geral/HeroSection.png"
          alt="BioPeak Athlete"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 lg:py-32">
        <div className="md:w-2/3 lg:w-1/2">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6">
            <Zap size={14} className="mr-2" />
            Parceiros Oficiais BioPeak
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
            Potencialize sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Jornada Atlética</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Uma seleção curada de equipamentos e suplementos que integram perfeitamente com seus treinos no app BioPeak. Sem relógios caros. Sem complicação.
          </p>
          
          <div className="mt-10 flex gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Ver Produtos
            </a>
            <a
              href="https://marketing-biopeak.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800 transition-all hover:text-white"
            >
              Conhecer o App <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};