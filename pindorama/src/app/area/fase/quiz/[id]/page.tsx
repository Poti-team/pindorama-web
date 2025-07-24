import { Metadata } from 'next';

interface QuizPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: QuizPageProps): Promise<Metadata> {
  const { id } = await params;
  
  return {
    title: `Quiz ${id} - Pindorama`,
    description: `Participe do quiz ${id} no Pindorama`,
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Quiz {id}</h1>
      <div className="bg-green-100 p-6 rounded-lg">
        <p>Bem-vindo ao quiz <strong>{id}</strong>!</p>
        <p className="mt-4 text-gray-600">
          Aqui será implementado o sistema de quiz interativo.
        </p>
      </div>
    </div>
  );
}