# 🟣 PlayAds — Painel de Controle Web

> **Versão:** 7.2  
> **Tecnologias:** React 18, Firebase 10 (Auth, Realtime Database & Storage), Lucide React, ElevenLabs API, Vercel / Firebase Hosting  
> **Repositório:** [github.com/MicaelTech3/PlayAds](https://github.com/MicaelTech3/PlayAds)

---

## 📖 Visão Geral

O **PlayAds Painel Web** é a central administrativa do ecossistema PlayAds. Através de uma interface moderna e responsiva (Desktop e Mobile), o lojista ou administrador gerencia anúncios comerciais, cria locuções com inteligência artificial, programa playlists com horários e dias da semana, gera códigos de pareamento e monitora em tempo real a execução do player desktop instalado no ponto de venda.

---

## 🌐 URLs de Produção

- **Painel de Controle:** **[https://playweb.fbard.com.br](https://playweb.fbard.com.br)**  
  *(Acesso do lojista via navegador web para gerenciar anúncios, agendamentos e players)*
- **Interface do Player Desktop:** **[https://playadsw.fbard.com.br/](https://playadsw.fbard.com.br/)**  
  *(Carregada dentro do software desktop `player.py`. Se acessada no navegador comum, exibe a página para download do `PlayAds.exe`)*

---

## 🚀 Funcionalidades Principais

### 1. 📊 Dashboard em Tempo Real (`Home.jsx`)
- Saudação dinâmica com resumo de métricas:
  - Quantidade total de anúncios cadastrados.
  - Total de playlists e playlists ativas.
  - Status do player (Online / Offline).
- Acesso rápido aos anúncios recentes e playlists ativas.
- Botão de emergência **"Parar player"** para interromper qualquer reprodução no ponto de venda via comando remoto.

### 2. 🎙️ Gerador de Anúncios com IA (`NovoAnuncio.jsx`)
- Integração nativa com a API **ElevenLabs (Text-to-Speech)** para criação instantânea de locuções comerciais.
- **8 Vozes Profissionais Curadas:**
  - *George* (Calorosa / Narrador Confiante)
  - *Adam* (Firme / Comercial Profissional)
  - *Rachel* (Suave / Institucional)
  - *Antoni* (Enérgica / Vendas e Ofertas)
  - *Bella* (Jovem / Amigável)
  - *Domi* (Forte / Varejo e Liquidação)
  - *Daniel* (Autoritária / Avisos e Notícias)
  - *Charlotte* (Doce / Acolhedora)
- **Modelos Prontos:** Supermercado (Hortifrúti), Restaurante (Pizzaria), Queima de Estoque e Aviso de Fechamento de Loja.
- Pré-escuta do áudio gerado, download local e salvamento automático direto no Firebase Storage e biblioteca de anúncios.
- Suporte a chave de API customizada pelo usuário via `localStorage`.

### 3. 🗂️ Todas as Mídias (`All.jsx`)
- Visualização de toda a biblioteca em formato de **Grade (Cards)** ou **Lista**.
- Busca instantânea por nome de arquivo ou anúncio.
- Configuração rápida de repetições (loops: 1x a 10x).
- Disparo imediato com o botão **"Tocar Agora"** no player remoto.

### 4. 📤 Upload de Anúncios (`Anuncios.jsx`)
- Upload de arquivos de áudio locais (**MP3** e **WAV**) com suporte a arrastar e soltar (*drag-and-drop*).
- Barra de progresso percentual durante o envio ao **Firebase Storage**.
- Cadastro de URLs externas diretas e links de vídeos do **YouTube** (o player faz a extração de áudio automaticamente via `yt-dlp`).
- Player de áudio inline para conferência do material antes de veicular.

### 5. 📅 Agendador de Playlists (`Playlists.jsx`)
- Criação, edição, renomeação e exclusão de playlists.
- Controle liga/desliga individual por playlist com feedback visual.
- **Múltiplos Horários por Mídia:** cada faixa da playlist pode ter horários independentes no formato `HH:MM` (ex: `09:30`, `14:00`, `17:45`).
- **Dias da Semana:** seleção customizada (Dom, Seg, Ter, Qua, Qui, Sex, Sáb) com atalhos rápidos (Todos os Dias, Dias Úteis, Fim de Semana).
- Quantidade individual de repetições (*loops*) por faixa.
- Reordenação de faixas com botões de subir/descer e exclusão rápida.
- Disparo de playlist completa para teste imediato no player.

### 6. 🖥️ Gestão e Pareamento de Players (`Players.jsx`)
- **Tela unificada de pareamento:**
  - **Player Desconectado:** Exibe o código único `PLAY-XXXX-XXXX` do usuário em destaque, botão de cópia rápida e passo a passo de ativação.
  - **Player Conectado:** Exibe badge Online/Offline em tempo real (tolerância de heartbeat de 35s), nome do player, versão, sistema operacional (Windows) e o nome do anúncio que está tocando no exato momento.
- **Download do Software:** Botão integrado com link direto para download do instalador oficial `PlayAds_Setup.exe` hospedado no GitHub Releases.

### 7. 📜 Histórico de Logs (`Logs.jsx`)
- Feed em tempo real de todas as ações executadas no player desktop:
  - Início e término de playlists.
  - Mídia reproduzida com identificação de repetição (ex: `Oferta Hortifrúti (1/2)`).
  - Status operacional (`ok`, `info`, `error`).
  - Carimbo de data/hora formatado em horário local.

### 8. 📱 Experiência Mobile Responsiva (`Sidebar.jsx` & CSS)
- **Desktop (telas > 768px):** Barra lateral retrátil completa com perfil do usuário e indicador de status.
- **Mobile (telas ≤ 768px):** 
  - Barra superior (*Header*) compacta com logotipo e botão de saída.
  - Barra de navegação inferior (*Bottom Navigation*) translúcida com efeito *blur*, ícones intuitivos e área de toque otimizada para smartphones e tablets.

---

## 🗄️ Arquitetura do Banco de Dados (Firebase Realtime Database)

O sistema utiliza um modelo **multi-tenant isolado por usuário**, onde a chave do nó é o e-mail do usuário com o caractere `.` substituído por `,`:

```
/
├── codigos/
│   └── PLAY-5XZK-AGA4/
│       ├── uid: "Lh3RfmXbLhYdlq3UYuMANHzB14i1"
│       ├── email: "adm@gmail.com"
│       └── emailKey: "adm@gmail,com"
│
└── users/
    └── adm@gmail,com/
        ├── criado_em: 1773847070000
        ├── codigo: "PLAY-5XZK-AGA4"
        │
        ├── anuncios/
        │   └── -Oo0WZOO.../
        │       ├── nome: "Oferta Hortifrúti"
        │       ├── url: "https://firebasestorage.../audio.mp3"
        │       ├── filename: "1773846995644_audio.mp3"
        │       ├── tipo: "audio/mpeg"
        │       ├── tamanho: 1450200
        │       └── criado_em: 1773846995644
        │
        ├── playlists/
        │   └── -Oo0PL123.../
        │       ├── nome: "Manhã de Ofertas"
        │       ├── ativa: true
        │       ├── criado_em: 1773847070149
        │       └── itens: [
        │           {
        │             "nome": "1 andar sem filas",
        │             "url": "https://firebasestorage...",
        │             "tipo": "audio/wav",
        │             "loops": 1,
        │             "horarios": ["09:00", "14:30"],
        │             "horario": "09:00",
        │             "dias": ["seg", "ter", "qua", "qui", "sex"]
        │           }
        │         ]
        │
        ├── comandos/
        │   ├── play_now/
        │   │   ├── playlist_id: "-Oo0PL123..."
        │   │   ├── timestamp: 1773847100000
        │   │   ├── executado: true
        │   │   └── temp_playlist_id: null
        │   └── stop/
        │       ├── timestamp: 1773847150000
        │       └── executado: true
        │
        ├── player_status/
        │   ├── nome: "Player Principal"
        │   ├── last_seen: 1773847200000
        │   ├── plataforma: "Windows 10"
        │   ├── versao: "7.0"
        │   └── reproducao_atual: "1 andar sem filas (1/1)"
        │
        └── logs/
            └── -Oo0Log99.../
                ├── mensagem: "▶ 1 andar sem filas (loop 1/1)"
                ├── player_id: "PLAY-5XZK-AGA4"
                ├── status: "ok"
                └── timestamp: 1773847103943
```

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos
- **Node.js** v18+ instalado
- Gerenciador de pacotes **npm**

### Executando em Desenvolvimento:
```bash
# Entre na pasta do painel
cd "d:\System PlayAds\PlayAds"

# Instale as dependências
npm install

# Inicie o servidor local
npm start
```
O painel abrirá automaticamente em `http://localhost:3000`.

---

## 🌐 Deploy em Produção

### Deploy na Vercel (Recomendado)
O projeto conta com o arquivo `vercel.json` configurado para compatibilidade com Create React App e rotas SPA:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
1. Conecte o repositório `PlayAds` no painel da [Vercel](https://vercel.com).
2. Framework Preset: **Create React App**.
3. Output Directory: **`build`**.
4. Cada push na branch `main` gera uma compilação e publicação automática.

### Deploy no Firebase Hosting (Alternativo)
```bash
npm run build
firebase deploy --only hosting
```

---

## 🔒 Variáveis de Ambiente (`.env`)

O arquivo `.env` local pode conter chaves customizadas. O sistema já possui chaves de contingência integradas em `src/firebase.js` para garantir que o deploy nunca quebre por ausência de variáveis:

```env
REACT_APP_API_KEY=AIzaSy...
REACT_APP_AUTH_DOMAIN=anucio-web.firebaseapp.com
REACT_APP_DATABASE_URL=https://anucio-web-default-rtdb.firebaseio.com
REACT_APP_PROJECT_ID=anucio-web
REACT_APP_STORAGE_BUCKET=anucio-web.firebasestorage.app
REACT_APP_MESSAGING_SENDER_ID=389219921149
REACT_APP_APP_ID=1:389219921149:web:247f583c8c045001eaa294
REACT_APP_ELEVENLABS_API_KEY=sua_chave_elevenlabs_aqui
GENERATE_SOURCEMAP=false
```
