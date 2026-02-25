# 🎨 PrismJS Integration — Symbols

> Syntax highlighting for all code blocks across the Memory Palace site.

## Setup

PrismJS is loaded from CDN on every page that displays code:

```html
<!-- In <head> — syntax theme -->
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">

<!-- Before </body> — core + autoloader -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
```

The autoloader fetches language grammars on demand. No need to include each language separately.

## Supported Languages in Memory Palace

| Language | Alias | Used In |
|----------|-------|---------|
| Lua / Luau | `lua` | 5_Symbols Roblox scripts |
| Python | `python` | Embedding pipeline |
| Bash | `bash` | Setup commands |
| JSON | `json` | Config files |
| HTML | `html` | Template examples |
| JavaScript | `javascript` | menu.js, carousel |
| YAML | `yaml` | docker-compose.yml |

## Usage in Markdown (via markdown_renderer.html)

Use fenced code blocks with language specifier:

````
```lua
-- Luau code here
local part = Instance.new("Part")
```

```python
# Python code here
import requests
```
````

## Manual Highlight (after dynamic content)

When content is injected dynamically (e.g., by marked.js), call:

```javascript
Prism.highlightAllUnder(document.getElementById('myContainer'));
```

## Theme

Current theme: **Prism Tomorrow** (dark, suitable for code-heavy docs)

To change theme, swap the CSS link for any theme from:
`https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/`

Available themes: `prism`, `prism-dark`, `prism-okaidia`, `prism-solarizedlight`,
`prism-tomorrow`, `prism-twilight`, `prism-coy`, `prism-funky`
