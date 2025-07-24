import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar Perfil - Pindorama',
  description: 'Edite as informações do seu perfil',
};

export default function EditarPerfilPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Editar Perfil</h1>
      <div className="bg-orange-100 p-6 rounded-lg">
        <p className="text-lg mb-4">Personalize seu perfil</p>
        <p className="text-gray-600">
          Aqui você poderá editar suas informações pessoais e preferências.
        </p>
      </div>
    </div>
  );
}