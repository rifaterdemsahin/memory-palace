# 🔍 Error Log — Semblance

> Log every error, near-miss, and workaround. The gap between simulation and reality.

## Format
```
### [DATE] Error title
**Cause:** What caused it
**Fix:** How it was fixed
**Workaround:** Alternative if fix not possible
**Status:** Fixed | Open | Won't Fix
```

---

## 🐛 Active Error Log

### [2026-02-25] Carousel falls back to placeholder slides
**Cause:** No real images in `3_Simulation/images/` yet
**Fix:** Add images to `3_Simulation/images/` and update `images.json`
**Workaround:** Placeholder slides show emoji + description
**Status:** Expected (placeholder behaviour)

### [2026-02-25] formula_roblox_versus_sketchup.md moved to 4_Formula
**Cause:** Root-level .md file was not in correct section folder
**Fix:** Copied to `4_Formula/`, original archived to `obsolete/`
**Workaround:** N/A
**Status:** Fixed ✅

### [2026-02-25] YouTube embed on 7_Testing_Known uses search URL
**Cause:** No specific video ID available yet
**Fix:** Replace iframe src with actual video ID when published
**Workaround:** Links to YouTube channel instead
**Status:** Open — needs real video ID

---

## ✅ Resolved Errors (Archive)

| Date | Error | Fix | Commit |
|------|-------|-----|--------|
| 2026-02-25 | Folder structure not created | Initial project setup | Initial commit |

---

## 📝 Notes on Common Patterns

### Qdrant 404 on collection operations
Always check collection exists first:
```bash
curl http://localhost:6333/collections/memory_palace
# If 404, create it first
```

### Ollama "model not found"
The model must be pulled explicitly:
```bash
ollama pull nomic-embed-text
# or inside Docker:
docker exec memory-palace-ollama ollama pull nomic-embed-text
```

### GitHub Pages: assets not loading
Paths must be relative. Never use absolute `/path/to/file` — use `../assets/style.css` instead.

### Roblox Studio: Scripts silently failing
Check Output window in Studio (View > Output). Most Luau errors are silent unless Output is open.
