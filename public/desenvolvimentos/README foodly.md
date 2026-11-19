# Foodly

Painel em React, Vite e Firebase para restaurantes e lancherias. Cada conta autenticada administra seu próprio restaurante no Firestore em `restaurantes/{uid}`.

## Requisitos

- Node.js e npm
- Projeto Firebase com Authentication (E-mail/senha) e Firestore habilitados
- Regras do Firestore publicadas a partir de `firestore.rules`

## Desenvolvimento

```bash
npm install
npm run dev
```

O Vite abre o painel local. Cadastre a conta, configure os dados da loja e os horários, depois cadastre categorias e produtos. O acesso de cliente usa um link exclusivo no formato `/?loja={uid}`.

### Desenvolvimento com funções da Vercel

Para testar também os endpoints `api/*`, autentique e vincule o diretório ao projeto Foodly uma única vez e inicie o servidor Vercel:

```bash
npx vercel login
npx vercel link
npm run dev:vercel
```

Na vinculação, selecione o escopo correto e o projeto existente `foodly-dev`; não crie um projeto novo. O servidor local fica na porta exibida pelo CLI (normalmente `http://localhost:3000`). A API de pedidos aceita origens HTTP loopback (`localhost`, `127.0.0.1` e `::1`) em qualquer porta somente fora de produção; em produção, use os domínios explicitamente configurados. A API usa `FIREBASE_PROJECT_ID` e `FIREBASE_SERVICE_ACCOUNT_JSON` do ambiente local ou do ambiente Development da Vercel. Mantenha a conta de serviço somente em arquivos locais ignorados pelo Git e nunca em variáveis `VITE_*`. O fallback da SPA é aplicado a navegações HTML, preservando os pedidos da API e os módulos/HMR do Vite.

## Publicar na Vercel

1. Envie este projeto para um repositório GitHub, GitLab ou Bitbucket e importe-o no painel da Vercel.
2. Selecione **Vite** como framework, se a Vercel não o detectar automaticamente. A configuração do repositório já define `npm run build`, a pasta `dist` e o fallback das rotas React.
3. Use um runtime Node.js compatível com a Vercel. O `firebase-admin` está fixado na versão 13.4.0, cuja cadeia de autenticação CommonJS evita a incompatibilidade entre `jwks-rsa` 4 e `jose` 6.
4. Em **Settings → Environment Variables**, cadastre todas as variáveis `VITE_FIREBASE_*` listadas no `.env.example` para Production, Preview e Development, conforme necessário. Após mudar variáveis, faça um novo deploy.
5. Em **Settings → Environment Variables**, configure também as variáveis server-side:
   - `FIREBASE_PROJECT_ID`: ID do projeto Firebase.
   - `FIREBASE_SERVICE_ACCOUNT_JSON`: JSON completo de uma conta de serviço do Firebase Admin. Guarde somente como segredo da Vercel; nunca use o prefixo `VITE_`, não o coloque no `.env.local` do navegador e não o envie pelo chat.
   - `APP_ORIGIN`: origem pública autorizada, por exemplo `https://foodly-dev.vercel.app` (sem caminho). Para liberar mais origens, use `FOODLY_ALLOWED_ORIGINS` com origens separadas por vírgula.
   
   Crie a conta de serviço em **Firebase Console → Configurações do projeto → Contas de serviço**. Conceda à conta o papel mínimo necessário para ler e gravar no Firestore (por exemplo, **Cloud Datastore User**) pelo IAM. Depois de cadastrar ou trocar os segredos, faça um novo deploy.
6. Após o primeiro deploy, no Firebase Console abra **Authentication → Settings → Authorized domains** e adicione o domínio de produção da Vercel e os domínios de preview necessários.
7. Publique as regras do Firestore pelo Firebase CLI a partir deste projeto:

```bash
firebase deploy --only firestore:rules
```

Os links públicos dos restaurantes continuam no formato `https://seu-dominio.vercel.app/?loja={uid}`.

## Configuração local e segurança

Copie `.env.example` para `.env.local` e preencha os valores do app Web no Firebase Console. Arquivos `.env*` locais são ignorados pelo Git, exceto o modelo `.env.example`.

