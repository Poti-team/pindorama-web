import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mapa - Pindorama',
  description: 'Explore o mapa do mundo Pindorama',
};

export default function MapaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mapa do Mundo</h1>
      <div className="bg-purple-100 p-6 rounded-lg">
        <p className="text-lg mb-4">Explore o mundo de Pindorama</p>
        <p className="text-gray-600">
          Aqui será implementado o mapa interativo do jogo.
        </p>
      </div>
    </div>
  );
}