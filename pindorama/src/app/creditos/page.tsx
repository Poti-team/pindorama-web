import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Créditos - Pindorama',
  description: 'Conheça a equipe por trás do Pindorama',
};

export default function CreditosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Créditos</h1>
      <div className="bg-yellow-100 p-6 rounded-lg">
        <p className="text-lg mb-4">Desenvolvido pela equipe Poti</p>
        <p className="text-gray-600">
          Agradecemos a todos que contribuíram para o desenvolvimento do Pindorama.
        </p>
      </div>
    </div>
  );
}