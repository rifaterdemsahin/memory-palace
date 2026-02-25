# 🏛️ Memory Palace — Self-Learning System

> Memory palaces to trigger self-learning using **Roblox Studio** and AI agents to build the code.

🌐 **Live Site:** [rifaterdemsahin.github.io/memory-palace](https://rifaterdemsahin.github.io/memory-palace)
🐙 **GitHub:** [github.com/rifaterdemsahin/memory-palace](https://github.com/rifaterdemsahin/memory-palace)
💼 **LinkedIn:** [linkedin.com/in/rifaterdemsahin](https://www.linkedin.com/in/rifaterdemsahin/)
🎥 **YouTube:** [youtube.com/@RifatErdemSahin](https://www.youtube.com/@RifatErdemSahin)

---

## 🗺️ The Journey

The structure follows: **Unknown Problem → Understood Solution → Proven Result**

| # | Folder | Purpose | Link |
|---|--------|---------|------|
| 1 | [`1_Real_Unknown/`](1_Real_Unknown/index.html) | OKRs, goals, the question you can't yet answer | [→](https://rifaterdemsahin.github.io/memory-palace/1_Real_Unknown/index.html) |
| 2 | [`2_Environment/`](2_Environment/index.html) | Roadmap, use cases, clients, constraints | [→](https://rifaterdemsahin.github.io/memory-palace/2_Environment/index.html) |
| 3 | [`3_Simulation/`](3_Simulation/index.html) | UI mockups, prototypes, image carousel | [→](https://rifaterdemsahin.github.io/memory-palace/3_Simulation/index.html) |
| 4 | [`4_Formula/`](4_Formula/index.html) | Step-by-step guides and recipes | [→](https://rifaterdemsahin.github.io/memory-palace/4_Formula/index.html) |
| 5 | [`5_Symbols/`](5_Symbols/index.html) | Core source code (the formula made real) | [→](https://rifaterdemsahin.github.io/memory-palace/5_Symbols/index.html) |
| 6 | [`6_Semblance/`](6_Semblance/index.html) | Errors, near-misses, fixes, workarounds | [→](https://rifaterdemsahin.github.io/memory-palace/6_Semblance/index.html) |
| 7 | [`7_Testing_Known/`](7_Testing_Known/index.html) | Test checklists, acceptance criteria | [→](https://rifaterdemsahin.github.io/memory-palace/7_Testing_Known/index.html) |

---

## 🛠️ Tech Stack
- 🎮 **Roblox Studio** + Luau — 3D memory palace environment
- 🤖 **Ollama** (`nomic-embed-text`, 4096 ctx) — local AI embeddings
- 🗄️ **Qdrant** — vector database for semantic search
- 🐳 **Docker** — containerised infrastructure
- 🌐 **GitHub Pages** — static site deployment
- 📖 **Markdown Renderer** — in-browser markdown viewer with PrismJS

---

## 🚀 Quick Start

### View the site
Visit: [rifaterdemsahin.github.io/memory-palace](https://rifaterdemsahin.github.io/memory-palace)

### Run locally
```bash
# Clone the repo
git clone https://github.com/rifaterdemsahin/memory-palace.git
cd memory-palace

# Serve with any static server
python3 -m http.server 8080
# Then open http://localhost:8080
```

### Start AI infrastructure (Qdrant + Ollama)
```bash
docker compose up -d
```
See [`4_Formula/qdrant_ollama_setup.md`](4_Formula/qdrant_ollama_setup.md) for full setup.

---

## 📖 Key Documents
- [Roblox vs SketchUp](https://rifaterdemsahin.github.io/memory-palace/markdown_renderer.html?file=4_Formula/formula_roblox_versus_sketchup.md)
- [Qdrant + Ollama Setup](https://rifaterdemsahin.github.io/memory-palace/markdown_renderer.html?file=4_Formula/qdrant_ollama_setup.md)
- [Agent Rules](https://rifaterdemsahin.github.io/memory-palace/markdown_renderer.html?file=aigent.md)
- [Test Checklist](https://rifaterdemsahin.github.io/memory-palace/markdown_renderer.html?file=7_Testing_Known/test_checklist.md)

---

## 🤖 AI Agent Files
| File | Purpose |
|------|---------|
| [`aigent.md`](aigent.md) | General rules for any AI agent |
| [`claude.md`](claude.md) | Claude Code specific rules |
| [`kilocode.md`](kilocode.md) | Kilocode specific rules |

---

## 🔗 Navigation
All pages share a **responsive sidebar menu** with bidirectional links between all sections.
Add `?debug=true` to any URL to enable debug mode.

---

*🏛️ Built with ❤️ by [Rifat Erdem Sahin](https://www.linkedin.com/in/rifaterdemsahin/)*
