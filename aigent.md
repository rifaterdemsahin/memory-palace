# 🤖 Agent Rules — aigent.md
> General rules for **any AI agent** working in this repository.

## 🎯 Project Intent
Memory palaces to trigger self-learning using **Roblox Studio** and AI agents to build the code.
The system follows: **Unknown → Environment → Simulation → Formula → Symbols → Semblance → Testing**

---

## 📁 Folder Structure Rules
| Folder | Purpose | Rule |
|--------|---------|------|
| `1_Real_Unknown/` | Problem definition, OKRs | Read-only after planning phase |
| `2_Environment/` | Context, roadmap, clients | Update when environment changes |
| `3_Simulation/` | Mockups, prototypes, carousel | Add images to `images/` and update `images.json` |
| `4_Formula/` | Step-by-step guides | Source of truth for implementation steps |
| `5_Symbols/` | Source code | Working code only — no stubs |
| `6_Semblance/` | Error logs | Log every error with cause + fix |
| `7_Testing_Known/` | Test checklists | Must reference `1_Real_Unknown` OKRs |
| `obsolete/` | Deprecated content | Move, never delete |

---

## ✅ General Agent Behaviour
1. **Always read before editing** — understand existing code before modifying.
2. **Commit after every meaningful activity** — `git add . && git commit -m "..."`.
3. **Push after commits** — `git push origin main`.
4. **Log errors in `6_Semblance/error_log.md`** — cause, fix, workaround.
5. **Update test checklists in `7_Testing_Known/`** when new features are added.
6. **Never delete files** — move to `obsolete/` sub-folder instead.
7. **Update `3_Simulation/images/images.json`** when new simulation images are added.
8. **Keep the shared menu (`assets/menu.js`) updated** if sections are added.
9. **Mobile-first HTML** — always use responsive design.
10. **Use emojis** where they add clarity.

---

## 🔗 Key URLs
- **GitHub Repo:** https://github.com/rifaterdemsahin/memory-palace
- **GitHub Pages:** https://rifaterdemsahin.github.io/memory-palace
- **LinkedIn:** https://www.linkedin.com/in/rifaterdemsahin/
- **YouTube:** https://www.youtube.com/@RifatErdemSahin

---

## 🐳 Infrastructure
- **Qdrant** runs on `localhost:6333` (Docker)
- **Ollama** runs on `localhost:11434` (Docker)
- Embed model: `nomic-embed-text` (768-dim, 4096 ctx)
- Collection name: `memory_palace`
- See `4_Formula/qdrant_ollama_setup.md` for full setup

---

## 🚫 Never Do
- Never commit `.env` with real credentials
- Never delete files — move to `obsolete/`
- Never skip `git push` after commits
- Never modify `1_Real_Unknown/` after the planning phase without user approval
- Never break the shared menu across pages
