import { Metadata } from 'next';

interface FasePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: FasePageProps): Promise<Metadata> {
  const { id } = await params;
  
  return {
    title: `Fase ${id} - Pindorama`,
    description: `Jogue a fase ${id} no Pindorama`,
  };
}

export default async function FasePage({ params }: FasePageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fase {id}</h1>
      <div className="bg-blue-100 p-6 rounded-lg">
        <p>Você está na fase <strong>{id}</strong>!</p>
        <p className="mt-4 text-gray-600">
          Aqui será implementado o conteúdo da fase específica.
        </p>
      </div>
    </div>
  );
}