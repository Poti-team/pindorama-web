import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfil - Pindorama',
  description: 'Seu perfil de jogador no Pindorama',
};

export default function PerfilPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>
      <div className="bg-indigo-100 p-6 rounded-lg">
        <p className="text-lg mb-4">Bem-vindo ao seu perfil!</p>
        <p className="text-gray-600">
          Aqui você poderá ver suas conquistas, progresso e estatísticas.
        </p>
      </div>
    </div>
  );
}