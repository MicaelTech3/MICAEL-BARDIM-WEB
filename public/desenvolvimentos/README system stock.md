# 📦 System Stock — Gestão Inteligente de Estoque e Requisições

O **System Stock** é uma plataforma web multi-setorial completa para **controle de estoque, gestão de requisições internas e inteligência analítica (Analytics)** em tempo real, construída com **React + Vite** e **Firebase (Authentication & Cloud Firestore)**.

---

## 🚀 Visão Geral do Sistema

O sistema foi projetado para atender empresas que possuem múltiplos setores (ex.: Almoxarifado, Cozinha, Bar, Manutenção, Limpeza, Ferramentaria) e precisam de controle rigoroso sobre entradas, saídas, custos de reposição, validade de insumos e pedidos internos entre setores.

### Principais Pilares
1. **Multi-Setor Dinâmico:** Cada empresa configura seus próprios setores personalizados com cores, ícones, PIN de segurança e permissões independentes.
2. **Dois Modos de Operação Integrados:**
   - **Sys (Admin / Gestão de Estoque):** Painel completo de administração de estoque, entradas, saídas, inventário, analytics e configurações.
   - **Requisição (`/requisicao`):** Terminal dedicado para colaboradores solicitarem materiais e insumos ao estoque com acompanhamento em tempo real.
3. **Sincronização em Tempo Real:** Todas as movimentações, alertas e requisições são sincronizadas instantaneamente via **Cloud Firestore (`onSnapshot`)**.

---

## 🧩 Módulos e Funcionalidades

### 1. Painel Principal (`/` e `/app`) — [App.jsx](src/App.jsx)
- **Dashboard do Setor:** Resumo de itens cadastrados, alertas de estoque crítico/baixo/médio e visão rápida do saldo.
- **Entrada de Mercadorias:** Registro de reposições com suporte a leitor de código de barras, lote, data de validade, fornecedor e custo unitário.
- **Saída de Mercadorias:** Baixa manual ou por código de barras com motivo da saída, responsável e registro automático no log de auditoria.
- **Gestão de Requisições:** Recebimento de pedidos enviados pelos setores com aprovação total/parcial, recusa justificada e baixa automática no estoque ao aprovar.
- **Inventário Completo:** Tabela avançada com busca instantânea, filtros por categoria e status de estoque, edição rápida e exclusão segura.
- **Criar Produtos e Categorias:** Cadastro de produtos com ou sem código de barras (geração automática de código sequencial interno) e organização por categorias.
- **Histórico / Log de Auditoria:** Rastreabilidade completa de todas as ações realizadas no setor (quem fez, quando, qual produto e quantidade).

### 2. Inteligência e Analytics — [Analytics.jsx](src/Analytics.jsx)
- **KPIs Operacionais e de Estoque:** Valor total investido em estoque, giro de mercadorias, volume de entradas e saídas por período.
- **Curva ABC e Produtos Mais Movimentados:** Identificação dos itens de maior impacto no estoque e maior frequência de consumo/saída.
- **Controle de Validade e Perdas:** Monitoramento de produtos próximos ao vencimento ou vencidos para evitar desperdícios.
- **Gráficos e Relatórios Exportáveis:** Análise temporal de entradas vs. saídas e consumo por categoria ou setor.

### 3. Configurações Avançadas — [Configuracoes.jsx](src/Configuracoes.jsx)
- **Gestão de Setores:** Criação, edição e remoção de setores da empresa.
- **Níveis de Alerta (`Thresholds`):** Definição personalizada das quantidades para estoque baixo e médio.
- **Segurança e Acessos:** Configuração de senha do aplicativo e PIN de proteção por setor.
- **Personalização de Interface:** Tema Claro/Escuro (`Light/Dark Mode`), barra de navegação inferior para dispositivos móveis e modo padrão de inicialização do app.

### 4. Terminal de Requisições (`/requisicao`) — [Requisicao.jsx](src/Requisicao.jsx)
- **Vinculação de Empresa:** Acesso rápido por ID/E-mail da empresa e senha do app (ou via link direto/QR Code `?empresa=...`).
- **Catálogo por Setor:** Solicitação de itens com sacola de pedidos, observações e acompanhamento de status em tempo real (*Pendente*, *Aprovada*, *Recusada*).

### 5. Central de Ajuda, Wiki e Cursos (`/wiki` e `/cursos`) — [Wiki.jsx](src/Wiki.jsx) & [Cursos.jsx](src/Cursos.jsx)
- Documentação interativa passo a passo com tutoriais visuais, vídeos e guias práticos para treinamento de novos colaboradores.

### 6. Painel do Desenvolvedor (`/dev`) — [DevPanel.jsx](src/DevPanel.jsx)
- Ferramentas administrativas de manutenção, diagnóstico de contas, gerenciamento de licenças/acessos e inspeção da estrutura de dados.

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologia |
| :--- | :--- |
| **Frontend** | React 19, React Router DOM 7 |
| **Build Tool** | Vite 7 |
| **Animações & UI** | CSS Custom Properties (Design System próprio), GSAP 3, Ícones SVG customizados ([icons.jsx](src/icons.jsx)) |
| **Backend / BaaS** | Firebase Authentication (E-mail/Senha & Google OAuth) |
| **Banco de Dados** | Google Cloud Firestore (NoSQL em tempo real) |
| **Hospedagem / Deploy** | Vercel (configurado via [vercel.json](vercel.json)) |

---

## 📂 Estrutura de Pastas

```text
systemStock/
├── public/                 # Arquivos estáticos, landing page e assets dos cursos/tutoriais
├── src/
│   ├── App.jsx             # Aplicação principal (Login, Setores, Dashboard, Entrada, Saída, Inventário)
│   ├── Analytics.jsx       # Módulo de BI, relatórios operacionais, gráficos e métricas de estoque
│   ├── Configuracoes.jsx   # Gestão de setores, produtos, categorias e parâmetros do sistema
│   ├── Requisicao.jsx      # App dedicado para Requisições Internas por Setor
│   ├── Wiki.jsx            # Central de documentação e tutoriais interativos
│   ├── Cursos.jsx          # Módulo de treinamento com prints e passo a passo
│   ├── DevPanel.jsx        # Painel técnico e administrativo (/dev)
│   ├── firebase.js         # Configuração e inicialização do Firebase Auth e Firestore
│   ├── icons.jsx           # Biblioteca de ícones vetoriais do sistema
│   └── main.jsx            # Ponto de entrada e definição de rotas (React Router)
├── vercel.json             # Regras de rewrites para SPA e rotas na Vercel
└── package.json            # Dependências e scripts do projeto
```

---

## 💻 Como Executar o Projeto Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gere a versão de produção (Build):**
   ```bash
   npm run build
   ```

4. **Publique na Vercel:**
   ```bash
   npx vercel --prod
   ```
