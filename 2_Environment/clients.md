# 🖥️ Clients Guide — Windows, Mac & AI Clients

## 🪟 Windows Client Setup

### Required Software
| Software | Version | Download | Notes |
|----------|---------|----------|-------|
| Roblox Studio | Latest | [roblox.com/create](https://www.roblox.com/create) | Free |
| Docker Desktop | Latest | [docker.com/desktop](https://www.docker.com/products/docker-desktop/) | WSL2 backend |
| Ollama | Latest | [ollama.ai](https://ollama.ai) | Runs as system tray app |
| VS Code | Latest | [code.visualstudio.com](https://code.visualstudio.com) | |
| Node.js (LTS) | 20+ | [nodejs.org](https://nodejs.org) | For Claude Code CLI |
| Python | 3.11+ | [python.org](https://python.org) | For embedding scripts |
| Git | Latest | [git-scm.com](https://git-scm.com) | |

### VS Code Extensions (Windows)
```
luau-lsp          → Luau Language Server for Roblox
ms-python.python  → Python support
ms-azuretools.vscode-docker → Docker integration
continue.continue → Continue.dev AI (uses local Ollama)
```

### Setup Commands (PowerShell)
```powershell
# Install Ollama model
ollama pull nomic-embed-text

# Clone repo
git clone https://github.com/rifaterdemsahin/memory-palace.git
cd memory-palace

# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Start infrastructure
docker compose up -d

# Run embedding pipeline
python 5_Symbols/embed_documents.py

# Serve locally
python -m http.server 8080
```

---

## 🍎 Mac Client Setup

### Required Software
| Software | Version | Download | Notes |
|----------|---------|----------|-------|
| Roblox Studio | Latest | Mac App Store or [roblox.com/create](https://www.roblox.com/create) | Free |
| Docker Desktop | Latest | [docker.com/desktop](https://www.docker.com/products/docker-desktop/) | Apple Silicon native |
| Ollama.app | Latest | [ollama.ai](https://ollama.ai) | Lives in menu bar |
| VS Code | Latest | [code.visualstudio.com](https://code.visualstudio.com) | |
| Homebrew | Latest | [brew.sh](https://brew.sh) | Package manager |
| Node.js | 20+ | `brew install node` | |
| Python | 3.11+ | `brew install python` | |

### Setup Commands (Terminal / Zsh)
```bash
# Install Homebrew (if not present)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install tools
brew install node python git

# Pull Ollama model
ollama pull nomic-embed-text

# Clone repo
git clone https://github.com/rifaterdemsahin/memory-palace.git
cd memory-palace

# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Start infrastructure
docker compose up -d

# Serve locally
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## 🤖 AI Client Setup

### Claude Code (Anthropic)
```bash
# Install
npm install -g @anthropic-ai/claude-code

# Set API key
export ANTHROPIC_API_KEY=sk-ant-your-key-here

# Run in project
cd memory-palace
claude

# Config file read by Claude
# → claude.md (in repo root)
```

### Kilocode (VS Code Extension)
1. Install from VS Code Marketplace: search **Kilocode**
2. Open the Memory Palace folder in VS Code
3. Kilocode auto-reads `kilocode.md` for rules
4. Use the Kilocode panel to run tasks

### Cursor IDE
1. Download from [cursor.sh](https://cursor.sh)
2. Open memory-palace folder
3. Cursor reads `.cursorrules` — create one pointing to `aigent.md`:
```
See aigent.md for all project rules.
```

### Continue.dev (VS Code Extension)
```json
// .continue/config.json
{
  "models": [{
    "title": "Ollama (local)",
    "provider": "ollama",
    "model": "llama3.2",
    "apiBase": "http://localhost:11434"
  }],
  "embeddingsProvider": {
    "provider": "ollama",
    "model": "nomic-embed-text",
    "apiBase": "http://localhost:11434"
  }
}
```

---

## 🐳 Docker / Infrastructure Client

### docker-compose.yml (in repo root)
See `4_Formula/qdrant_ollama_setup.md` for the full Docker Compose configuration.

```bash
# Start all services
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f

# Stop
docker compose down
```

### Ports
| Service | Port | URL |
|---------|------|-----|
| Qdrant REST | 6333 | http://localhost:6333 |
| Qdrant gRPC | 6334 | grpc://localhost:6334 |
| Qdrant Dashboard | 6333 | http://localhost:6333/dashboard |
| Ollama API | 11434 | http://localhost:11434 |
