export interface Usuario {
    // Tabela com id (uuid) que é chave estrangeira da tabela auth.users do supabase, username (string), tempo_no_app? (time) e respostas_certas (number)
    id: string; // UUID, chave estrangeira da tabela auth.users
    username: string; // Nome de usuário
    tempo_no_app?: string; // Tempo no app, opcional
    respostas_certas: number; // Número de respostas corretas
};
