# 🔧 Kilocode Rules — kilocode.md
> Rules specific to **Kilocode** AI when working in this repository.

## Inherits from
See `aigent.md` for general agent rules. This file adds Kilocode-specific behaviour.

---

## 🎯 Kilocode's Role
Kilocode handles:
- Bulk code generation from formulas in `4_Formula/`
- Refactoring large codebases in `5_Symbols/`
- Multi-file search and replace operations
- Automated testing code generation for `7_Testing_Known/`

---

## 🛠️ Mode Settings
```json
{
  "mode": "code",
  "autoApprove": false,
  "contextFiles": ["aigent.md", "claude.md", "4_Formula/qdrant_ollama_setup.md"],
  "ignorePatterns": ["obsolete/", ".env", "*.lock"]
}
```

---

## 📋 Rules
1. Always run in `code` mode for implementation tasks
2. Read `4_Formula/` files before implementing `5_Symbols/` code
3. Log any errors to `6_Semblance/error_log.md`
4. After bulk changes, run the test checklist in `7_Testing_Known/`
5. Do not auto-push — stage and review before pushing
6. Respect the folder structure — place code in correct section

---

## 🚫 Restrictions
- Never auto-commit without user review
- Never modify `1_Real_Unknown/` or `7_Testing_Known/` without explicit instruction
- Never install npm packages without updating package.json
- Never remove emojis from HTML/markdown files

---

## 📁 Kilocode Context Files (always load)
- `aigent.md` — general rules
- `4_Formula/qdrant_ollama_setup.md` — infrastructure setup
- `5_Symbols/prism_integration.md` — syntax highlighting rules
