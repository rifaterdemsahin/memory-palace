# 🧠 Claude Rules — claude.md
> Rules specific to **Claude Code (Anthropic)** when working in this repository.

## Inherits from
See `aigent.md` for general agent rules. This file adds Claude-specific behaviour.

---

## 🎯 Claude's Role in Memory Palace
Claude helps with:
- 📝 Generating and refining markdown documentation
- 💻 Writing Luau (Roblox) scripts in `5_Symbols/`
- 🐍 Python scripts for Qdrant + Ollama embedding pipelines
- 🧪 Creating test checklists in `7_Testing_Known/`
- 🔍 Logging and diagnosing errors in `6_Semblance/`
- 🌐 Maintaining HTML pages with shared menu

---

## 🛠️ Preferred Tools
| Task | Preferred Approach |
|------|-------------------|
| Read files | `Read` tool (not cat) |
| Edit files | `Edit` tool (not sed/awk) |
| Create files | `Write` tool |
| Search code | `Grep` tool |
| Find files | `Glob` tool |
| Shell commands | `Bash` (only when necessary) |

---

## 📋 Workflow
1. **Read** relevant files first — understand before modifying
2. **Create tasks** for multi-step work using `TaskCreate`
3. **Implement** changes with `Edit` / `Write`
4. **Git commit** after each meaningful change
5. **Git push** to deploy to GitHub Pages
6. **Update memory** (`~/.claude/projects/.../memory/MEMORY.md`) with key insights

---

## 💬 Communication Style
- Use emojis where they add clarity 🎯
- Keep responses concise — code first, explanation second
- Reference file paths with `file:line_number` format
- Use GitHub-flavoured Markdown for all docs

---

## 🔄 Git Workflow
```bash
git add -A
git commit -m "🏛️ feat: <description>"
git push origin main
```
Commit message prefixes:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation
- `style:` HTML/CSS only
- `refactor:` code restructure
- `test:` test additions

---

## ⚡ Model Preferences
- Default model: `claude-sonnet-4-6`
- For bulk generation: `claude-haiku-4-5-20251001`
- Embed model (Ollama): `nomic-embed-text`
