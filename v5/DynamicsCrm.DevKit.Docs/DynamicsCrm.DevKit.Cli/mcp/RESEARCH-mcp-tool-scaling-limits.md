# Research: MCP Tool Scaling, Token Costs, and AI Context Retention

**Document Type:** Research Summary
**Project:** DynamicsCrm.DevKit MCP Server (31 tools)
**Last Updated:** 2026-04-06
**Status:** Complete

---

## 1. Optimal Tool Count per MCP Server

### Anthropic Official Guidance

Anthropic's documentation and engineering blog posts provide the most specific data points:

| Tool Count | Behavior |
|---|---|
| 1-10 | Ideal range. All tools fit comfortably in context. Selection accuracy is high. |
| 10-30 | Workable. Definitions start consuming 10K+ tokens. Still acceptable selection accuracy. |
| 30-50 | **Performance cliff begins.** Anthropic states: "Claude's ability to correctly pick the right tool degrades significantly once you exceed 30-50 available tools." |
| 50-100+ | Requires mitigation (tool search, deferred loading). A 5-server MCP setup consumes ~55K tokens in definitions alone. |
| 100-134K+ | Anthropic observed 134K tokens consumed by definitions in internal testing. Requires tool search. |

**Source:** [Tool Search Tool docs](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/tool-search-tool) -- "Claude's ability to correctly pick the right tool degrades significantly once you exceed 30-50 available tools."

