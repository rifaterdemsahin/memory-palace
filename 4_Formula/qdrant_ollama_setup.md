# 🗄️ Qdrant + Ollama Setup — Formula

> **Goal:** Run Qdrant (vector database) + Ollama (local LLM / embeddings) in Docker containers,
> then embed all Memory Palace markdown files for semantic search.

---

## 🐳 Docker Compose Setup

Create `docker-compose.yml` in the project root:

```yaml
version: "3.9"

services:
  # ── Qdrant Vector Database ────────────────────────────────
  qdrant:
    image: qdrant/qdrant:latest
    container_name: memory-palace-qdrant
    ports:
      - "6333:6333"   # REST API
      - "6334:6334"   # gRPC
    volumes:
      - qdrant_storage:/qdrant/storage
    environment:
      QDRANT__SERVICE__HTTP_PORT: 6333
      QDRANT__SERVICE__GRPC_PORT: 6334
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:6333/healthz"]
      interval: 30s
      timeout: 10s
      retries: 3

  # ── Ollama (Local LLM + Embeddings) ───────────────────────
  ollama:
    image: ollama/ollama:latest
    container_name: memory-palace-ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_models:/root/.ollama
    restart: unless-stopped
    # Uncomment for GPU support (NVIDIA):
    # deploy:
    #   resources:
    #     reservations:
    #       devices:
    #         - driver: nvidia
    #           count: 1
    #           capabilities: [gpu]

volumes:
  qdrant_storage:
  ollama_models:
```

---

## 🚀 Step-by-Step Setup

### Step 1 — Start Containers
```bash
# Start both services
docker compose up -d

# Verify both are running
docker compose ps
```

Expected output:
```
NAME                       STATUS
memory-palace-qdrant       Up (healthy)
memory-palace-ollama       Up
```

### Step 2 — Pull Embedding Model
```bash
# Pull nomic-embed-text (768-dim, 4096 token context window)
docker exec memory-palace-ollama ollama pull nomic-embed-text

# Verify it's available
docker exec memory-palace-ollama ollama list
```

> **Model:** `nomic-embed-text`
> **Dimensions:** 768
> **Context window:** 4096 tokens
> **Best for:** English text semantic search

### Step 3 — Create Qdrant Collection
```bash
# Create the memory_palace collection (768 dims = nomic-embed-text output size)
curl -X PUT http://localhost:6333/collections/memory_palace \
  -H 'Content-Type: application/json' \
  -d '{
    "vectors": {
      "size": 768,
      "distance": "Cosine"
    },
    "optimizers_config": {
      "default_segment_number": 2
    }
  }'
```

### Step 4 — Test Embedding
```bash
# Generate an embedding for a test phrase
curl http://localhost:11434/api/embeddings \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "nomic-embed-text",
    "prompt": "memory palace roblox studio learning"
  }'
```

Expected: JSON with `"embedding": [0.123, -0.456, ...]` (768 values)

### Step 5 — Run Embedding Pipeline
```bash
# Install Python dependencies
pip install requests pathlib

# Run the embed script
python 5_Symbols/embed_documents.py
```

### Step 6 — Semantic Search
```bash
# Query: find documents about "roblox memory palace"
curl -X POST http://localhost:6333/collections/memory_palace/points/search \
  -H 'Content-Type: application/json' \
  -d '{
    "vector": [/* 768-dimensional embedding of your query */],
    "limit": 5,
    "with_payload": true
  }'
```

Or use the Python query helper:
```python
import requests

def search(query: str, top_k: int = 5) -> list:
    # 1. Embed the query
    emb_resp = requests.post(
        "http://localhost:11434/api/embeddings",
        json={"model": "nomic-embed-text", "prompt": query}
    )
    vector = emb_resp.json()["embedding"]

    # 2. Search Qdrant
    search_resp = requests.post(
        "http://localhost:6333/collections/memory_palace/points/search",
        json={"vector": vector, "limit": top_k, "with_payload": True}
    )
    return search_resp.json()["result"]

results = search("How do I build a memory palace in Roblox?")
for r in results:
    print(f"Score: {r['score']:.3f} | File: {r['payload']['file']}")
```

---

## 🔍 Qdrant Dashboard

Once running, visit: [http://localhost:6333/dashboard](http://localhost:6333/dashboard)

- View collections
- Browse points
- Run test queries
- Monitor index status

---

## 🛠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Container won't start | Check Docker Desktop is running; `docker compose logs` |
| Model not found | `docker exec memory-palace-ollama ollama pull nomic-embed-text` |
| Port 6333 already in use | Change host port in docker-compose.yml |
| Embedding returns 404 | Ensure model name is exactly `nomic-embed-text` |
| Collection not found | Re-run Step 3 (PUT collection) |
| Memory issue on Mac M1 | Reduce `--memory` limit in docker-compose.yml |

---

## 📊 Architecture Diagram

```
Memory Palace Markdown Files
         │
         ▼
  embed_documents.py
         │
         ▼
  Ollama API (localhost:11434)
  nomic-embed-text model
  → 768-dim vector
         │
         ▼
  Qdrant (localhost:6333)
  collection: memory_palace
         │
    ┌────┴────┐
    │         │
  Index    Search
    │         │
    └────┬────┘
         │
         ▼
  semantic_search(query)
  → Top-5 relevant docs
         │
         ▼
  Roblox Studio (HttpService)
  Display results in-game 🎮
```

---

*📐 See also: [formula_roblox_versus_sketchup.md](formula_roblox_versus_sketchup.md)*
*💻 Implementation: [5_Symbols/index.html](../5_Symbols/index.html)*
