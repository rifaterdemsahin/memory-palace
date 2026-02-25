# 🗺️ Roadmap — Memory Palace

## Timeline

### ✅ Phase 0 — Foundation (Complete)
- [x] Create 7-stage project structure
- [x] GitHub Pages deployment with GitHub Actions
- [x] Shared responsive menu across all pages
- [x] Markdown renderer with PrismJS
- [x] README with clickable links
- [x] Agent rule files (aigent.md, claude.md, kilocode.md)
- [x] robots.txt, sitemap.xml, .gitignore, .env template

### 🔄 Phase 1 — AI Infrastructure
- [ ] Docker Compose with Qdrant + Ollama
- [ ] Pull `nomic-embed-text` model
- [ ] Create `memory_palace` Qdrant collection
- [ ] Python embedding pipeline (`5_Symbols/embed_documents.py`)
- [ ] Health check automation

### 📅 Phase 2 — First Roblox Room
- [ ] Install Roblox Studio
- [ ] Build Room 1: "Memory Palace Entry Hall"
- [ ] Add 5 knowledge loci with ProximityPrompts
- [ ] Luau script: MemoryLocus.lua
- [ ] Test locus interaction in Studio

### 📅 Phase 3 — Embedding Pipeline Live
- [ ] Run embed pipeline on all markdown files
- [ ] Verify embeddings in Qdrant dashboard (localhost:6333/dashboard)
- [ ] Build semantic search query function in Python
- [ ] Test: query returns relevant document

### 📅 Phase 4 — Roblox ↔ Qdrant Bridge
- [ ] HTTP service in Roblox (HttpService)
- [ ] Query Qdrant from Roblox Luau
- [ ] Display search results as BillboardGui in Studio
- [ ] Demo: ask a question in Roblox, get answer from docs

### 📅 Phase 5 — AI Agent Auto-Code
- [ ] Claude reads `4_Formula/` and generates Luau
- [ ] Generated scripts placed in `5_Symbols/roblox/`
- [ ] Kilocode bulk-generates test scripts in `7_Testing_Known/`
- [ ] Review + merge generated code

### 📅 Phase 6 — Content & Documentation
- [ ] Record YouTube walkthrough video
- [ ] Embed video in 7_Testing_Known/index.html
- [ ] Publish blog post / LinkedIn article
- [ ] Share on GitHub with good README
- [ ] All 7 stages used for at least one complete topic

---

## 📊 Success Metrics
| Metric | Target | Current |
|--------|--------|---------|
| GitHub Pages uptime | 99%+ | ✅ Live |
| Pages with working nav | 9/9 | ✅ 9/9 |
| Embedded documents | 10+ | 🔄 0 (pipeline not run) |
| Roblox rooms | 3+ | 🔄 0 |
| Semantic search precision | >0.8 | 🔄 N/A |
| YouTube views | 100+ | 🔄 0 |
