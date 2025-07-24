# Deploy com Vercel

Este guia explica como fazer deploy do Pindorama usando Vercel CLI.

## Pré-requisitos

- Conta no [Vercel](https://vercel.com)
- Node.js instalado
- Vercel CLI instalado (já configurado neste projeto)

## Primeiro Deploy

### 1. Login no Vercel
```bash
vercel login
```

### 2. Deploy inicial (preview)
```bash
npm run vercel:preview
# ou
vercel
```

### 3. Deploy para produção
```bash
npm run vercel:deploy
# ou
vercel --prod
```

## Configuração de Domínio Customizado

### Após o primeiro deploy:

1. **No dashboard do Vercel:**
   - Vá para o projeto
   - Clique em "Settings" > "Domains"
   - Adicione o domínio: `pindorama.potiguaras.org`

2. **No seu provedor de DNS:**
   - Adicione um registro CNAME:
   - Nome: `pindorama`
   - Valor: `cname.vercel-dns.com`

   **OU** um registro A:
   - Nome: `pindorama`
   - Valor: `76.76.19.61` (IP do Vercel)

3. **Aguarde a verificação do SSL** (automático)

## Scripts Disponíveis

- `npm run vercel:dev` - Executa em modo desenvolvimento com Vercel
- `npm run vercel:preview` - Deploy de preview
- `npm run vercel:deploy` - Deploy para produção
- `npm run vercel:build` - Build usando Vercel

## Configurações

### Arquivo `vercel.json`
```json
{
  "name": "pindorama",
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "regions": ["gru1"]
}
```

### Variáveis de Ambiente

Se precisar de variáveis de ambiente:

1. **No dashboard do Vercel:**
   - Settings > Environment Variables
   - Adicione as variáveis necessárias

2. **Ou via CLI:**
   ```bash
   vercel env add NEXT_PUBLIC_API_URL
   ```

## URLs Finais

Após configuração completa:
- **Produção:** `https://pindorama.potiguaras.org`
- **Preview:** `https://pindorama-git-[branch].potiguaras.org`
- **Vercel URL:** `https://pindorama.vercel.app`

## Comandos Úteis

```bash
# Ver informações do projeto
vercel ls

# Ver logs
vercel logs

# Remover deployment
vercel remove [deployment-url]

# Informações do projeto
vercel inspect
```

## Automatização com GitHub

Para deploys automáticos:

1. Conecte o repositório GitHub no dashboard do Vercel
2. Cada push na branch `main` = deploy automático
3. Cada PR = preview deployment automático

## Troubleshooting

### Build falha?
```bash
# Teste o build localmente
npm run build

# Verifique os logs
vercel logs
```

### Domínio não funciona?
- Verifique as configurações DNS
- Aguarde até 24h para propagação
- Teste com `dig pindorama.potiguaras.org`