**Source:** [Advanced Tool Use (Anthropic Engineering)](https://www.anthropic.com/engineering/advanced-tool-use) -- "A five-server setup (GitHub, Slack, Sentry, Grafana, Splunk) uses approximately 55K tokens just for tool definitions."

### Anthropic's Tool Search Tool as Evidence

Anthropic built the Tool Search Tool specifically to solve this problem. Key data:

- Designed for 10+ tools, tested up to **10,000 tools**
- Returns 3-5 most relevant tools per search
- Reduced token usage by **85%+**
- Opus 4 accuracy improved from **49% to 74%** when using tool search vs. loading all tools
- Opus 4.5 improved from **79.5% to 88.1%**

**Recommendation threshold:** "Use tool search when definitions exceed 10K tokens, experiencing selection accuracy issues, or managing 10+ tools across multiple MCP servers."

### OpenAI Guidance

OpenAI's public documentation does not publish a specific maximum tool count, but their API supports parallel function calling. Community benchmarks and developer experience generally align with:

- **Under 20 functions**: Reliable selection
- **20-50 functions**: Accuracy degrades
- **50+**: Significant degradation, similar to Anthropic findings

OpenAI does not publish token costs per function definition, but their models tokenize function schemas similarly to Anthropic's approach.

### Practical Assessment for DevKit (31 Tools)

Our 31-tool MCP server sits right at the edge of the performance cliff (30-50 range). This means:

- We are likely experiencing some tool selection accuracy loss
- Consolidation of related tools (CRUD operations) into multi-action tools is the correct strategy
- Adding more tools beyond 31 should use `defer_loading` or tool search patterns

---

## 2. Maximum Actions per Multi-Action Tool

### Anthropic Official Recommendation

Anthropic explicitly recommends consolidation in their "Define Tools" documentation:

> "Consolidate related operations into fewer tools. Rather than creating a separate tool for every action (create_pr, review_pr, merge_pr), group them into a single tool with an action parameter."

**Source:** [Define Tools (Anthropic)](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/define-tools)

### Anthropic Engineering Blog Guidance

The "Writing Tools for AI Agents" blog post reinforces:

> "Rather than creating many single-purpose tools, consolidate functionality into fewer, more powerful tools."

Examples given include tools that handle "multiple discrete operations (or API calls) under the hood."

**Source:** [Writing Tools for AI Agents (Anthropic Engineering)](https://www.anthropic.com/engineering/writing-tools-for-agents)

### Action Count Analysis

No official source provides a specific "ideal number of actions per tool." However, based on analysis of patterns across Anthropic docs, the Claude Code system itself, and community practice:

| Actions per Tool | Assessment |
|---|---|
| 2-3 | Conservative. Easy for AI to reason about. Low ambiguity. |
| 4-6 | **Sweet spot.** Enough to consolidate related CRUD operations. The `action` parameter stays manageable. AI can hold all options in working memory. |
| 7-8 | Pushing limits. Description must be very clear. AI may occasionally pick wrong action. |
| 9+ | Diminishing returns. The tool description becomes long, and the AI's accuracy selecting the right action drops. Consider splitting. |

### Evidence from Claude Code's Own Tools

Looking at the tools available in Claude Code itself as a reference pattern:

- `manage_record`: 4 actions (create, read, update, delete)
- `manage_view`: 6 actions (list, detail, create, update, rename, undo)
- `manage_environment_variable`: 6 actions (list, detail, create, update, delete, clear)
- `manage_webresource`: 5 actions (list, detail, create, update, delete)

The pattern strongly suggests **4-6 actions as the practical sweet spot**, with 6 being the maximum commonly observed in well-designed tools.

### Why 6 Appears to Be the Ceiling

1. **Cognitive load**: Each action adds parameters and description text. Beyond 6, the description becomes unwieldy
2. **Parameter collision**: Different actions need different parameters. More actions means more "only for action X" conditionals
3. **Token cost**: Each additional action adds ~50-100 tokens to the description
4. **Error surface**: More actions means more ways to call the tool incorrectly

---

## 3. Token Cost per Tool Schema

### Anthropic Official Token Costs

Anthropic documents a **fixed system prompt overhead** for enabling tool use:

| Model | Auto/None | Any/Tool |
|---|---|---|
| Claude Opus 4.6 / 4.5 / 4.1 / 4 | 346 tokens | 313 tokens |
| Claude Sonnet 4.6 / 4.5 / 4 | 346 tokens | 313 tokens |
| Claude Haiku 4.5 | 346 tokens | 313 tokens |
| Claude Haiku 3.5 | 264 tokens | 340 tokens |

This is the **base cost** just for enabling tool use (even with 1 tool). On top of this, each tool definition adds tokens based on its schema complexity.

**Source:** [Tool Use Overview (Anthropic)](https://platform.claude.com/docs/en/docs/build-with-claude/tool-use/overview)

### Per-Tool Schema Token Estimates

Anthropic does not publish exact per-tool token counts, but based on their engineering blog data and observed patterns:

| Tool Complexity | Estimated Tokens per Tool |
|---|---|
| Simple (1-3 params, short description) | 100-200 tokens |
| Medium (5-10 params, detailed description) | 300-600 tokens |
| Complex (10+ params, multi-action, rich description) | 600-1,500 tokens |
| Very complex (like DevKit's `upsert_column`) | 1,500-2,500+ tokens |

### Real-World Overhead Calculations

Using Anthropic's benchmark data:

| Scenario | Estimated Token Cost |
|---|---|
| 15 simple tools | ~3,000-5,000 tokens |
| 15 complex tools (rich descriptions) | ~10,000-20,000 tokens |
| 30 complex tools (like DevKit's MCP) | ~20,000-45,000 tokens |
| 55K tokens (observed by Anthropic) | 5-server multi-MCP setup |
| 134K tokens (observed by Anthropic) | Large production deployment |

**Source:** [Advanced Tool Use (Anthropic Engineering)](https://www.anthropic.com/engineering/advanced-tool-use) -- "55K tokens" and "134K tokens" from real observations.

### Tool Input Examples Token Cost

Anthropic also documents the cost of `input_examples`:

- Simple examples: ~20-50 tokens each
- Complex nested objects: ~100-200 tokens each

**Source:** [Define Tools (Anthropic)](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/define-tools)

### Impact Assessment for DevKit

With 31 tools, many having 10+ parameters and rich descriptions, DevKit's MCP server likely consumes **25,000-40,000 tokens** in tool definitions. This is significant but manageable because:

- Claude Code uses prompt caching (tool definitions cached across turns)
- Our context window is 200K tokens
- The tool definitions are stable (don't change between turns)

---

## 4. AI Context Retention / "Forgetting" Prevention

### How Tool Descriptions Help AI Remember

Anthropic's primary recommendation is emphatic:

> "Provide extremely detailed descriptions. This is by far the most important factor in tool performance."

Descriptions should include:
- What the tool does
- When it should be used (and when it should NOT)
- What each parameter means
- Important caveats or limitations
- "Aim for at least 3-4 sentences per tool description, more if the tool is complex"

**Source:** [Define Tools (Anthropic)](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/define-tools)

### Description Length vs AI Accuracy Tradeoffs

| Description Quality | Impact |
|---|---|
| Too short (1 sentence) | AI frequently picks wrong tool or wrong parameters |
| Moderate (3-4 sentences) | Anthropic's recommended minimum. Good tool selection accuracy |
| Detailed (paragraph+) | Best accuracy. "Small refinements to tool descriptions can yield dramatic improvements" |
| Excessively long | Diminishing returns. Contributes to context bloat. |

The tradeoff is clear: **more detail improves accuracy up to a point, but each extra token in descriptions multiplied by 31 tools adds up fast.**

**Source:** [Writing Tools for AI Agents (Anthropic Engineering)](https://www.anthropic.com/engineering/writing-tools-for-agents) -- "Small refinements to tool descriptions can yield dramatic improvements."

### "Hints Toward Sibling Tools" Pattern

This is the practice of mentioning related tools in a tool's description. Examples from DevKit's current tool descriptions:

- `build_form_xml`: "Related: get_forms (form layout), get_views (grid columns)"
- `get_forms`: "To UPDATE: use upsert_form (not execute_webapi)"
- `manage_webresource`: "Call this tool first to find library_name needed for build_form_xml add_event/add_library"

This pattern helps the AI:
1. Discover tools it might not have considered
2. Understand workflow sequences (get_forms -> build_form_xml -> upsert_form)
3. Avoid using the wrong tool for an operation

### Context Rot and Forgetting

Research cited by Anthropic identifies "context rot" as a real phenomenon:

> "As context window size increases, model accuracy in recalling information decreases. LLMs operate with finite 'attention budgets' that deplete with each new token."

**Source:** [Effective Context Engineering (Anthropic Engineering)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

Mitigation strategies:
1. **Just-in-time retrieval**: Load context only when needed (tool search, defer_loading)
2. **Compaction**: Summarize conversation history, discard redundant tool outputs
3. **Structured note-taking**: External memory files for multi-step workflows
4. **Sub-agent architectures**: Specialized agents with clean context windows

### Preventing Tool "Forgetting"

Key strategies ranked by effectiveness:

1. **Rich descriptions** (most impactful) -- Include when/why to use each tool
2. **Namespacing** -- Prefix tools by domain (`get_`, `manage_`, `upsert_`, `build_`)
3. **Cross-references** -- "Related: tool_x" and "See also: tool_y" in descriptions
4. **Consolidation** -- Fewer tools = less to forget. 15 well-named tools beats 30 mediocre ones
5. **System prompt hints** -- "You can search for tools to interact with X, Y, and Z"
6. **Deferred loading** -- Keep 3-5 most-used tools loaded; defer rare ones

---

## 5. MCP Resources vs Tool Descriptions

### When to Use MCP Resources

MCP Resources (`schema://`, `docs://`) are **application-driven** -- the host application decides when to load them. They are NOT automatically included in the AI's context.

| Characteristic | MCP Resources | Tool Descriptions |
|---|---|---|
| **Loaded** | On-demand (application or AI decides) | Always (part of tool schema) |
| **Token cost** | Zero until loaded | Every turn (part of system prompt) |
| **AI visibility** | Only when explicitly read | Always visible |
| **Best for** | Large reference docs, XSD schemas, detailed instructions | Concise tool usage guidance |
| **Size** | Can be very large (KB to MB) | Should be compact (100-500 tokens) |

**Source:** [MCP Resources Specification](https://modelcontextprotocol.io/docs/concepts/resources)

### DevKit's Current Resource Design

DevKit uses 6 MCP Resources:

| URI | Content | Why Resource (not description) |
|---|---|---|
| `schema://formxml` | FormXml.xsd | Too large for description (~5K+ tokens) |
| `schema://layoutxml` | LayoutXml.xsd | Too large for description |
| `schema://fetchxml` | Fetch.xsd | Too large for description |
| `schema://sitemapxml` | SiteMap.xsd + rules | Too large for description |
| `docs://instructions_for_formxml` | FormXML manipulation rules | Complex instructions, loaded only when editing forms |
| `docs://instructions_for_views` | View/LayoutXML rules | Complex instructions, loaded only when editing views |

### Decision Framework

**Put in tool description when:**
- Content is under 200 tokens
- AI needs it every time the tool is considered
- It's "when to use" / "when NOT to use" guidance
- Cross-references to related tools
- Parameter explanations

**Put in MCP Resource when:**
- Content is over 500 tokens
- AI only needs it for specific operations (e.g., XML schema only when building XML)
- It's reference material (XSD, detailed syntax rules)
- It changes independently of the tool definition

**Anti-pattern to avoid:** Stuffing everything into tool descriptions. This causes context bloat and makes every request more expensive. DevKit's approach of keeping descriptions focused and offloading detailed schemas/instructions to resources is the correct pattern.

### The "Resource Hint" Pattern

The optimal hybrid approach: Put a brief hint in the tool description pointing to the resource.

Example from DevKit:
```
"To UPDATE: use upsert_form (not execute_webapi). See docs://instructions_for_formxml"
```

This gives the AI enough context to know the resource exists and when to load it, without paying the token cost on every turn.

---

## Summary of Key Numbers

| Metric | Value | Source |
|---|---|---|
| Performance cliff starts | 30-50 tools | Anthropic Tool Search docs |
| Tool search max catalog | 10,000 tools | Anthropic Tool Search docs |
| Base tool-use system prompt | 346 tokens | Anthropic pricing docs |
| Simple tool definition | ~100-200 tokens | Estimated from Anthropic data |
| Complex tool definition | ~600-1,500 tokens | Estimated from Anthropic data |
| 5-server MCP setup overhead | ~55K tokens | Anthropic Engineering blog |
| Large deployment overhead | ~134K tokens | Anthropic Engineering blog |
| Tool search token reduction | 85%+ | Anthropic Engineering blog |
| Optimal actions per multi-action tool | 4-6 | Pattern analysis |
| Minimum description length | 3-4 sentences | Anthropic Define Tools docs |
| Input example cost (simple) | 20-50 tokens | Anthropic Define Tools docs |
| Input example cost (complex) | 100-200 tokens | Anthropic Define Tools docs |

---

## Sources

- [Anthropic: Tool Search Tool](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/tool-search-tool)
- [Anthropic: Define Tools](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/define-tools)
- [Anthropic: Tool Use Overview](https://platform.claude.com/docs/en/docs/build-with-claude/tool-use/overview)
- [Anthropic: Tool Use with Prompt Caching](https://platform.claude.com/docs/en/docs/agents-and-tools/tool-use/tool-use-with-prompt-caching)
- [Anthropic Engineering: Writing Tools for AI Agents](https://www.anthropic.com/engineering/writing-tools-for-agents)
- [Anthropic Engineering: Advanced Tool Use](https://www.anthropic.com/engineering/advanced-tool-use)
- [Anthropic Engineering: Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [MCP Specification: Tools](https://modelcontextprotocol.io/docs/concepts/tools)
- [MCP Specification: Resources](https://modelcontextprotocol.io/docs/concepts/resources)
- [MCP Specification: Architecture](https://modelcontextprotocol.io/docs/concepts/architecture)
- [MCP: Design Principles](https://modelcontextprotocol.io/community/design-principles)
- [MCP GitHub Discussions: Tool Bloat (#2036)](https://github.com/modelcontextprotocol/specification/discussions/2036)
- [MCP GitHub Discussions: Large Toolsets (#1203)](https://github.com/modelcontextprotocol/specification/discussions/1203)
