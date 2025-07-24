import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações para Vercel
  typescript: {
    // Durante o build, ignorar erros de TypeScript (remover em produção)
    ignoreBuildErrors: false,
  },
  eslint: {
    // Durante o build, ignorar erros de ESLint (remover em produção)
    ignoreDuringBuilds: false,
  },
  
  // Configuração de imagens para domínio customizado
  images: {
    domains: ['potiguaras.org'],
    // Adicione outros domínios conforme necessário
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.potiguaras.org',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
    ],
  },
  
  // Otimizações para performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
