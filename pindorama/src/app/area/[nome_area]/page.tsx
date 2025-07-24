import { Metadata } from 'next';

interface AreaPageProps {
  params: Promise<{ nome_area: string }>;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { nome_area } = await params;
  
  return {
    title: `Área: ${nome_area} - Pindorama`,
    description: `Explore a área ${nome_area} no jogo Pindorama`,
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { nome_area } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Área: {nome_area}</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <p>Bem-vindo à área <strong>{nome_area}</strong>!</p>
        <p className="mt-4 text-gray-600">
          Esta página será desenvolvida para mostrar o conteúdo específico desta área.
        </p>
      </div>
    </div>
  );
}