# ✅ Test Checklist — Testing Known

> Validate every OKR from `1_Real_Unknown/okrs.md`. Each item traces to an objective.

🎥 **Watch the testing walkthrough first:** [YouTube @RifatErdemSahin](https://www.youtube.com/@RifatErdemSahin)

---

## 🌐 O3 — GitHub Pages Site (Test First — Already Live)

### Site Accessibility
- [ ] `https://rifaterdemsahin.github.io/memory-palace` loads
- [ ] `https://rifaterdemsahin.github.io/memory-palace/index.html` loads
- [ ] All 7 section pages load without errors (check browser console)
- [ ] No broken image references (all 404s documented in 6_Semblance)

### Navigation Menu
- [ ] Sidebar menu appears on desktop (≥ 769px width)
- [ ] Hamburger button (☰) appears on mobile (< 769px)
- [ ] Tapping hamburger opens sidebar on mobile
- [ ] Tapping overlay closes sidebar on mobile
- [ ] Active page is highlighted in menu (e.g., `4_Formula/index.html` highlights "4. Formula")
- [ ] All 9 menu links are clickable and load correct pages
- [ ] GitHub, LinkedIn, YouTube external links open in new tab

### Markdown Renderer
- [ ] `markdown_renderer.html` loads correctly
- [ ] Doc grid shows all 11 documents
- [ ] Clicking a doc card loads and renders the markdown
- [ ] `?file=4_Formula/qdrant_ollama_setup.md` URL parameter works
- [ ] Code blocks have syntax highlighting (PrismJS)
- [ ] Back navigation works (browser back button)

### Responsive Design
- [ ] Test at 375px width (iPhone SE) — no horizontal scroll
- [ ] Test at 768px width (tablet) — menu collapses correctly
- [ ] Test at 1440px width (desktop) — layout fills screen nicely
- [ ] Images in carousel don't overflow on mobile
- [ ] Tables are scrollable horizontally on small screens

### Debug Mode
- [ ] Adding `?debug=true` shows debug bar with page info
- [ ] Debug bar shows correct pathname, section, and root
- [ ] "Disable" button in debug bar hides it
- [ ] `localStorage.setItem('mp_debug', 'true')` persists debug mode

---

## 🤖 O2 — AI Infrastructure (Qdrant + Ollama)

### Docker Compose
- [ ] `docker compose up -d` starts without errors
- [ ] `docker compose ps` shows both containers as "Up"
- [ ] `docker compose logs qdrant` shows no error lines
- [ ] `docker compose logs ollama` shows no error lines

### Qdrant Health
- [ ] `curl http://localhost:6333/healthz` returns `{"title":"qdrant - Ready","version":"..."}`
- [ ] `http://localhost:6333/dashboard` loads the Qdrant web UI
- [ ] Collection `memory_palace` exists: `curl http://localhost:6333/collections/memory_palace`
- [ ] Collection has correct vector size (768)

### Ollama Embeddings
- [ ] `ollama list` shows `nomic-embed-text`
- [ ] Single embedding test returns 768 floats
- [ ] Response time < 2 seconds for a short text
- [ ] No memory errors during embedding

### Embedding Pipeline
- [ ] `python 5_Symbols/embed_documents.py` runs without errors
- [ ] All .md files are embedded (count in output matches file count)
- [ ] Qdrant collection point count > 0 after pipeline run
- [ ] No documents from `obsolete/` are embedded

### Semantic Search
- [ ] Query "roblox memory palace" returns relevant results
- [ ] Top result score > 0.7
- [ ] `6_Semblance/error_log.md` returned for query "error fix workaround"
- [ ] `4_Formula/qdrant_ollama_setup.md` returned for query "docker qdrant setup"

---

## 🏛️ O1 — Roblox Memory Palace

### Roblox Studio Setup
- [ ] Roblox Studio opens without errors
- [ ] New place created: "Memory Palace"
- [ ] Studio output window is open (View > Output)

### Room 1 — Entry Hall
- [ ] Room has 4 walls, floor, ceiling
- [ ] At least 5 Parts with ProximityPrompts
- [ ] Each Part has `Concept` and `Detail` attributes set
- [ ] `MemoryLocus.lua` script is inside each locus Part
- [ ] Proximity prompt triggers when player walks near
- [ ] BillboardGui (or GUI) shows concept info
- [ ] No Luau errors in Output window

### AI Code Generation
- [ ] Claude given `4_Formula/` documents generates valid Luau code
- [ ] Generated code passes Luau LSP type checking
- [ ] Code placed in `5_Symbols/roblox/` folder
- [ ] Script works in Roblox Studio after import

---

## 📖 O4 — End-to-End Self-Learning Proof

### Complete Journey Test (one topic)
- [ ] Topic chosen and documented in `1_Real_Unknown/okrs.md`
- [ ] Environment documented in `2_Environment/`
- [ ] Simulation mockup created in `3_Simulation/`
- [ ] Formula written in `4_Formula/`
- [ ] Code implemented in `5_Symbols/`
- [ ] Errors logged in `6_Semblance/error_log.md`
- [ ] Tests pass in `7_Testing_Known/` checklist
- [ ] Loop closed: original question in `1_Real_Unknown` is answered

---

## 🎥 O5 — YouTube Content

- [ ] Walkthrough video recorded (screen + voice)
- [ ] Video published on [youtube.com/@RifatErdemSahin](https://www.youtube.com/@RifatErdemSahin)
- [ ] Video embedded in `7_Testing_Known/index.html`
- [ ] Video linked from README.md
- [ ] LinkedIn post published with project link

---

*↩️ All tests trace to OKRs in [1_Real_Unknown/okrs.md](../1_Real_Unknown/okrs.md)*