As variáveis `VITE_*` são embutidas no JavaScript enviado ao navegador: elas organizam a configuração por ambiente, mas **não são segredos**. Não coloque chaves de conta de serviço, senhas ou credenciais administrativas nelas. A segurança dos dados depende das regras do Firestore em `firestore.rules`; cadastre os domínios de produção no Firebase Authentication e restrinja a chave Web às APIs e origens necessárias no Google Cloud.

## Publicar no Firebase Hosting

```bash
npm run build
firebase deploy --only hosting,firestore:rules
```

O Firebase Hosting publica a pasta `dist` e reescreve as rotas para a entrada React. A leitura pública é restrita ao documento de cardápio, categorias e produtos ativos; alterações permanecem limitadas ao proprietário autenticado pelas regras.

## Estrutura de dados

- `restaurantes/{uid}/dados/configuracoes`: configurações privadas do restaurante.
- `restaurantes/{uid}/publico/cardapio`: informações necessárias à página pública.
- `restaurantes/{uid}/categorias`: categorias do cardápio.
- `restaurantes/{uid}/produtos`: produtos e disponibilidade.
- `restaurantes/{uid}/mesas`: mesas numeradas sequencialmente, com modo Totem ou QR Code e links exclusivos.
- `restaurantes/{uid}/mesaNumeros`: reservas internas para gerar e reutilizar o menor número de mesa livre sem duplicá-lo em criações simultâneas.
- `restaurantes/{uid}/pedidos`: pedidos recebidos e atualizados pelo proprietário autenticado.

O documento de cardápio público não deve guardar dados privados. Não habilite escrita anônima nas regras do Firestore.

## Pedidos por Totem e QR Code

Na aba **Mesas**, crie cada mesa como **Totem** (tablet fixo) ou **QR Code** (celular do cliente). O QR abre o cardápio com a loja, a mesa e o modo identificados. Os cartões de produto mostram primeiro as informações essenciais; ao personalizar, o cliente pode selecionar adicionais e remover somente os ingredientes configurados pelo restaurante no cadastro do produto. As opções e seus preços são validados pela API ao enviar o pedido. O cliente acompanha o status no mesmo dispositivo; a equipe recebe os pedidos personalizados na aba **Pedidos** e pode atualizar o status.

Na aba **Clientes**, aparecem somente as contas que fizeram pelo menos um pedido na loja; acessos e recarregamentos do cardápio não são contados nessa tela. O cliente pode opcionalmente criar/usar uma conta de e-mail e senha no cardápio. Apenas pedidos enviados enquanto conectado são associados ao e-mail/nome e aparecem na lista de clientes do restaurante. Na aba **Pedidos**, o nome e o e-mail aparecem na comanda quando o pedido foi enviado por uma conta autenticada; pedidos sem login continuam anônimos.

O painel registra a hora de cada mudança de status e mede o tempo do envio até ficar pronto. Os filtros de hoje, ontem, mês e histórico comparam rapidez/morosidade e o ritmo atual com a mediana real da própria loja. Pedidos antigos, criados antes da gravação desses horários, não recebem tempos estimados.

A criação dos pedidos usa `/api/orders` na Vercel com Firebase Admin. O servidor confirma a mesa ativa, valida os produtos ativos, calcula os valores usando os preços do Firestore e grava apenas um hash do token de acompanhamento. As regras do Firestore não precisam liberar acesso público à coleção de pedidos. O token de acompanhamento fica no fragmento local do navegador; a consulta envia o token no corpo de uma requisição HTTPS.

O endpoint aplica limites de tamanho/quantidade e um intervalo mínimo de 1,5 segundo entre pedidos da mesma mesa. Para domínios personalizados ou deploys de preview, configure `APP_ORIGIN` ou `FOODLY_ALLOWED_ORIGINS` nos respectivos ambientes da Vercel. Os endereços de deployment e domínio de produção detectados pela Vercel também são aceitos. A API depende das funções serverless da Vercel; o deploy somente no Firebase Hosting não fornece esse endpoint.

Para testar as funções da Vercel localmente, use a CLI `vercel dev` depois de configurar as variáveis de ambiente server-side. O servidor `npm run dev` do Vite sozinho não executa `/api/orders`.

## Funcionalidades ainda em migração

Consulte [FUNCIONALIDADES_PENDENTES.md](./FUNCIONALIDADES_PENDENTES.md) para os recursos do sistema antigo que ainda não foram implementados no novo painel.
# foodly-seucardapio
